module ApplicationHelper
  def titulo_pagina
    if content_for?(:title)
      "#{content_for(:title)} | Fernando Melo"
    else
      "Fernando Melo | Desenvolvedor Full Stack & Engenheiro de Software"
    end
  end

  def descricao_meta_pagina
    if content_for?(:meta_description)
      content_for(:meta_description)
    else
      "Desenvolvedor Full Stack e Engenheiro de Software com mais de 5 anos de experiência na construção de sistemas web escaláveis em Ruby on Rails, JavaScript e arquiteturas modernas."
    end
  end

  def url_canonica_pagina
    caminho_base = request.path == "/" ? "" : request.path
    "https://nandosts.github.io#{caminho_base}"
  end
end
