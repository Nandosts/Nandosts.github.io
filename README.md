# Nando's Portfolio (Rails Version)

![image](https://github.com/Nandosts/Nandosts.github.io/assets/65089035/def3a6eb-8b0d-42b9-bbcd-3728b2637f95)

Este projeto é a reescrita do meu portfólio, agora utilizando Ruby on Rails. A versão original foi desenvolvida em Svelte e seu código pode ser encontrado na pasta `legacy_frontend`.

O projeto foi prototipado em minha [página do figma](https://www.figma.com/file/yCRNH35dGfKcazSBVBUEBV/Portif%C3%B3lio-Nando?node-id=0%3A1) e está sujeito a alterações futuras para melhorias ou atualizações.

## Links importantes:

- Site no ar: https://nandosts.github.io/
- Figma: https://www.figma.com/file/yCRNH35dGfKcazSBVBUEBV

## Tecnologias utilizadas:

- **Backend e Frontend:** Ruby on Rails 8
- **JavaScript:** Hotwire (Turbo & Stimulus), via Importmap
- **CSS:** Dartsass-rails
- **Banco de dados:** SQLite
- **Servidor:** Puma

## Como rodar o projeto localmente:

1.  **Instale as ferramentas de versão:**
    Este projeto utiliza [asdf](https://asdf-vm.com/) para gerenciar as versões do Ruby.

    ```sh
    asdf install
    ```

2.  **Instale as dependências:**
    Utilize o Bundler para instalar as gems do projeto.

    ```sh
    bundle install
    ```

3.  **Setup do banco de dados:**
    Prepare o banco de dados com o comando padrão do Rails.

    ```sh
    bin/rails db:setup
    ```

4.  **Inicie o servidor de desenvolvimento:**
    Use o script `bin/dev` para iniciar o servidor web e o compilador de CSS.

    ```sh
    bin/dev
    ```

    O site estará disponível em `http://localhost:3000`.

## Como rodar os testes:

O projeto utiliza Minitest para testes.

- **Testes unitários e de integração:**

  ```sh
  bin/rails test
  ```

- **Testes de sistema (System Tests):**
  ```sh
  bin/rails test:system
  ```

## Deploy (GitHub Pages)

O deploy para o GitHub Pages é automatizado via GitHub Actions. O workflow `deploy.yml` (localizado em `.github/workflows/deploy.yml`) é acionado em cada `push` para a branch `main`.

Este workflow executa os seguintes passos:
1.  Faz o checkout do código.
2.  Configura o ambiente Ruby e instala as dependências.
3.  Executa o script `script/export_static.rb` para gerar a versão estática do site na pasta `public_static`.
4.  Realiza o deploy do conteúdo da pasta `public_static` para a branch `gh-pages` do repositório.

Você pode acompanhar o status do deploy na aba "Actions" do seu repositório GitHub.
