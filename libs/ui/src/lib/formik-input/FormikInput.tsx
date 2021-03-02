import React, { FC } from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import './FormikInput.module.less'

/* eslint-disable-next-line */
export interface FormikInputProps extends InputProps {
  name: string
}

const FormikInput: FC<FormikInputProps> = ({ name, ...props }) => {
  return (
    <div>
      <Input name={name} {...props} />
    </div>
  )
}

export default FormikInput
