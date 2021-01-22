import React, { FC } from 'react'
import { Form as AntForm, Input } from 'formik-antd'

interface P {
  schema: Schema
  initialValues: Record<string, string | boolean | number>
}

const Form: FC<P> = ({ schema, initialValues }) => {
  const { fields } = schema
  console.log('Form.tsx initialvalues are', initialValues)
  return (
    <AntForm layout="vertical">
      {Object.entries(fields).map(
        ([name, { short, shortLower, example, description, extra, min }], i) => (
          <AntForm.Item
            key={name}
            label={short}
            name={name}
            required={!!min}
            tooltip={`${description} for this ${shortLower}, eg: ${example}`}
            // showValidateSuccess={!!min}
            extra={extra && <div>{extra}</div>}
          >
            <Input
              //disabled={isSubmitting}
              name={name}
              placeholder={example && `eg ${example}`}
              autoFocus={i === 0}
            />
          </AntForm.Item>
        )
      )}
    </AntForm>
  )
}

export default Form
