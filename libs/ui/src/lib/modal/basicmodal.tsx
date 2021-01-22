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
  newButtonText = 'OK',
  dangerButtonText,
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
      wrapClassName={styles.modal}
      {...props}
    >
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.modalFooter}>
        {specialBooleanLabel && onSpecialBooleanClick && (
          <Checkbox defaultChecked={specialBooleanValue} onClick={onSpecialBooleanClick}>
            {specialBooleanLabel}
          </Checkbox>
          // <div
          //   className={'pretty p-svg p-toggle p-plain'}
          //   onClick={() => {
          //     onSpecialBooleanClick()
          //   }}
          // >
          //   <div className={styles.alignCheckboxLabel}>
          //     {!specialBooleanValue ? (
          //       <img className="svg" src={NotActiveSVG} alt="none-active-state" />
          //     ) : (
          //       <img className="svg" src={ActiveSVG} alt="active-state" />
          //     )}
          //     <label>{specialBooleanLabel}</label>
          //   </div>
          // </div>
        )}
        {dangerButtonText && (
          <Button type="default" className={styles.deleteBtnStyle} onClick={() => onDelete?.()}>
            {dangerButtonText}
          </Button>
        )}
        <Button type="primary" className={styles.createBtn} onClick={() => onOk?.()}>
          {newButtonText}
        </Button>
      </div>
    </Modal>
  )
}

export default BasicModal
