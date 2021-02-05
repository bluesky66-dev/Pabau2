import React, { useState } from 'react'
import { Button } from 'antd'
import { ModalWithImageProps } from './ModalWithImage'
import ModalWithImage from './ModalWithImage'

export default {
  component: ModalWithImage,
  title: 'Modals/ModalWithImage',
  args: {
    title: 'Modal with Image',
    description: [
      'Select Expire all user passwords and then click Save to expire the passwords for all of the users in your organization. The next time they log in, they will be asked to set their passwords to a new value',
      ' Select Expire all user passwords and then click Save to expire the passwords for all of the users in your organization.',
    ],
    imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    width: 870,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'array' } },
    imageUrl: { control: { type: 'text' } },
    width: { control: { type: 'number' } },
  },
}

export const ModalWithImageStory = ({
  ...args
}: ModalWithImageProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleModalEnable = () => {
    console.log('Enable clicked!!')
    handleModalClose()
  }

  const handleModalClose = () => {
    setShowModal((e) => !e)
  }

  return (
    <div>
      <Button onClick={() => handleModalClose()}>Modal With Image</Button>
      <ModalWithImage
        {...args}
        visible={showModal}
        onEnable={handleModalEnable}
        onCancel={handleModalClose}
      />
    </div>
  )
}
