# Nando Portfolio

![Imagem do portfolio](https://user-images.githubusercontent.com/65089035/193267395-8a12c955-f123-4c46-b9cf-236e386b7eb1.png)

Este projeto foi feito para divulgar um pouco do meu trabalho e histórico de desenvolvimento até agora. Foi prototipado em minha [página do figma](https://www.figma.com/file/yCRNH35dGfKcazSBVBUEBV/Portif%C3%B3lio-Nando?node-id=0%3A1). O projeto foi realizado com svelte, a partir do seguinte template: [Template svelte](https://gitlab.com/team-tecnologia/templates-and-snippets/svelte-template).

Este projeto está sujeito a alterações futuras para melhorias ou atualizações.

## Links importantes:

Site atualmente no ar: https://portfolio-nando.netlify.app/#/

Figma: https://www.figma.com/file/yCRNH35dGfKcazSBVBUEBV

## Para utilizar o mesmo template:

1. Copie o template com git clone:

```sh
# clone recent files
git clone --depth 1 https://gitlab.com/team-tecnologia/templates-and-snippets/svelte-template project-name
# enter the project
cd project-name
# remove git repository
rm -rf .git
```

2. Instale o [asdf](https://asdf-vm.com/).

3. Instale o [asdf node plugin](https://github.com/asdf-vm/asdf-nodejs).

4. Instale o node com asdf:

```sh
asdf install
```

5. Instale os pacotes node:

```sh
npm install
```

## Como rodar o projeto:

```sh
npm run dev   # live reloading mode
npm run build # generate production build
npm run start # serve the production build
npm run test  # run jest tests and snapshot tests
npm run test:ui # run screenshot test with server to view diffs
npm run test:ui-cli # run screenshot test without server (docker must be running)
npm run storybook # run the storybook server (docker must be running)
```
