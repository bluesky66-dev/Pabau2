import React from 'react'

import Background from './Background'

export default {
  component: Background,
  title: 'Basics/Background',
  args: {
    list: [
      { name: 'None', color: '' },
      {
        name: 'Strong',
        color: 'linear-gradient(125.34deg, #79E6E1 -8.96%, #93B8D5 111.79%)',
      },
      {
        name: 'Emerald',
        color: 'linear-gradient(125.34deg, #67E97D -8.96%, #68F7D3 111.79%)',
      },
      {
        name: 'Skyline',
        color: 'linear-gradient(125.34deg, #56F1FF -8.96%, #5CB0FF 111.79%)',
      },
    ],
    onChange: (name: string): string => {
      return name
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const BackgroundStory = ({ list }) => <Background list={list} />

export const BackgroundColour = BackgroundStory.bind({})
