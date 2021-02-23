import React from 'react'
import { AddSuggestion } from './AddSuggestion'

export default {
  component: AddSuggestion,
  title: 'UI/AddSuggestion',
  args: {
    label: 'Select Suggestion',
    defaultSelected: [],
    options: ['Tag1', 'Tag2'],
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    defaultSelected: {
      control: {
        type: 'array',
      },
    },
    options: {
      control: {
        type: 'array',
      },
    },
    onChange: {
      control: {
        disable: true,
      },
    },
  },
}

const AddSuggestionStory = ({ ...args }) => <AddSuggestion {...args} />
export const BasicAddSuggestion = AddSuggestionStory.bind({})
BasicAddSuggestion.args = {
  options: ['Category', 'All inclusive'],
  defaultSelected: ['Category', 'All inclusive'],
  label: 'Select Suggestions',
  onChange: (data: Array<string | number>) => {
    console.log('SELECTED:', data)
  },
}
