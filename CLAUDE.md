# awakr — CLAUDE.md

Guia de contexto para Claude Code. Atualizado conforme o projeto evolui.

---

## O que é o awakr

**awakr** é um produto SaaS que cria sites institucionais para pequenos negócios (restaurantes, lojas, clínicas, etc.). O dono do negócio gerencia o conteúdo via Sanity Studio; o site é gerado estaticamente e hospedado na Cloudflare Pages.

**Repositório:** `github.com/awakr/awakr`  
**Deploy:** Cloudflare Pages (build automático a cada push em `main`)  
**URL de produção:** ainda não definida (aguardando domínio `awakr.io`)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Astro 7 (static, zero JS por padrão) |
| Estilo | Tailwind CSS v4 |
| Componentes React | `@awakr/awake-ui` (apenas em páginas /demo) |
| CMS | Sanity (integração futura via `@sanity/client`) |
| Deploy | Cloudflare Pages |
| Node | >= 22 |

---

## Estrutura do projeto

```
src/
  components/
    layout/       ← Header.astro, Footer.astro (marketing site)
    sections/     ← Hero, CTA, Layouts, Pricing, Components, CarouselDemo
                     EventsWidget, GoomerEmbed, PromotionsWidget
    demos/        ← componentes isolados para páginas /demo (futuro)
  layouts/
    BaseLayout.astro   ← layout do marketing site (com Header/Footer)
    DemoLayout.astro   ← layout isolado para /demo/* (sem Header/Footer)
  pages/
    index.astro        ← marketing site (HTML puro, zero React)
    demo/
      layout-1.astro   ← demo "Cantina do Zé" (restaurante minimalista)
      layout-2.astro   ← (em construção)
      layout-3.astro   ← (em construção)
  styles/
    global.css         ← Tailwind v4 + awake-ui tokens + dark mode
  lib/
    sanity.ts          ← cliente Sanity (integração futura)
public/
  favicon.ico / favicon.svg
```

---

## Decisões de arquitetura

### Marketing site: HTML puro
`src/pages/index.astro` e todos os componentes em `src/components/` usam **HTML/Astro puro** — zero React, zero `client:load`. Isso garante build estático perfeito e máxima performance.

### /demo/*: awake-ui permitida
Páginas em `src/pages/demo/` podem usar componentes React do `@awakr/awake-ui` com `client:load`. Elas simulam o site do cliente final.

### Dark mode
Classe `dark` no `<html>`. Controlado por `localStorage` via script `is:inline` nos layouts. Tailwind v4 com `@custom-variant dark (&:is(.dark *))`.

### Sanity + Cloudflare Cron (planejado)
Componentes terão campos `active: boolean` e `activeUntil: datetime`. Um Cloudflare Cron Trigger vai disparar rebuild diário para expirar componentes automaticamente — sem precisar do plano pago do Sanity.

---

## Comandos

> Todos executados em `/Users/nil/projects/awakr` (raiz do projeto)

```bash
npm run dev       # dev server em localhost:4321
npm run build     # build de produção em ./dist/
npm run preview   # preview do build local
```

---

## CSS — regras importantes

`src/styles/global.css` usa **Tailwind v4**. Sintaxe correta:

```css
/* ✅ correto */
@import "tailwindcss";
@custom-variant dark (&:is(.dark *));

/* ❌ errado — v3 legacy */
@tailwind base;
@tailwind components;
@tailwind utilities;
@variant dark { ... }
```

Os tokens do `@awakr/awake-ui` são sobrescritos em `:root` e `:root.dark` no `global.css` para refletir o tema preto/branco do awakr.

---

## awake-ui

- Pacote: `@awakr/awake-ui` (npm org `awakr`)
- Repo: `github.com/awakr/awake-ui`
- Build: `tsup` (CJS + ESM) + `tailwindcss --minify` para o CSS
- Dark mode: `:root.dark {}` — compatível com o sistema do awakr
- Usar **apenas em `/demo/*`** por enquanto

---

## Integrações externas

| Serviço | Status | Observações |
|---|---|---|
| Goomer | ✅ iframe funciona | Embed via `<iframe>` nas demos de restaurante |
| Menudino | ❌ 403 no servidor | Next.js SPA, não embedável via iframe |
| iFood | ❌ | Só link externo em nova aba |
| Sanity Studio | 🔜 planejado | SANITY_PROJECT_ID e SANITY_DATASET como env vars |

---

## Variáveis de ambiente

```env
# .env (não commitado)
SANITY_PROJECT_ID=...
SANITY_DATASET=production
```

Adicionar as mesmas no painel Cloudflare Pages → Settings → Environment variables.

---

## O que ainda falta

- [ ] layout-2.astro e layout-3.astro (demos)
- [ ] Integração real com Sanity (queries, content)
- [ ] Domínio awakr.io
- [ ] Template de site do cliente (projeto separado)
- [ ] Deletar `teste-iframe.html` (arquivo temporário de teste)
