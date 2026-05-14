# Jesus Moveis Planejados

Site estatico no formato link da bio para Instagram.

## Rodando localmente

Este site e estatico. Para abrir localmente, use um servidor simples na pasta do projeto:

```powershell
npx serve .
```

Depois acesse:

```text
http://localhost:3000
```

## Build para deploy

```powershell
npm run build
```

O comando copia `index.html`, `styles.css`, `script.js` e `img/` para a pasta `dist/`.
A Vercel esta configurada para publicar essa pasta.

## O que trocar antes de publicar

1. No arquivo `script.js`, altere:
   - `phoneDisplay`: numero que aparece na pagina.
   - `phoneInternational`: numero no formato internacional, somente digitos. Exemplo: `5511999999999`.
   - `whatsappMessage`: mensagem automatica enviada pelo WhatsApp.

2. No arquivo `index.html`, altere:
   - Link do Instagram em `href="https://www.instagram.com/"`.
   - Fotos dos projetos nos atributos `src` das tags `img`.
   - Textos dos servicos e projetos, se quiser deixar mais especifico.

## Publicacao

Voce pode publicar a pasta em servicos como Netlify, Vercel, GitHub Pages ou qualquer hospedagem simples de HTML.
