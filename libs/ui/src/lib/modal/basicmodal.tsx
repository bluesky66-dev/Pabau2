import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../button/button'
import styles from './Modal.module.less'

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
      title={
        <div className={styles.modalHeadingAlign}>
          <div className={styles.antModalTitle}>{title}</div>
        </div>
      }
      visible={visible}
      onOk={() => onOk?.()}
      onCancel={() => onCancel?.()}
      footer={null}
      cancelText={null}
      width={modalWidth}
      destroyOnClose={true}
      modalRender={(E) => E}
      wrapClassName={styles.modal}
    >
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.modalFooter}>
        <Button
          type="primary"
          className={styles.createBtn}
          size="large"
          onClick={() => onOk?.()}
        >
          Create
        </Button>
      </div>
    </Modal>
  )
}

export default BasicModal
