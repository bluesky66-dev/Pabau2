import React, { FC } from 'react'
import { Modal } from 'antd'
import { LeftOutlined, MoreOutlined } from '@ant-design/icons'

import styles from './FullScreenReportModal.module.less'

export interface FullScreenReportModalProps {
  title?: string
  visible?: boolean
  onBackClick?: () => void
  content?: () => JSX.Element
}

export const FullScreenReportModal: FC<FullScreenReportModalProps> = ({
  title,
  visible,
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
            <span className={styles.headerTitle}>{title}</span>
          </div>
          <button className={styles.headerMore}>
            <MoreOutlined />
          </button>
        </div>
        {content?.()}
      </>
    </Modal>
  )
}

export default FullScreenReportModal
