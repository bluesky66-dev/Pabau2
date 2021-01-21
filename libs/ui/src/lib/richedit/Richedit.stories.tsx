/* eslint-disable */

import React from 'react'
import RicheditBox from './Richedit'

export default {
  title: 'RichEdit',
}

const RicheditStory = ({ ...args }) => <RicheditBox {...args}></RicheditBox>
export const Richedit = RicheditStory.bind({})
