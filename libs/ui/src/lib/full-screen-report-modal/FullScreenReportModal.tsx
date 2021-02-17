import React, { FC } from 'react'
import { Modal } from 'antd'
import { LeftOutlined, MoreOutlined } from '@ant-design/icons'

import styles from './FullScreenReportModal.module.less'

export interface FullScreenReportModalProps {
  title?: () => JSX.Element | string
  visible?: boolean
  header?: boolean
  onBackClick?: () => void
  content?: () => JSX.Element
}

export const FullScreenReportModal: FC<FullScreenReportModalProps> = ({
  title,
  visible,
  header,
  onBackClick,
  content,
}) => {
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={null}
      width={'100%'}
      className={styles.fullScreenModal}
    >
      <>
        <div className={styles.header}>
          <div>
            <LeftOutlined onClick={() => onBackClick?.()} />
            {header ? (
              <span className={styles.headerTitle}>{title?.()}</span>
            ) : (
              <span className={styles.headerTitle}>{title}</span>
            )}
          </div>
          {header ? (
            <div></div>
          ) : (
            <button className={styles.headerMore}>
              <MoreOutlined />
            </button>
          )}
        </div>
        <div>{content?.()}</div>
      </>
    </Modal>
  )
}

export default FullScreenReportModal
