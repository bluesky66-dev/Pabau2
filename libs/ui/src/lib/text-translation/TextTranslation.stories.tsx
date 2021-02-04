import React, { FC } from 'react'
import TextTranslation from './TextTranslation'

export default {
  component: TextTranslation,
  title: 'Basics/TextTranslation',
  args: {
    language: 'en',
  },
  argTypes: {
    language: { control: { type: 'text' } },
  },
}

interface P {
  language?: string
}

const TextTranslationStory: FC<P> = () => <TextTranslation />

export const ENStory = TextTranslationStory.bind({})
ENStory.args = {
  language: 'en',
}
