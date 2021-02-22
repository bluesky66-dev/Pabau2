import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Switch } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './Setting.module.less'

interface P {
  needLeft: boolean
  deleteFunc: () => void
  saveFunc: () => void
  requireFunc: (checked) => void
  required: boolean
}

export const SettingMedicalFormBottom: FC<P> = ({
  needLeft,
  deleteFunc,
  saveFunc,
  requireFunc,
  required,
}) => {
  const [checked, setChecked] = useState(required)
  useEffect(() => {
    setChecked(required)
  }, [required])

  return (
    <div className={styles.formItem} style={{ borderBottom: 'none' }}>
      <div className={`${styles.formBottom} ${styles.formCommon}`}>
        {needLeft && (
          <div className={styles.leftButtons}>
            <Switch
              size="small"
              onChange={requireFunc}
              checked={checked}
              onClick={(e) => setChecked((e) => !e)}
            />
            <span>Required</span>
          </div>
        )}
        <div className={styles.rightButtons}>
          <Button
            type={ButtonTypes.default}
            icon={<DeleteOutlined />}
            onClick={deleteFunc}
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

export default SettingMedicalFormBottom
