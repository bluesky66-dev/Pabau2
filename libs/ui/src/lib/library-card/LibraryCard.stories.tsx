import React from 'react'
import LibraryCard, { LibraryCardProps } from './LibraryCard'

export default {
  title: 'UI/LibraryCard',
  component: LibraryCard,
}

const LibraryCardStory = ({ ...args }: LibraryCardProps) => (
  <div style={{ maxWidth: '300px', minWidth: '300px' }}>
    <LibraryCard {...args} />
  </div>
)

export const BasicLibraryCard = LibraryCardStory.bind({})
BasicLibraryCard.args = {
  title: 'BNG Service',
  bundleCount: 10,
  isPlus: true,
}
