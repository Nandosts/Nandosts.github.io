class Project
  attr_accessor :id, :name, :description_key, :technologies, :url, :image_path, :notebook_image_path, :category

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def self.personal
    all.select { |p| p.category == :personal }
  end

  def self.struct
    all.select { |p| p.category == :struct }
  end

  def self.find(id)
    all.find { |p| p.id == id }
  end

  def self.all
    @all ||= [
      # Personal
      new(
        id: "1",
        name: "nlw-eSports-ignite",
        description_key: "e-sports",
        technologies: ["React.js", "Tailwindcss", "React Native", "Node.JS", "Express", "Prisma", "Typescript"],
        url: "https://github.com/Nandosts/NLW-ESPORTS-IGNITE",
        image_path: "nlw-eSports/nlw-eSports.svg",
        notebook_image_path: "nlw-eSports/nlw-eSports-notebook.svg",
        category: :personal
      ),
      new(
        id: "2",
        name: "LABFAZ",
        description_key: "labfaz",
        url: "https://labfaz.com.br/",
        technologies: ["React JS", "ESLint", "Cypress", "Storybook", "Typescript", "Jest", "Strapi", "Postgresql", "Docker", "Netlify"],
        image_path: "labfaz/labfaz.svg",
        notebook_image_path: "labfaz/labfaz-notebook.svg",
        category: :personal
      ),
      new(
        id: "3",
        name: "VLGI Vida",
        description_key: "vlgi-vida",
        url: "https://vlgivida.com.br/#/",
        technologies: ["Riot JS", "SCSS", "Meiosis JS", "Gitlab CI"],
        image_path: "vlgi-vida/vlgi-vida.svg",
        notebook_image_path: "vlgi-vida/vlgi-vida-notebook.svg",
        category: :personal
      ),
      new(
        id: "4",
        name: "Szot-UI",
        description_key: "szot-ui",
        url: "https://team-tecnologia.gitlab.io/public-pkgs/szot-ui/",
        technologies: ["Svelte", "ESLint", "SCSS", "Jest", "Creevey", "Storybook", "Typescript", "ionic-core"],
        image_path: "szot-ui/szot-ui.svg",
        notebook_image_path: "szot-ui/szot-ui-notebook.svg",
        category: :personal
      ),
      new(
        id: "5",
        name: "React-NLW-letmeask",
        description_key: "letmeask",
        url: "https://letmeask-cbfae.web.app/",
        technologies: ["React.js", "Firebase", "Scss", "Typescript"],
        image_path: "letmeask/letmeask.svg",
        notebook_image_path: "letmeask/letmeask-notebook.svg",
        category: :personal
      ),
      new(
        id: "6",
        name: "Space Tour",
        description_key: "space-tour",
        url: "https://github.com/Nandosts/SPACE-TOURISM-WEBSITE",
        technologies: ["Svelte-kit", "Typescript", "Eslint"],
        image_path: "space-tour/space-tour.svg",
        notebook_image_path: "space-tour/space-tour-notebook.svg",
        category: :personal
      ),
      new(
        id: "7",
        name: "Portfolio (v1)",
        description_key: "portfolio_new",
        url: "https://github.com/Nandosts/Nandosts.github.io/tree/main/legacy_frontend",
        technologies: ["Svelte", "TypeScript", "SCSS"],
        image_path: "empty-notebook.svg",
        notebook_image_path: "empty-notebook.svg",
        category: :personal
      ),
      new(
        id: "8",
        name: "Chat-AI",
        description_key: "chat_ai",
        url: "https://github.com/Nandosts/CHAT-AI",
        technologies: ["Ruby on Rails", "OpenAI API", "Stimulus", "TailwindCSS"],
        image_path: "empty-notebook.svg", # Placeholder
        notebook_image_path: "empty-notebook.svg",
        category: :personal
      ),
      new(
        id: "9",
        name: "TicTacRuby AI",
        description_key: "tictacruby_ai",
        url: "https://github.com/Nandosts/TICTACRUBY-AI",
        technologies: ["Ruby", "Minimax Algorithm"],
        image_path: "empty-notebook.svg", # Placeholder
        notebook_image_path: "empty-notebook.svg",
        category: :personal
      ),
      # new(
      #   id: "10",
      #   name: "Outros Projetos",
      #   description_key: "others",
      #   technologies: ["Svelte", "Ionic", "React Native", "ESLint", "SCSS", "Jest", "Storybook", "Typescript", "Strapi"],
      #   image_path: "empty-notebook.svg", # Placeholder
      #   notebook_image_path: "empty-notebook.svg",
      #   category: :personal
      # ),

      # Struct
      new(
        id: "201",
        name: "CRP",
        description_key: "crp",
        url: "https://www.crp-01.org.br/",
        technologies: ["Rails", "Jquery", "Scss", "Javascript"],
        image_path: "crp/crp.svg",
        notebook_image_path: "crp/crp-notebook.svg",
        category: :struct
      ),
      new(
        id: "202",
        name: "Mentoring",
        description_key: "mentoring",
        url: "https://mentoriaenfunb.com.br/",
        technologies: ["Rails", "Jquery", "Scss", "Javascript"],
        image_path: "mentoring-fs/mentoring-fs.svg",
        notebook_image_path: "mentoring-fs/mentoring-fs-notebook.svg",
        category: :struct
      ),
      new(
        id: "203",
        name: "Festival Brasil CNV",
        description_key: "festival-brasil-cnv",
        url: "https://www.festivalbrasilcnv.com.br/",
        technologies: ["Rails", "Jquery", "Bootstrap", "Owl Carousel", "Scss", "Javascript"],
        image_path: "festival-cnv/festival-cnv.svg",
        notebook_image_path: "festival-cnv/festival-cnv-notebook.svg",
        category: :struct
      ),
      new(
        id: "204",
        name: "Ressaca Trainee (trainee Struct)",
        description_key: "ressaca-trainee",
        url: "https://github.com/Nandosts/RESSACA-TRAINEE",
        technologies: ["Rails", "Jquery", "Figaro", "Sorcery", "Bootstrap", "Owl Carousel", "Scss", "Javascript"],
        image_path: "ressaca-trainee/ressaca-trainee.svg",
        notebook_image_path: "ressaca-trainee/ressaca-trainee-notebook.svg",
        category: :struct
      ),
      new(
        id: "205",
        name: "Vai de férias",
        description_key: "vai-de-ferias",
        url: "https://hotel-frontend-psi.vercel.app/",
        technologies: ["React JS", "Styled Components", "Jest", "Rails", "PostgreSQL", "Devise", "Mailjet", "Figaro", "Pagarme"],
        image_path: "vai-de-ferias/vai-de-ferias.svg",
        notebook_image_path: "vai-de-ferias/vai-de-ferias-notebook.svg",
        category: :struct
      )
    ]
  end

  def next
    all_projects = self.class.all
    index = all_projects.index { |p| p.id == self.id }
    all_projects[(index + 1) % all_projects.length]
  end

  def previous
    all_projects = self.class.all
    index = all_projects.index { |p| p.id == self.id }
    all_projects[(index - 1) % all_projects.length]
  end
end
