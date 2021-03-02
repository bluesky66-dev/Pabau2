import React from 'react'
import LibraryModal from './LibraryModal'

export default {
  component: LibraryModal,
  title: 'UI/LibrayModal',
}

const LibraryModalStory = ({ ...rest }) => <LibraryModal {...rest} />

export const LibraryInstaller = LibraryModalStory.bind({})

LibraryInstaller.args = {
  image:
    'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
  title: 'Hydrafacial service bundle',
  subTitle: 'A selection of various materials provided by HydraFacial',
  bundleTypes: [
    {
      bundleType: 'Stencil',
      title: 'This is my stencil',
    },
  ],
  visible: true,
}
