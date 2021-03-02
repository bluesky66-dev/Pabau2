import React from 'react'
import LibraryModal, { LibraryModalProps } from './LibraryModal'

export default {
  component: LibraryModal,
  title: 'UI/LibrayModal',
}

const LibraryModalStory = ({ ...rest }: LibraryModalProps) => (
  <LibraryModal {...rest} />
)

export const LibraryInstaller = LibraryModalStory.bind({})

LibraryInstaller.args = {
  image:
    'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
  title: 'Hydrafacial service bundle',
  subTitle: 'A selection of various materials provided by HydraFacial',
  bundleTypes: [
    {
      bundleType: 'ConsentForm',
      title: 'Custom title to this bundle type',
    },
    {
      bundleType: 'Stencil',
      title: 'This is my stencil',
    },
    {
      bundleType: 'Contraindication',
      title: 'I"m suggesting this one as title',
    },
    {
      bundleType: 'ServiceImage',
      title: 'You can add more in props using the below props array of objects',
    },
  ],
  visible: true,
}
