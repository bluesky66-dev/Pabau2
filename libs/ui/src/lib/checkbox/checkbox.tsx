import React, { PropsWithChildren } from 'react'
import { Checkbox as AntCheckbox } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox'


export function Checkbox({ ...props }: PropsWithChildren<CheckboxProps>): JSX.Element {
  return <AntCheckbox {...props} />
}

export default Checkbox
