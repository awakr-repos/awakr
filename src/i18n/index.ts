import { pt } from './pt'
import { en } from './en'
import { es } from './es'

export const languages = {
  pt: { label: 'PT', fullLabel: 'Português' },
  en: { label: 'EN', fullLabel: 'English' },
  es: { label: 'ES', fullLabel: 'Español' },
}

export const defaultLang = 'pt'

export const translations = { pt, en, es }

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as keyof typeof translations
  return defaultLang
}

export function getTranslations(lang: keyof typeof translations) {
  return translations[lang]
}
