require 'json'
require 'yaml'

['en', 'pt-BR'].each do |locale|
  json_path = "legacy_frontend/src/#{locale}.json"
  next unless File.exist?(json_path)

  data = JSON.parse(File.read(json_path))
  # Fix pt-BR locale key to pt-BR (Rails supports it, but filename is usually pt-BR.yml)
  # YAML top key should be string 'pt-BR'
  
  yaml_content = { locale => data }.to_yaml
  
  File.write("config/locales/#{locale}.yml", yaml_content)
  puts "Converted #{locale} to config/locales/#{locale}.yml"
end
