import React from 'react'
import { Documents } from './Documents'

export default {
  title: 'UI/Documents',
  component: Documents,
}

const DocumentsStory = ({ ...args }) => <Documents {...args} />
export const BasicDocuments = DocumentsStory.bind({})
