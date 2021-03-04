import React, { FC } from 'react'
import { Button, TabMenu } from '@pabau/ui'
import { Modal, Switch } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import styles from './FullScreenReportModal.module.less'

export enum OperationType {
  vat = 'vat',
  active = 'active',
  reset = 'reset',
  save = 'save',
  delete = 'delete',
  create = 'create',
  cancel = 'cancel',
}

export interface FullScreenReportModalProps {
  title: string
  visible: boolean
  operations: Array<OperationType>
  onVatRegistered?: (val: boolean) => void
  onActivated?: (val: boolean) => void
  onBackClick?: (e) => void
  onSave?: () => void
  onCreate?: () => void
  onCancel?: () => void
  onReset?: () => void
  onDelete?: () => void
  deleteBtnText?: string
  createBtnText?: string
  saveBtnText?: string
  cancelBtnText?: string
  resetBtnText?: string
  enableCreateBtn?: boolean
  activated?: boolean
  vatRegistered?: boolean
  subMenu?: Array<string>
}

export const FullScreenReportModal: FC<FullScreenReportModalProps> = ({
  title,
  visible,
  operations = [],
  onBackClick,
  onVatRegistered,
  onActivated,
  onSave,
  onCreate,
  onCancel,
  onReset,
  onDelete,
  deleteBtnText,
  createBtnText,
  saveBtnText,
  cancelBtnText,
  resetBtnText,
  enableCreateBtn,
  activated,
  vatRegistered,
  subMenu = [],
  children,
}) => {
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={null}
      width={'100%'}
      wrapClassName={styles.fullScreenModal}
    >
      <>
        <div className={styles.fullScreenModalHeader}>
          <div>
            <LeftOutlined
              onClick={(e) => onBackClick?.(e)}
              style={{
                color: 'var(--light-grey-color)',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            {title}
          </div>
          <div className={styles.fullScreenModalOps}>
            {operations.map((operation) => (
              <React.Fragment key={operation}>
                {operation === OperationType.vat && (
                  <div className={styles.operationSwitch}>
                    VAT registered{' '}
                    <Switch
                      size="small"
                      defaultChecked={vatRegistered || true}
                      onChange={(checked) => onVatRegistered?.(checked)}
                      style={{ marginLeft: '12px' }}
                    />
                  </div>
                )}
                {operation === OperationType.active && (
                  <div className={styles.operationSwitch}>
                    Active{' '}
                    <Switch
                      size="small"
                      defaultChecked={activated || true}
                      onChange={(checked) => onActivated?.(checked)}
                      style={{ marginLeft: '12px' }}
                    />
                  </div>
                )}
                {operation === OperationType.reset && (
                  <Button
                    onClick={() => onReset?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {resetBtnText || 'Reset'}
                  </Button>
                )}
                {operation === OperationType.delete && (
                  <Button
                    onClick={() => onDelete?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {deleteBtnText || 'Delete'}
                  </Button>
                )}
                {operation === OperationType.save && (
                  <Button
                    onClick={() => onSave?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {saveBtnText || 'Save'}
                  </Button>
                )}
                {operation === OperationType.cancel && (
                  <Button
                    onClick={() => onCancel?.()}
                    style={{ marginRight: '1rem' }}
                  >
                    {cancelBtnText || 'Cancel'}
                  </Button>
                )}
                {operation === OperationType.create && (
                  <Button
                    type="primary"
                    disabled={!enableCreateBtn}
                    onClick={() => onCreate?.()}
                  >
                    {createBtnText || 'Create'}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.fullScreenModalBody}>
          {subMenu.length > 0 ? (
            <TabMenu menuItems={subMenu} tabPosition="top" minHeight="1px">
              {children
                ? children
                : subMenu.map((menu) => <div key={menu}>{menu}</div>)}
            </TabMenu>
          ) : (
            children
          )}
        </div>
      </>
    </Modal>
  )
}

export default FullScreenReportModal
