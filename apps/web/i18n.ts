// localePath: path.resolve('../../libs/i18n/locales'),

import NextI18Next from 'next-i18next/dist/es'

const i18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr'],
  //localeSubpaths: 'none', // locale subpaths for url could be none, foreign or all
})

console.log('next', i18Next)

export default i18Next
