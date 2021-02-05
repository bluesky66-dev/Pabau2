import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Switch } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

interface P {
  needLeft?: boolean
  saveFunc?: () => void
}

export const MedicalFormBottom: FC<P> = ({ needLeft, saveFunc }) => {
  return (
    <div className={styles.formItem} style={{ borderBottom: 'none' }}>
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
          <Button
            type={ButtonTypes.primary}
            icon={<SaveOutlined />}
            size="small"
            onClick={saveFunc}
          >
            Save component
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MedicalFormBottom
