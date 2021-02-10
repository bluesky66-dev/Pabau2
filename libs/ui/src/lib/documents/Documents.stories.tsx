import React from 'react'
import { BasicAccordion } from '../accordion/Accordion.stories'
import { Documents } from './Documents'

export default {
  title: 'UI/Documents',
  component: Documents,
  args: {},
}

const DocumentsStory = ({ ...args }) => <Documents {...args} />
export const BasicDocuments = DocumentsStory.bind({})
BasicAccordion.args = {}
