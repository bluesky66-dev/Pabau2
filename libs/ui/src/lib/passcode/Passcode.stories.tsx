/* eslint-disable */

import React from 'react'
import PasscodeBox from './Passcode'

export default {
  title: 'Passcode',
}

const PasscodeStory = ({ ...args }) => <PasscodeBox {...args}></PasscodeBox>
export const Passcode = PasscodeStory.bind({})
