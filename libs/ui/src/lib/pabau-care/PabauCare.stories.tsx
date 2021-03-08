import React from 'react'
import PabauCare from './PabauCare'

export default {
  component: PabauCare,
  title: 'UI/PabauCare',
  args: {},
}

const story = ({ ...props }) => <PabauCare {...props} />

export const DefaultPabauCare = story.bind({})

DefaultPabauCare.args = {}
