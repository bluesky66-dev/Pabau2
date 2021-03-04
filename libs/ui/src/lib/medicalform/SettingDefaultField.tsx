import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './Setting.module.less'

type linkedFieldProps = {
  linkedLabel: string
  defaultFieldValue: string
  onChangeDefaults: (value: string) => void
}

const SettingDefaultField: FC<linkedFieldProps> = ({
  linkedLabel,
  defaultFieldValue,
  onChangeDefaults,
}) => {
  const [defaultField, setDefaultField] = useState(defaultFieldValue)
  const [addDefaultField, setAddDefaultField] = useState(false)

  useEffect(() => {
    setDefaultField(defaultFieldValue)
  }, [defaultFieldValue])

  const onChange = (e) => {
    setDefaultField(e.target.value)
    onChangeDefaults(e.target.value)
  }

  return (
    <>
      <p style={{ marginTop: '20px' }}>{linkedLabel}</p>

      {(addDefaultField || defaultFieldValue !== '') && (
        <div className={styles.linkedField}>
          <Input
            className={styles.optionInput}
            value={defaultField}
            onChange={(e) => onChange(e)}
          />
        </div>
      )}
      {addDefaultField === false && defaultFieldValue === '' && (
        <>
          <Button
            style={{ marginTop: '5px' }}
            type={ButtonTypes.default}
            icon={<PlusOutlined />}
            size="small"
            onClick={() => setAddDefaultField((e) => true)}
          >
            Add
          </Button>
          <br />
        </>
      )}
    </>
  )
}

export default SettingDefaultField
