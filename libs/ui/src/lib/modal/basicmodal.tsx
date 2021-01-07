import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../button/button'

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
      footer={null}
      cancelText={null}
      width={modalWidth}
      destroyOnClose={true}
      modalRender={(E) => E}
    >
      <div>{children}</div>
      <div style={{ marginTop: '2em', display: 'flex', placeContent: 'flex-end' }}>
        <Button type="primary" onClick={() => onOk?.()}>
          Create
        </Button>
      </div>
    </Modal>
  )
}

export default BasicModal
