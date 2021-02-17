import React, { FC } from 'react'
import { Form as AntForm, Input, Radio, Checkbox, Select } from 'formik-antd'
// import { Radio } from 'antd'
import { ColorPicker, FontIcon } from '@pabau/ui'
import { FormikValues } from 'formik'
interface P {
  schema: Schema
  values: FormikValues
  selectOptions?: TypeValues[]
}

interface TypeValues {
  label: string
  value: string
}

const Form: FC<P> = ({ schema, values, selectOptions }) => {
  const { fields } = schema

  return (
    <AntForm layout="vertical" requiredMark={false}>
      {Object.entries(fields).map(
        (
          [
            name,
            {
              short,
              shortLower,
              example,
              description,
              extra,
              min,
              type,
              radio,
              full,
              selectOptions,
            },
          ],
          i
        ) => (
          <div key={name}>
            {type === 'radio-group' ? (
              <AntForm.Item key={name} name={name}>
                <Radio.Group name={name}>
                  {radio.map((val, i) => (
                    <Radio name={name} key={i} value={val.value}>
                      {val.label}
                    </Radio>
                  ))}
                </Radio.Group>
              </AntForm.Item>
            ) : null}
            {type === 'icon' && values.appointment_type === 'Icon' && (
              <AntForm.Item key={name} name={name}>
                <FontIcon
                  max={60}
                  height={172}
                  selectedIcon={values.icon}
                  onIconSelected={(icon) => {
                    values.icon = icon
                  }}
                />
              </AntForm.Item>
            )}

            {type === 'color-picker' && (
              <AntForm.Item key={name} name={name}>
                <div style={{ width: '344px' }}>
                  <ColorPicker
                    selectedColor={values.color}
                    onSelected={(val) => {
                      values.color = val
                    }}
                    heading={values.appointment_type + ' ' + full}
                  />
                </div>
              </AntForm.Item>
            )}
            {type === 'checkbox' && (
              <AntForm.Item key={name} name={name}>
                <Checkbox name={name} defaultChecked={true}>
                  {full}
                </Checkbox>
              </AntForm.Item>
            )}
            {type === 'select' && (
              <AntForm.Item label={full} name={name} required>
                <Select name={name} style={{ width: '100%' }}>
                  {selectOptions?.map((option) => {
                    return (
                      <Select.Option value={option.value} key={option.label}>
                        {option.label}
                      </Select.Option>
                    )
                  })}
                </Select>
              </AntForm.Item>
            )}
            {(type === 'string' || type === 'number') && (
              <AntForm.Item
                key={name}
                label={short}
                name={name}
                required={!!min}
                tooltip={
                  description &&
                  `${description} for this ${shortLower}, eg: ${example}`
                }
                // showValidateSuccess={!!min}
                extra={extra && <div>{extra}</div>}
              >
                <Input
                  //disabled={isSubmitting}
                  name={name}
                  type={type}
                  placeholder={example && `eg ${example}`}
                  autoFocus={i === 0}
                />
              </AntForm.Item>
            )}
          </div>
        )
      )}
    </AntForm>
  )
}

export default Form
