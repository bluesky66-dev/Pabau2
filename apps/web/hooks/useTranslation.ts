// eslint-disable-next-line unicorn/filename-case
import preferredLocale from 'preferred-locale'

const translatedLocales = {
  'en-gb': {
    common: {
      'index.title': 'Welcome!',
      'setup.title': 'Setup',
    },
  },

  'fr-fr': {
    common: {
      'index.title': 'Bienvenue',
    },
  },
}
const fallback = 'en-gb'

function t(namespace: string, tag: string): string {
  const locale = preferredLocale(Object.keys(translatedLocales), fallback, {
    regionLowerCase: true,
    languageOnly: false,
  })
  return translatedLocales[locale][namespace][tag] || `{{{${tag}}}}`
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  return {
    t,
  }
}
