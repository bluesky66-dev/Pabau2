import React, { PropsWithChildren, useState } from 'react'
import { Modal, Button, Space } from 'antd'

export interface BasicModalInterface {
  title?: string
  modalWidth?: number
}

export function BasicModal({
  title,
  modalWidth,
}: PropsWithChildren<BasicModalInterface>): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </Space>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={modalWidth}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default BasicModal
