class PagesController < ApplicationController
  def home
  end

  def about
    @languages = [
      "Ruby", "Ruby on Rails", "JavaScript", "TypeScript", "React", "Svelte",
      "React Native", "Ionic", "Strapi", "PostgreSQL", "MySQL", "Redis",
      "AWS", "Docker", "Firebase", "LLMs", "RAG"
    ]
  end

  def lorem
    @repeat = (params[:repeat] || 1).to_i
    @repeat = 1 if @repeat < 1
  end
end