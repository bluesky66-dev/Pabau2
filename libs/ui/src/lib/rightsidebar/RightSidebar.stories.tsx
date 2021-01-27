/* eslint-disable */
import React from 'react'
import RightSidebar from './RightSidebar'

export default {
  component: RightSidebar,
  title: 'UI/Right Sidebar',
  args: { componentName: 'heading', display: 'show' },
  argTypes: {
    componentName: {
      control: {
        type: 'select',
        selected: 'heading',
        options: ['heading', 'signature', 'ghost', 'shortanswer', 'longanswer'],
      },
    },
    display: {
      control: {
        type: 'radio',
        selected: 'show',
        options: ['show', 'hide'],
      },
    }
  }
}

const RightSidebarStory = ({ ...args }) => <RightSidebar {...args}></RightSidebar>

export const RightSidebarPanel = RightSidebarStory.bind({})
RightSidebarPanel.args = {}

