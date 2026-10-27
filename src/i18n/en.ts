import type { Translations } from './pt'

export const en: Translations = {
  lang: 'en',
  meta: {
    title: 'awakr — your digital presence',
    description: 'Modern websites for restaurants, shops and local businesses.',
  },
  nav: {
    howItWorks: 'How it works',
    layouts: 'Layouts',
    pricing: 'Pricing',
    cta: 'Get in touch',
    install: 'Install',
  },
  hero: {
    eyebrow: 'Digital presence for your business',
    title: 'Your institutional website, the way you deserve',
    description: 'Modern, personalized websites for restaurants, shops and local businesses. With integrated digital menu, events, promotions and your own visual identity.',
    ctaPrimary: 'I want my website',
    ctaSecondary: 'See examples',
  },
  components: {
    title: 'What you can have on your website',
    subtitle: 'Ready-made components, customized with your visual identity.',
    items: [
      { title: 'Product carousel', description: 'Display your products, dishes or collections in a visual and attractive way.', icon: '🖼️' },
      { title: 'Events widget', description: 'Promote events, shows and special dates for your business.', icon: '📅' },
      { title: 'Promotions section', description: 'Highlight offers and promotions to attract more customers.', icon: '🏷️' },
      { title: 'Digital menu', description: 'Integrate your Goomer menu directly into your website.', icon: '🍽️' },
    ],
  },
  layouts: {
    title: 'Available layouts',
    subtitle: 'Choose the style that suits your business. Everything customized with your brand.',
    badgeSoon: 'coming soon',
    preview: 'See demo',
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Every project is unique. Talk to us and receive a personalized proposal for your business.',
    badge: 'Most complete',
    plans: [
      {
        title: 'Landing Page',
        description: 'Single page focused on conversion. Ideal for presenting your business and capturing contacts.',
        features: ['1 complete page', 'Personalized visual identity', 'Contact form', 'Custom domain configured', 'Installable on mobile', 'Works offline', '30 days of support'],
        price: 'Starting at R$ 800',
        cta: 'I want a landing page',
      },
      {
        title: 'Institutional Website',
        description: 'Complete website for your business, without an editing panel. Content updated by us.',
        features: ['Up to 5 pages', 'Personalized visual identity', 'Menu or catalog', 'Custom domain configured', 'Installable on mobile', 'Works offline', '30 days of support'],
        price: 'R$ 1,500 – R$ 3,500',
        cta: 'I want my website',
      },
      {
        title: 'Website with CMS',
        description: 'Complete website with editing panel. You update content, photos and prices yourself.',
        features: ['Everything in Institutional', 'Sanity Studio panel', 'Usage training included', 'Custom domain configured', 'Installable on mobile', 'Works offline', 'Real-time updates', '60 days of support'],
        price: 'R$ 3,000 – R$ 5,500',
        cta: 'I want autonomy',
      },
    ],
  },
  cta: {
    title: 'Ready to have your website?',
    subtitle: 'Get in touch and let\'s build the digital presence of your business.',
    whatsapp: 'Chat on WhatsApp',
    schedule: 'Schedule a call',
    emailPrefix: 'Or send an email to',
  },
}
