import React from 'react'
import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons'

import GridVsList from './GridVsList'

export default {
  component: GridVsList,
  title: 'Basics/GridVsList',
  args: {
    displayTypes: [{ title: 'list', icon: <AppstoreOutlined /> }],
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const GridVsListStory = ({ ...args }) => <GridVsList {...args} />

export const gridVsList = GridVsListStory.bind({})
gridVsList.args = {
  displayTypes: [
    { title: 'Grid', icon: <AppstoreOutlined /> },
    { title: 'List', icon: <MenuOutlined /> },
  ],
}
