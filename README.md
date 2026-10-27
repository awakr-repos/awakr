# awakr

Sites institucionais para pequenos negócios — gerados estaticamente e hospedados na Cloudflare Pages.

## Stack

- **[Astro](https://astro.build)** — framework estático, zero JS por padrão
- **[Tailwind CSS v4](https://tailwindcss.com)** — estilos
- **[@awakr/awake-ui](https://www.npmjs.com/package/@awakr/awake-ui)** — componentes React (apenas em páginas /demo)
- **[Cloudflare Pages](https://pages.cloudflare.com)** — hospedagem e deploy
- **[Sanity](https://sanity.io)** — CMS (integração futura, para portfólio de cases)

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
  components/
    layout/     ← Header, Footer
    sections/   ← Hero, CTA, Layouts, Pricing, Components
  layouts/      ← BaseLayout (site), DemoLayout (demos de cliente)
  pages/
    index.astro        ← marketing site PT (/)
    en/index.astro     ← marketing site EN (/en/)
    es/index.astro     ← marketing site ES (/es/)
    demo/              ← simulações de sites de clientes
  styles/       ← global.css (Tailwind v4 + tokens + WCAG)
  i18n/         ← traduções PT, EN, ES
  lib/          ← integração Sanity (futura)
public/         ← assets estáticos, PWA manifest, service worker
```

## i18n

Roteamento estático: PT em `/`, EN em `/en/`, ES em `/es/`.  
Traduções em `src/i18n/pt.ts`, `en.ts`, `es.ts`.

## PWA

O site é instalável como app no celular. Requer ícones PNG no manifest (já incluídos em `public/`).

## Deploy

Push para `main` dispara build automático no Cloudflare Pages.

## Variáveis de ambiente

Necessárias somente quando integração com Sanity for ativada:

```env
SANITY_PROJECT_ID=seu_project_id
SANITY_DATASET=production
```
