import React from 'react'
import { Accordion } from './Accordion'

export default {
  title: 'UI/Accordion',
  component: Accordion,
  args: {
    headerLabel: 'Header Label',
  },
  argTypes: {
    headerLabel: {
      control: {
        type: 'text',
      },
    },
  },
}

const AccordionStory = ({ ...args }) => <Accordion {...args} />

export const BasicAccordion = AccordionStory.bind({})
BasicAccordion.args = {
  headerLabel: 'Resumes and Applications (0)',
  children: <h1>children</h1>,
}
