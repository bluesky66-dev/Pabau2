import React from 'react'
import Accordian from './Accordian'

export default {
  component: Accordian,
  title: 'Basics/Accordian',
}

const AccordianStory = ({ ...args }) => (
  <Accordian {...args}>{args.text}</Accordian>
)

export const defaultAccordian = AccordianStory.bind({})
defaultAccordian.args = {
  header: 'Features',
  text: 'Choose what things Joseph Howard can do',
}
