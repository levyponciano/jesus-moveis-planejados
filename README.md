# Jesus Moveis Planejados

Site estatico no formato link da bio para a Jesus Moveis Planejados.

## Estrutura

- `index.html`: conteudo da pagina.
- `styles.css`: identidade visual, layout responsivo e animacoes.
- `script.js`: links de contato e animacoes por rolagem.
- `img/`: imagens locais usadas pelo site.

## Rodando localmente

Este site e estatico. Para abrir localmente, use um servidor simples na pasta do projeto:

```powershell
npx serve .
```

Depois acesse:

```text
http://localhost:3000
```

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

O projeto publica no GitHub Pages por GitHub Actions.

Workflow:

```text
.github/workflows/deploy-pages.yml
```

Ao enviar commits para a branch `main`, a Action prepara os arquivos estaticos e publica:

- `index.html`
- `styles.css`
- `script.js`
- `img/`

No GitHub, confira em `Settings > Pages` se o source esta configurado como `GitHub Actions`.
