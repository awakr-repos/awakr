# awakr

Sites institucionais para pequenos negócios — gerenciados via Sanity, hospedados na Cloudflare Pages.

## Stack

- **[Astro](https://astro.build)** — framework estático, zero JS por padrão
- **[Tailwind CSS v4](https://tailwindcss.com)** — estilos
- **[@awakr/awake-ui](https://www.npmjs.com/package/@awakr/awake-ui)** — componentes React (somente nas páginas de demo)
- **[Sanity](https://sanity.io)** — CMS (integração em desenvolvimento)
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hospedagem e deploy

## Começando

```bash
# Na pasta raiz do projeto
npm install
npm run dev
```

O dev server sobe em `http://localhost:4321`.

## Comandos

| Comando | Ação |
|---|---|
| `npm run dev` | Dev server em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview do build localmente |

> Todos os comandos devem ser executados na raiz do projeto (`/Users/nil/projects/awakr`).

## Estrutura

```
src/
  components/    ← componentes Astro do marketing site
  layouts/       ← BaseLayout (site) e DemoLayout (demos de cliente)
  pages/
    index.astro  ← marketing site
    demo/        ← simulações de sites de clientes
  styles/        ← global.css (Tailwind v4 + tokens)
  lib/           ← integração Sanity
public/          ← assets estáticos
```

## Variáveis de ambiente

Crie um `.env` na raiz com:

```env
SANITY_PROJECT_ID=seu_project_id
SANITY_DATASET=production
```

## Deploy

Push para `main` na org `awakr` no GitHub dispara build automático no Cloudflare Pages.
