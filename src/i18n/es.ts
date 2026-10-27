import type { Translations } from './pt'

export const es: Translations = {
  lang: 'es',
  meta: {
    title: 'awakr — tu presencia digital',
    description: 'Sitios web modernos para restaurantes, tiendas y negocios locales.',
  },
  nav: {
    howItWorks: 'Cómo funciona',
    layouts: 'Diseños',
    pricing: 'Precios',
    cta: 'Contáctanos',
    install: 'Instalar',
  },
  hero: {
    eyebrow: 'Presencia digital para tu negocio',
    title: 'Tu sitio web institucional, como te mereces',
    description: 'Sitios web modernos y personalizados para restaurantes, tiendas y negocios locales. Con menú digital integrado, eventos, promociones e identidad visual propia.',
    ctaPrimary: 'Quiero mi sitio web',
    ctaSecondary: 'Ver ejemplos',
  },
  components: {
    title: 'Lo que puedes tener en tu sitio web',
    subtitle: 'Componentes listos, personalizados con tu identidad visual.',
    items: [
      { title: 'Carrusel de productos', description: 'Muestra tus productos, platos o colecciones de forma visual y atractiva.', icon: '🖼️' },
      { title: 'Widget de eventos', description: 'Promociona eventos, shows y fechas especiales de tu negocio.', icon: '📅' },
      { title: 'Sección de promociones', description: 'Destaca ofertas y promociones para atraer más clientes.', icon: '🏷️' },
      { title: 'Menú digital', description: 'Integra tu menú Goomer directamente en tu sitio web.', icon: '🍽️' },
    ],
  },
  layouts: {
    title: 'Diseños disponibles',
    subtitle: 'Elige el estilo que se adapta a tu negocio. Todo personalizado con tu marca.',
    badgeSoon: 'próximamente',
    preview: 'Ver demo',
  },
  pricing: {
    title: 'Precios',
    subtitle: 'Cada proyecto es único. Habla con nosotros y recibe una propuesta personalizada para tu negocio.',
    badge: 'Más completo',
    plans: [
      {
        title: 'Landing Page',
        description: 'Página única enfocada en conversión. Ideal para presentar tu negocio y captar contactos.',
        features: ['1 página completa', 'Identidad visual personalizada', 'Formulario de contacto', 'Dominio propio configurado', 'Instalable en móvil', 'Funciona sin conexión', '30 días de soporte'],
        price: 'Desde R$ 800',
        cta: 'Quiero una landing page',
      },
      {
        title: 'Sitio Institucional',
        description: 'Sitio web completo para tu negocio, sin panel de edición. Contenido actualizado por nosotros.',
        features: ['Hasta 5 páginas', 'Identidad visual personalizada', 'Menú o catálogo', 'Dominio propio configurado', 'Instalable en móvil', 'Funciona sin conexión', '30 días de soporte'],
        cta: 'Quiero mi sitio web',
      },
      {
        title: 'Sitio con CMS',
        description: 'Sitio web completo con panel de edición. Tú mismo actualizas contenido, fotos y precios.',
        features: ['Todo lo del Institucional', 'Panel Sanity Studio', 'Entrenamiento de uso incluido', 'Dominio propio configurado', 'Instalable en móvil', 'Funciona sin conexión', 'Actualizaciones en tiempo real', '60 días de soporte'],
        price: 'R$ 3.000 – R$ 5.500',
        cta: 'Quiero autonomía',
      },
    ],
  },
  cta: {
    title: '¿Listo para tener tu sitio web?',
    subtitle: 'Contáctanos y construyamos la presencia digital de tu negocio.',
    whatsapp: 'Hablar por WhatsApp',
    emailPrefix: 'O envía un correo a',
  },
}
