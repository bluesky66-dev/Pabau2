/* eslint-disable */

import React from 'react'
import LanguageBox from './Language'

export default {
  title: 'Language',
}

const LanguageStory = ({ ...args }) => <LanguageBox {...args}></LanguageBox>
export const Language = LanguageStory.bind({})
