const languageMap = {
  french: 'fr',
  german: 'de',
  spanish: 'sp',
  arabic: 'ar',
  bulgarian: 'bg',
  czech: 'cz',
  danish: 'da',
  hungarian: 'hu',
  latvian: 'lv',
  norwegian: 'no',
  polish: 'pl',
  swedish: 'sw',
  romanian: 'ro',
  russian: 'ru',
  'english (uk)': 'en',
}

export const languageMapper = (language: string) => {
  return languageMap[language.toLowerCase()]
}
