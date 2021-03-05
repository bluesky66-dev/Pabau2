import React from 'react'
import { SearchTags, SearchTagsProps } from './SearchTags'

export default {
  title: 'UI/SearchTags',
  component: SearchTags,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

const defaultRooms = ['Botox', ' Theraphy', 'Massage', 'Lab']
const SearchTagsStory = ({ ...args }: SearchTagsProps) => {
  return (
    <div
      style={{
        padding: '27px 32px 32px 32px',
        width: '502px',
        border: '1px solid var(--border-color-base)',
        borderRadius: '4px',
      }}
    >
      <SearchTags {...args} />
    </div>
  )
}

export const defaultStory = SearchTagsStory.bind({})
defaultStory.args = {
  items: defaultRooms,
  itemType: 'room',
  title: 'Rooms',
  description: 'Select rooms',
}
