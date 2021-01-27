/* eslint-disable */
import React from 'react'
import Rightsidebar from './Rightsidebar'

export default {
  component: Rightsidebar,
  title: 'UI/Right Sidebar',
  args: { componetName: 'heading', display: 'show' },
  argTypes: {
    componetName: {
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

const RightsidebarStory = ({ ...args }) => <Rightsidebar {...args}></Rightsidebar>

export const RightsidebarPanel = RightsidebarStory.bind({})
RightsidebarPanel.args = {}

