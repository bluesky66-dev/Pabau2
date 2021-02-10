import React from 'react'
import { Documents } from './Documents'

export default {
  title: 'UI/Documents',
  component: Documents,
  args: {},
}

const DocumentsStory = ({ ...args }) => <Documents {...args} />
export const BasicDocuments = DocumentsStory.bind({})
BasicDocuments.args = {
  headingLabel: 'Documents',
  folders: [
    {
      name: 'Resumes and Applications (0)',
      files: [
        {
          key: 1,
          name: 'Company Handbook.pdf',
          status: 'Shared',
          addedByDate: 'Added 07/09/2020 by Charlotte Abbott',
          size: '25.5 MB',
        },
      ],
    },
  ],
}
