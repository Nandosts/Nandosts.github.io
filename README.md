# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions (GitHub Pages)

  Como este projeto é um app Rails hospedado no GitHub Pages (que só aceita sites estáticos), utilizamos um script de exportação.

  1.  **Gerar a build estática:**
      ```bash
      bin/rails runner script/export_static.rb
      ```
      Isso criará/atualizará a pasta `public_static` com todos os arquivos HTML e assets.

  2.  **Deploy para a branch gh-pages:**
      ```bash
      git add public_static && git commit -m "Build: Atualização do site estático"
      git push origin `git subtree split --prefix public_static main`:refs/heads/gh-pages --force

      ```

* ...
