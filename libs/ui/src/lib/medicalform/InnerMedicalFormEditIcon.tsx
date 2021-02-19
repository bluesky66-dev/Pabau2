import { EditOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import styles from './Inner.module.less'

const InnerMedicalFormEditIcon: FC = () => {
  return (
    <div className={styles.editIcon}>
      <EditOutlined />
    </div>
  )
}

export default InnerMedicalFormEditIcon
