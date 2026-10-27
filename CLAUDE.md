# awakr — CLAUDE.md

Guia de contexto para Claude Code. Atualizado conforme o projeto evolui.

---

## O que é o awakr

**awakr** é um serviço de criação de sites institucionais para pequenos negócios (restaurantes, lojas, clínicas, etc.). O site é gerado estaticamente e hospedado na Cloudflare Pages. Sanity Studio é oferecido como opção no plano mais completo.

**Repositório:** `github.com/awakr/awakr`  
**Deploy:** Cloudflare Pages (build automático a cada push em `main`)  
**URL de produção:** `awakr.pages.dev` (aguardando domínio `awakr.io`)

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

## i18n

- **Abordagem:** roteamento estático (SEO-friendly)
- **PT:** `/` (default, sem prefixo)
- **EN:** `/en/`
- **ES:** `/es/`
- **Config:** `astro.config.mjs` com `prefixDefaultLocale: false`
- **Traduções:** `src/i18n/pt.ts`, `src/i18n/en.ts`, `src/i18n/es.ts`
- **Tipo base:** `Translations` exportado de `src/i18n/pt.ts`
- **Padrão:** todos os componentes aceitam `t: Translations` e `currentLang: string` como props

---

## PWA

- `public/manifest.webmanifest` com ícones PNG (192 e 512px) — obrigatório para Chrome
- Service Worker em `public/sw.js` — funciona no navegador comum também (não só no app instalado)
- Botão de instalação no Header: aparece só em mobile (`md:hidden`) quando Chrome dispara `beforeinstallprompt`
- **Atenção:** `e.preventDefault()` deve ser chamado ANTES de qualquer `return` no handler do evento

---

## Estrutura do projeto

```
src/
  components/
    layout/       ← Header.astro, Footer.astro
    sections/     ← Hero, CTA, Layouts, Pricing, Components
  layouts/
    BaseLayout.astro   ← layout principal (Header + main + Footer, skip link, lang)
    DemoLayout.astro   ← layout isolado para /demo/* (sem Header/Footer)
  pages/
    index.astro        ← marketing site PT
    en/index.astro     ← marketing site EN
    es/index.astro     ← marketing site ES
    demo/
      layout-1.astro   ← demo "Cantina do Zé" (restaurante minimalista)
  styles/
    global.css         ← Tailwind v4 + awake-ui tokens + dark mode + WCAG
  i18n/
    pt.ts / en.ts / es.ts  ← traduções
    index.ts               ← helpers getLangFromUrl, getTranslations
  lib/
    sanity.ts          ← cliente Sanity (integração futura)
public/
  favicon.svg / icon-192.png / icon-512.png
  manifest.webmanifest
  sw.js
```

---

## Acessibilidade (WCAG 2.1 AA)

- `aria-labelledby` em todas as sections
- `aria-expanded` + `aria-controls` + `aria-label` dinâmico no hamburger
- `aria-pressed` + `aria-label` dinâmico no theme toggle
- `aria-current="page"` no idioma ativo do language switcher
- `aria-hidden="true"` em todos os SVGs decorativos
- `role="list"` nas listas de features e planos
- `focus:ring` em todos os elementos interativos
- Skip navigation link (`<a class="skip-link" href="#main-content">`) no BaseLayout
- `<main id="main-content">` envolve o slot no BaseLayout
- `prefers-reduced-motion` no global.css
- Contraste verificado: todos os textos passam 4.5:1

---

## Decisões de arquitetura

### Marketing site: HTML puro
Todos os componentes em `src/components/` usam **HTML/Astro puro** — zero React, zero `client:load`.

### /demo/*: awake-ui permitida
Páginas em `src/pages/demo/` podem usar componentes React do `@awakr/awake-ui` com `client:load`.

### Dark mode
Classe `dark` no `<html>`. Controlado por `localStorage` via script `is:inline` no BaseLayout. Tailwind v4 com `@custom-variant dark (&:is(.dark *))`.

---

## Comandos

> Todos executados em `/Users/nil/projects/awakr` (raiz do projeto)

```bash
npm run dev       # dev server em localhost:4321
npm run build     # build de produção em ./dist/
npm run preview   # preview do build local
```

> ⚠️ O container do Claude usa Node 22.23.2 — versão abaixo do mínimo do Astro (>=22.23.4). Build/check falham no container mas funcionam no Cloudflare Pages. Não tentar buildar no container.

---

## CSS — regras importantes

`src/styles/global.css` usa **Tailwind v4**:

```css
/* ✅ correto */
@import "tailwindcss";
@custom-variant dark (&:is(.dark *));

/* ❌ errado — v3 legacy */
@tailwind base;
```

---

## awake-ui

- Pacote: `@awakr/awake-ui` (npm org `awakr`)
- Repo: `github.com/awakr/awake-ui`
- Usar **apenas em `/demo/*`**

---

## Pricing

Três planos, preços em BRL:

| Plano | Preço |
|---|---|
| Landing Page | A partir de R$ 800 |
| Site Institucional | R$ 1.500 – R$ 3.500 |
| Site com CMS | R$ 3.000 – R$ 5.500 |

Plano destacado: índice 2 (Site com CMS), `highlighted = 2` em `Pricing.astro`.

---

## O que ainda falta

- [ ] i18n na seção Layouts (atualmente hardcoded em PT)
- [ ] layout-2.astro e layout-3.astro (demos)
- [ ] Integração real com Sanity (portfólio de cases — quando houver clientes)
- [ ] Domínio awakr.io
- [ ] Adicionar Sanity env vars no Cloudflare Pages
- [ ] Ícones PNG definitivos (quando logo for finalizada)
