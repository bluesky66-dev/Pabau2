import React, { FC } from 'react'
import AvatarUploader, { AvatarUploaderProps } from './AvatarUploader'
import UserImage from '../../assets/images/avatar-uploader.png'

export default {
  component: AvatarUploader,
  title: 'Basics/AvatarUploader',
  args: {
    visible: false,
    title: 'Edit Photo',
    imageURL: UserImage,
  },
  argTypes: {},
}

export const AvatarUploaderStory: FC<AvatarUploaderProps> = ({
  title,
  visible,
  imageURL,
}) => {
  return <AvatarUploader visible={visible} title={title} imageURL={imageURL} />
}
