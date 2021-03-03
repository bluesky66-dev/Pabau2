import React, { FC, useState } from 'react'
import DocumentUploadModal, {
  DocumentUploadDraggableProp,
  FolderOptions,
} from './DocumentUploadModal'
import userImage from '../../assets/images/user.png'

export default {
  component: DocumentUploadModal,
  title: 'Modals/DocumentUploadModal',
  args: {
    title: 'Upload Files',
    visible: true,
    avatarSrc: userImage,
    userName: 'Charlotte Abbott',
    position: 'Sr. HR Administrator',
    folderOptions: [
      { name: 'Folder 1', value: 'folder1' },
      { name: 'Folder 2', value: 'folder2' },
    ],
    checkboxTooltip: 'tooltip',
    draggerProps: { multiple: true, name: 'file' },
    acceptFileType: 'image/*,.pdf,.doc,.docx,.xml,application/msword',
  },
  argsTypes: {
    title: { control: { type: 'text' } },
    visible: { control: { type: 'boolean' } },
    avatarSrc: { control: { type: 'text' } },
    userName: { control: { type: 'text' } },
    position: { control: { type: 'text' } },
    folderOptions: { control: { type: 'object' } },
    draggerProps: { control: { type: 'object' } },
    checkboxTooltip: { control: { type: 'text' } },
    acceptFileType: { control: { type: 'text' } },
  },
}

interface P {
  title: string
  visible: boolean
  avatarSrc: string
  userName: string
  position: string
  checkboxTooltip?: string
  draggerProps?: DocumentUploadDraggableProp
  folderOptions: FolderOptions[]
  acceptFileType?: string
}

export const DocumentUploadModalStory: FC<P> = ({
  title,
  visible,
  avatarSrc,
  userName,
  position,
  checkboxTooltip,
  draggerProps,
  folderOptions,
  acceptFileType,
  ...args
}): JSX.Element => {
  const [open, setOpen] = useState(visible)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <DocumentUploadModal
      visible={open}
      onCancel={handleClose}
      title={title}
      avatarSrc={avatarSrc}
      userName={userName}
      position={position}
      checkboxTooltip={checkboxTooltip}
      draggerProps={draggerProps}
      folderOptions={folderOptions}
      acceptFileType={acceptFileType}
      {...args}
    />
  )
}
