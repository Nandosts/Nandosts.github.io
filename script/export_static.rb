require_relative '../config/environment'
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

puts "Copying assets..."
FileUtils.cp_r("public/assets", export_dir) if Dir.exist?("public/assets")
Dir.glob("public/*").each do |file|
  next if file.include?("assets") || file.end_with?(".html")
  FileUtils.cp_r(file, export_dir)
end

# Gerar sitemap.xml para SEO
puts "Gerando sitemap.xml..."
urls_sitemap = []
base_paths.each do |caminho_base|
  caminho_limpo = caminho_base == "/" ? "" : caminho_base
  urls_sitemap << "https://nandosts.github.io#{caminho_limpo}"
  locales.each do |idioma|
    urls_sitemap << "https://nandosts.github.io/#{idioma}#{caminho_limpo}"
  end
end
urls_sitemap.uniq!

conteudo_sitemap = <<~XML
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  #{urls_sitemap.map { |url| "  <url>\n    <loc>#{url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>#{url == 'https://nandosts.github.io' ? '1.0' : '0.8'}</priority>\n  </url>" }.join("\n")}
  </urlset>
XML

File.write(File.join(export_dir, "sitemap.xml"), conteudo_sitemap)
File.write(File.join("public", "sitemap.xml"), conteudo_sitemap)

puts "Export completed to #{export_dir}"
