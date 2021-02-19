import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../button/button'
import { Checkbox, ButtonTypes } from '@pabau/ui'
import styles from './basicmodal.module.less'
import { ModalProps } from 'antd/lib/modal'
import classNames from 'classnames'
export interface BasicModalProps {
  onOk?: () => void
  onCancel?: () => void
  onDelete?: () => void
  visible?: boolean
  newButtonText?: string
  title?: string
  modalWidth?: number
  isValidate?: boolean
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
  btnType?: ButtonTypes
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
  isValidate,
  footer = true,
  wrapClassName,
  btnType = ButtonTypes.primary,
  ...props
}: PropsWithChildren<BasicModalProps & ModalProps>): JSX.Element {
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
      wrapClassName={classNames(styles.modal, wrapClassName)}
      {...props}
    >
      <div className={styles.modalContent}>{children}</div>
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
              className={classNames(styles.deleteBtnStyle, styles.btnStyle)}
              onClick={() => onDelete?.()}
            >
              {dangerButtonText}
            </Button>
          )}
          {newButtonText && (
            <Button
              type={btnType}
              className={styles.btnStyle}
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
