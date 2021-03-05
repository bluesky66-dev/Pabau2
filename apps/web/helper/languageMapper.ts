const languageMap = {
  french: 'fr',
  german: 'de',
  'english (uk)': 'en',
}

export const languageMapper = (language: string) => {
  return languageMap[language.toLowerCase()]
}
