import React, { FC } from 'react'
import TextTranslation from './TextTranslation'

export default {
  component: TextTranslation,
  title: 'Basics/TextTranslation',
}

const TextTranslationStory: FC = () => <TextTranslation />

export const ENStory = TextTranslationStory.bind({})
