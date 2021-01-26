import React, { useState } from 'react'

import styles from './CreateChannel.module.less'
import { Input, Switch } from 'antd'
import { BasicModal as Modal } from '../..'

export interface CreateChannelProps {
  onCreateChannel?: (name: string, description: string, isPrivate: boolean) => void
  isCreateChannelModel?: boolean
  onCancel?: () => void
}

export function CreateChannel(props: CreateChannelProps): JSX.Element {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)

  const handleNameChange = (e): void => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const onChangeToPrivate = (checked) => {
    setIsPrivate(checked)
  }

  const onCreate = () => {
    console.log('onCreate', name, description, isPrivate)
    props.onCreateChannel?.(name, description, isPrivate)
  }

  return (
    <Modal
      modalWidth={682}
      centered={true}
      title="create A Channel"
      newButtonText={'Create'}
      newButtonDisable={name.length <= 0}
      onOk={() => onCreate()}
      dangerButtonText={`Cancel`}
      onCancel={props.onCancel}
      onDelete={props.onCancel}
      visible={props.isCreateChannelModel}
    >
      <div className={styles.content}>
        Channels are where your team communicates. They’re best when organized around a topic –
        #marketing, for example.
      </div>
      <div className={styles.textControl}>
        <div>Name</div>
        <Input
          className={styles.nameInput}
          placeholder="# e.g. plan-budget"
          onChange={handleNameChange}
          suffix={80 - name.length}
        />
      </div>
      <div className={styles.textControl}>
        <div>Description</div>
        <Input placeholder="What’s this channel about?" onChange={handleDescriptionChange} />
      </div>
      <div>
        <div>Make private</div>
        <div className={styles.switchContent}>
          <div className={styles.switchText}>
            When a channel is set to private, it can be only be viewed or joined by invitation.
          </div>
          <div className={styles.switch}>
            <Switch onChange={onChangeToPrivate} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CreateChannel
