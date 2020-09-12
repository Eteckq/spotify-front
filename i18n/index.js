import en from './en'
import fr from './fr'

module.exports = [
  'nuxt-i18n',
  {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en,
        fr
      }
    }
  }
]
