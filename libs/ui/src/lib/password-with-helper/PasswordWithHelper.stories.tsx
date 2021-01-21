/* eslint-disable */

import React from 'react'
import PasswordWithHelperBox from './PasswordWithHelper'

export default {
  title: 'password with helper',
}

const PasswordWithHelperStory = ({ ...args }) => <PasswordWithHelperBox {...args}></PasswordWithHelperBox>
export const PasswordWithHelper = PasswordWithHelperStory.bind({})
PasswordWithHelper.args = {
  stength: 3,
  width: "50%"
}