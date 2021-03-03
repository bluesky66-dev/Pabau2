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
      ID: '543ABDC',
      bundleType: 'Precare',
      title: 'Precare',
    },
    {
      ID: '654OIU',
      bundleType: 'Aftercare',
      title: 'Aftercare',
    },
    {
      ID: '932NJR',
      bundleType: 'ConsentForm',
      title: 'ConsentForm',
    },
    {
      ID: '182QSA',
      bundleType: 'MedicalForm',
      title: 'MedicalForm',
    },
    {
      ID: '182QSA',
      bundleType: 'TreatmentForm',
      title: 'TreatmentForm',
    },
    {
      ID: '182QSA',
      bundleType: 'PrescriptionForm',
      title: 'PrescriptionForm',
    },
    {
      ID: '182QSA',
      bundleType: 'Service',
      title: 'Service',
    },
    {
      ID: '182QSA',
      bundleType: 'ServiceImage',
      title: 'ServiceImage',
    },
    {
      ID: '182QSA',
      bundleType: 'ProductImage',
      title: 'ProductImage',
    },
    {
      ID: '182QSA',
      bundleType: 'Stencil',
      title: 'Stencil',
    },
    {
      ID: '182QSA',
      bundleType: 'Drugs',
      title: 'Drugs',
    },
    {
      ID: '182QSA',
      bundleType: 'Contraindication',
      title: 'Contraindication',
    },
    {
      ID: '182QSA',
      bundleType: 'Recall',
      title: 'Recall',
    },
  ],
  visible: true,
}
