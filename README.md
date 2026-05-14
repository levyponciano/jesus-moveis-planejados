# Jesus Moveis Planejados

Site estatico no formato link da bio para a Jesus Moveis Planejados.

## Estrutura

- `index.html`: conteudo da pagina.
- `styles.css`: identidade visual, layout responsivo e animacoes.
- `script.js`: links de contato e animacoes por rolagem.
- `img/`: imagens locais usadas pelo site.
- `build.js`: gera a pasta `dist/` para publicacao.

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

## Validacao

```powershell
npm run check
```

Esse comando verifica a sintaxe dos arquivos JavaScript.

## O que trocar antes de publicar

1. No arquivo `script.js`, altere:
   - `phoneDisplay`: numero que aparece na pagina.
   - `phoneInternational`: numero no formato internacional, somente digitos. Exemplo: `5511999999999`.
   - `whatsappMessage`: mensagem automatica enviada pelo WhatsApp.

2. No arquivo `index.html`, altere:
   - Link do Instagram.
   - Textos da pagina, se quiser deixar mais especifico.

## Publicacao

A Vercel deve usar:

- Build command: `npm run build`
- Output directory: `dist`

Voce tambem pode publicar a pasta `dist/` em servicos como Netlify, GitHub Pages ou qualquer hospedagem simples de HTML.
