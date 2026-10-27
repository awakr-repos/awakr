export const pt = {
  lang: 'pt',
  meta: {
    title: 'awakr — sua presença digital',
    description: 'Sites modernos para restaurantes, lojas e negócios locais.',
  },
  nav: {
    howItWorks: 'Como funciona',
    layouts: 'Layouts',
    pricing: 'Preços',
    cta: 'Falar com a gente',
    install: 'Instalar',
  },
  hero: {
    eyebrow: 'Presença digital para o seu negócio',
    title: 'Seu site institucional, do jeito que você merece',
    description: 'Sites modernos e personalizados para restaurantes, lojas e negócios locais. Com cardápio digital integrado, eventos, promoções e identidade visual própria.',
    ctaPrimary: 'Quero meu site',
    ctaSecondary: 'Ver exemplos',
  },
  components: {
    title: 'O que você pode ter no seu site',
    subtitle: 'Componentes prontos, personalizados com a sua identidade visual.',
    items: [
      { title: 'Carrossel de produtos', description: 'Exiba seus produtos, pratos ou coleções de forma visual e atraente.', icon: '🖼️' },
      { title: 'Widget de eventos', description: 'Divulgue eventos, shows e datas especiais do seu negócio.', icon: '📅' },
      { title: 'Seção de promoções', description: 'Destaque ofertas e promoções para atrair mais clientes.', icon: '🏷️' },
      { title: 'Cardápio digital', description: 'Integre seu cardápio Goomer diretamente no seu site.', icon: '🍽️' },
    ],
  },
  layouts: {
    title: 'Layouts disponíveis',
    subtitle: 'Escolha o estilo que combina com o seu negócio. Tudo personalizado com a sua marca.',
    badgeSoon: 'em breve',
    preview: 'Ver demonstração',
  },
  pricing: {
    title: 'Preços',
    subtitle: 'Cada projeto é único. Converse com a gente e receba uma proposta personalizada para o seu negócio.',
    price: 'A combinar',
    badge: 'Mais completo',
    plans: [
      {
        title: 'Landing Page',
        description: 'Página única focada em conversão. Ideal para apresentar seu negócio e captar contatos.',
        features: ['1 página completa', 'Identidade visual personalizada', 'Formulário de contato', 'Domínio próprio configurado', '30 dias de suporte'],
        cta: 'Quero uma landing page',
      },
      {
        title: 'Site Institucional',
        description: 'Site completo para o seu negócio, sem painel de edição. Conteúdo atualizado por nós.',
        features: ['Até 5 páginas', 'Identidade visual personalizada', 'Cardápio ou catálogo', 'Domínio próprio configurado', '30 dias de suporte'],
        cta: 'Quero meu site',
      },
      {
        title: 'Site com CMS',
        description: 'Site completo com painel de edição. Você mesmo atualiza conteúdo, fotos e preços.',
        features: ['Tudo do Institucional', 'Painel Sanity Studio', 'Treinamento de uso incluso', 'Domínio próprio configurado', 'Atualizações em tempo real', '60 dias de suporte'],
        cta: 'Quero autonomia',
      },
    ],
  },
  cta: {
    title: 'Pronto para ter seu site?',
    subtitle: 'Entre em contato e vamos construir a presença digital do seu negócio.',
    whatsapp: 'Falar pelo WhatsApp',
    emailPrefix: 'Ou envie um e-mail para',
  },
}

export type Translations = typeof pt
