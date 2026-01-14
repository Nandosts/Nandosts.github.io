require "fileutils"

export_dir = "public_static"
FileUtils.rm_rf(export_dir)
FileUtils.mkdir_p(export_dir)

# Initialize app session
app = ActionDispatch::Integration::Session.new(Rails.application)
app.host = "localhost"

locales = [ "pt-BR", "en" ]
base_paths = [ "/", "/about" ]
Project.all.each { |p| base_paths << "/sites/#{p.id}" }

locales.each do |locale|
  puts "Exporting for locale: #{locale}..."
  base_paths.each do |base_path|
    # Format the path with the locale param
    path = "#{base_path}?locale=#{locale}"
    app.get(path)

    if app.response.status == 200
      # Create localized directory structure: public_static/en/about/index.html
      folder_path = File.join(export_dir, locale, base_path)
      FileUtils.mkdir_p(folder_path)
      File.write(File.join(folder_path, "index.html"), app.response.body)

      # For the default locale (pt-BR), also save at the root: public_static/about/index.html
      if locale == "pt-BR"
        root_folder = File.join(export_dir, base_path)
        FileUtils.mkdir_p(root_folder)
        File.write(File.join(root_folder, "index.html"), app.response.body)
      end
    else
      puts "  Error exporting #{path}: #{app.response.status}"
    end
  end
end

puts "Compiling assets..."
system("bin/rails assets:precompile RAILS_ENV=production")

puts "Copying assets..."
FileUtils.cp_r("public/assets", export_dir) if Dir.exist?("public/assets")
Dir.glob("public/*").each do |file|
  next if file.include?("assets") || file.end_with?(".html")
  FileUtils.cp_r(file, export_dir)
end

puts "Export completed to #{export_dir}"
