import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../button/button'
import { Checkbox } from '@pabau/ui'
import styles from './basicmodal.module.less'
import { ModalProps } from 'antd/lib/modal'
interface P {
  onOk?: () => void
  onCancel?: () => void
  onDelete?: () => void
  visible?: boolean
  newButtonText?: string
  title?: string
  modalWidth?: number
  footer?: boolean

  /**
   * Creates a special tickbox next to the OK button
   */
  onSpecialBooleanClick?: () => void

  /**
   * Creates a special tickbox next to the OK button
   */
  specialBooleanLabel?: string

  /**
   * Creates a special tickbox next to the OK button
   */
  specialBooleanValue?: boolean

  dangerButtonText?: string
  newButtonDisable?: boolean
}

export function BasicModal({
  onOk,
  onCancel,
  onDelete,
  visible,
  children,
  title,
  modalWidth,
  specialBooleanLabel,
  specialBooleanValue,
  onSpecialBooleanClick,
  newButtonText,
  newButtonDisable = false,
  dangerButtonText,
  footer = true,
  wrapClassName,
  ...props
}: PropsWithChildren<P & ModalProps>): JSX.Element {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => onOk?.()}
      onCancel={() => onCancel?.()}
      footer={null}
      cancelText={null}
      width={modalWidth}
      // destroyOnClose={true}
      // modalRender={(E) => E}
      wrapClassName={styles.modal + ' ' + wrapClassName}
      {...props}
    >
      <div>{children}</div>
      {footer && (
        <div className={styles.modalFooter}>
          {specialBooleanLabel && onSpecialBooleanClick && (
            <Checkbox
              defaultChecked={specialBooleanValue}
              onClick={onSpecialBooleanClick}
            >
              {specialBooleanLabel}
            </Checkbox>
          )}
          {dangerButtonText && (
            <Button
              type="default"
              className={styles.deleteBtnStyle}
              onClick={() => onDelete?.()}
            >
              {dangerButtonText}
            </Button>
          )}
          {newButtonText && (
            <Button
              type="primary"
              disabled={newButtonDisable}
              onClick={() => onOk?.()}
            >
              {newButtonText}
            </Button>
          )}
        </div>
      )}
    </Modal>
  )
}

export default BasicModal
