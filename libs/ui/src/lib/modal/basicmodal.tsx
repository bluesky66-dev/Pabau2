import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'

interface P {
  onOk?: () => void
  onCancel?: () => void
  visible?: boolean
  newButtonText?: string
  title?: string
  modalWidth?: number
}

export function BasicModal({
  onOk,
  onCancel,
  visible,
  children,
  title,
  modalWidth,
}: PropsWithChildren<P>): JSX.Element {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => onOk?.()}
      onCancel={() => onCancel?.()}
      width={modalWidth}
      destroyOnClose={true}
      modalRender={(E) => E}
    >
      {children}
    </Modal>
  )
}

export default BasicModal
