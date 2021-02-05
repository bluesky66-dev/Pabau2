/* eslint-disable */

import React from 'react'
import FontIconBox from './FontIcon'

export default {
  title: 'Basics/Font Icon',
}

const FonticonStory = ({ ...args }) => <FontIconBox {...args}></FontIconBox>
export const FontIcon = FonticonStory.bind({})
FontIcon.args = {
  max: 50
}
