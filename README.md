# Jesus Moveis Planejados

Site estatico no formato link da bio para Instagram.

## Rodando com Node

Use o Node para servir o projeto localmente:

```powershell
npm.cmd start
```

Depois acesse:

```text
http://localhost:3000
```

Para usar outra porta:

```powershell
$env:PORT=4000; npm.cmd start
```

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
