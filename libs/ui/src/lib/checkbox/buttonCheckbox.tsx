import { CheckOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { PropsWithChildren, useState } from 'react'
import styles from './checkbox.module.less'

interface CheckboxProps {
  label?: string
  disabled?: boolean
  onChange?: () => void
}

export function ButtonCheckbox({
  label,
  disabled,
  onChange,
}: PropsWithChildren<CheckboxProps>): JSX.Element {
  const [activate, setActivate] = useState(true)
  return (
    <div className={styles.buttonCheckbox}>
      <Button
        shape="round"
        onClick={() => setActivate((activate) => !activate)}
        icon={activate === true ? <CheckOutlined /> : ''}
        className={activate === true ? styles.chkActive : styles.chkInActive}
        disabled={disabled}
      >
        <span>{label}</span>
      </Button>
    </div>
  )
}

export default ButtonCheckbox
