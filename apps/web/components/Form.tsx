import React, { FC } from 'react'
import { Form as AntForm, Input, Radio, Checkbox, Select } from 'formik-antd'
// import { Radio } from 'antd'
import { ColorPicker, FontIcon, HelpTooltip } from '@pabau/ui'
import { FormikContextType } from 'formik'
interface P {
  schema: Schema
  /* eslint-disable @typescript-eslint/no-explicit-any */
  formik: FormikContextType<any>
  layout?: 'horizontal' | 'inline' | 'vertical'
  selectOptions?: TypeValues[]
}

interface TypeValues {
  label: string
  value: string
}

const Form: FC<P> = ({ schema,formik, layout = 'vertical' , selectOptions}) => {
  const { fields } = schema
  const { values } = formik

  return (
    <AntForm layout={layout} requiredMark={false}>
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
              required,
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
              <AntForm.Item key={name} name={name} required={required}>
                <div style={{ width: '344px' }}>
                  <ColorPicker
                    selectedColor={values.color}
                    isDarkColor={true}
                    onSelected={(val) => {
                      formik.setFieldValue(name, val)
                    }}
                    heading={values.appointment_type + ' ' + full}
                  />
                  {!values[name] && formik.errors?.color && (
                    <span style={{ color: 'red' }}>{formik.errors?.color}</span>
                  )}
                </div>
              </AntForm.Item>
            )}
            {type === 'checkbox' && (
              <AntForm.Item key={name} name={name}>
                <Checkbox
                  name={name}
                  defaultChecked={true}
                  className={'track-time-checkbox'}
                >
                  {full}
                </Checkbox>
                {description && (
                  <HelpTooltip placement={'top'} helpText={description} />
                )}
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
