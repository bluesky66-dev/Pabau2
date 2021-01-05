import React, { PropsWithChildren, useState } from 'react'
import './checkbox.less'
import { Checkbox as AntCheckbox } from 'antd'

export interface CheckboxProps {
  disabled?: boolean
  onChange?: () => void
}

export function Checkbox({
  disabled,
  children,
  onChange,
}: PropsWithChildren<CheckboxProps>): JSX.Element {
  const [checkBoxVal, setCheckBoxVal] = useState(true)
  return (
    <AntCheckbox
      checked={checkBoxVal}
      disabled={disabled}
      onClick={(e: React.MouseEvent<HTMLInputElement>) => {
        setCheckBoxVal((e.target as HTMLInputElement).checked)
      }}
      onChange={onChange}
    >
      {children}
    </AntCheckbox>
  )
}

export default Checkbox
