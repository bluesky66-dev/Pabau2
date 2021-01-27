import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Switch } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

interface P {
  needLeft?: boolean
}

const MedicalFormBottom: FC<P> = ({ needLeft }) => {
  return (
    <div className={`${styles.formBottom} ${styles.formCommon}`}>
      {needLeft && (
        <div className={styles.leftButtons}>
          <Switch size="small" />
          <span>Required</span>
        </div>
      )}
      <div className={styles.rightButtons}>
        <Button
          type={ButtonTypes.default}
          icon={<DeleteOutlined />}
          size="small"
        >
          Delete
        </Button>
        <Button type={ButtonTypes.primary} icon={<SaveOutlined />} size="small">
          Save component
        </Button>
      </div>
    </div>
  )
}

export default MedicalFormBottom
