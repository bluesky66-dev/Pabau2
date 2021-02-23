import React, { FC } from 'react'
import TileInputDiv from './TileInputDiv'

export default {
  component: TileInputDiv,
  title: 'Basics/TileInputDiv',
  args: {
    title: 'General',
    companyNameData: {
      label: 'Company Name',
      placeholderText: 'Enter company name',
    },
    phoneLabel: 'Phone',
    websiteData: {
      label: 'Website',
      placeholderText: 'www.company.com',
    },
  },
}

const TileInputDivStory: FC = ({ ...args }) => <TileInputDiv {...args} />

export const ENStory = TileInputDivStory.bind({})
