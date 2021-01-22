import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../button/button'
import NotActiveSVG from '../../assets/images/notactive.svg'
import ActiveSVG from '../../assets/images/active.svg'
import styles from './basicmodal.module.less'

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
      wrapClassName={styles.modal}
    >
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.modalFooter}>
        {dangerButtonText && (
          <Button type="primary" danger onClick={() => onDelete?.()}>
            {dangerButtonText}
          </Button>
        )}
        {specialBooleanLabel && onSpecialBooleanClick && (
          <div
            className={'pretty p-svg p-toggle p-plain'}
            onClick={() => {
              onSpecialBooleanClick()
            }}
          >
            <div>
              {!specialBooleanValue ? (
                <img className="svg" src={NotActiveSVG} alt="none-active-state" />
              ) : (
                <img className="svg" src={ActiveSVG} alt="active-state" />
              )}
              <label>{specialBooleanLabel}</label>
            </div>
          </div>
        )}
        <Button type="primary" onClick={() => onOk?.()}>
          {newButtonText}
        </Button>
      </div>
    </Modal>
  )
}

export default BasicModal
