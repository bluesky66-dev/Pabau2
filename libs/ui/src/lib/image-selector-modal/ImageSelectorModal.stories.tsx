import React from 'react'
import { ImageSelectorModal } from './ImageSelectorModal'

export default {
  component: ImageSelectorModal,
  title: 'Modals/Image Selector Modal',
  args: {
    title: 'Assign an image to category',
    visible: true,
    selectedImage: '/images/selection/Botox/image_3.jpg',
    initialSearch: 'Botox',
  },
  argTypes: {
    visible: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    initialSearch: { type: 'text' },
    onOk: { action: 'clicked' },
    onCancel: { action: 'clicked' },
    modalWidth: { type: 'text' },
    attachButtonText: { type: 'text' },
    selectedImage: { type: 'text' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const story = ({ ...args }) => <ImageSelectorModal {...args} />

export const imageSelectorModal = story.bind({})
imageSelectorModal.args = {}
