# Usage: bin/rails runner script/export_static.rb
require 'fileutils'
require 'net/http'

# 1. Start the server in a separate process
puts "Iniciando servidor temporário..."
server_pid = spawn("bin/rails server -p 3001 -e development")

# 2. Wait for server to be ready
max_attempts = 30
attempts = 0
loop do
  begin
    Net::HTTP.get(URI("http://localhost:3001/up"))
    break
  rescue
    attempts += 1
    if attempts > max_attempts
      puts "Erro: Servidor não iniciou a tempo."
      Process.kill("TERM", server_pid)
      exit 1
    end
    sleep 1
  end
end

puts "Servidor pronto. Iniciando exportação..."

# 3. Define paths to export
export_dir = "public_static"
FileUtils.rm_rf(export_dir)
FileUtils.mkdir_p(export_dir)

paths = ["/"]
# Add project pages
Project.all.each do |p|
  paths << "/sites/#{p.id}"
end
paths << "/about"

# 4. Fetch and save each path
paths.each do |path|
  print "Exportando #{path}... "
  uri = URI("http://localhost:3001#{path}")
  response = Net::HTTP.get_response(uri)
  
  if response.is_a?(Net::HTTPSuccess)
    # Determine file path
    file_dir = File.join(export_dir, path)
    FileUtils.mkdir_p(file_dir)
    File.write(File.join(file_dir, "index.html"), response.body)
    puts "OK"
  else
    puts "ERRO (#{response.code})"
  end
end

# 5. Copy assets
puts "Copiando assets..."
# We need to compile assets first if they are not there
system("bin/rails assets:precompile")
FileUtils.cp_r("public/assets", export_dir) if Dir.exist?("public/assets")
# Copy other public files (images, etc)
Dir.glob("public/*").each do |file|
  next if file.include?("assets") || file.end_with?(".html")
  FileUtils.cp_r(file, export_dir)
end

# 6. Stop server
puts "Finalizando servidor..."
Process.kill("TERM", server_pid)

puts "\nExportação concluída em: #{export_dir}"
puts "Para testar localmente: npx serve #{export_dir}"
