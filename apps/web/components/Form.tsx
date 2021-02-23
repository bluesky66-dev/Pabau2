import React, { FC } from 'react'
import {
  Form as AntForm,
  Input,
  Radio,
  Checkbox,
  TimePicker,
} from 'formik-antd'
import { ColorPicker, FontIcon } from '@pabau/ui'
import { FormikValues } from 'formik'
import moment from 'moment'
interface P {
  schema: Schema
  values: FormikValues
  layout?: 'horizontal' | 'inline' | 'vertical'
  setFieldValue: (key: string, value: string) => void
}

const CheckboxGroup = Checkbox.Group

const Form: FC<P> = ({
  schema,
  values,
  layout = 'vertical',
  setFieldValue,
}) => {
  const { fields } = schema
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
              col = 24,
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
            {type === 'days-checkbox' ? (
              <div>
                <AntForm.Item label={short} key={name} name={name}>
                  <CheckboxGroup name={name} options={selectOptions} />
                </AntForm.Item>
              </div>
            ) : null}
            {type === 'time' && (
              <AntForm.Item label={short} key={name} name={name}>
                <TimePicker
                  name={name}
                  format="HH:mm"
                  value={moment(
                    new Date().toISOString().split('T').shift() +
                      ' ' +
                      values[name]
                  )}
                  onChange={(time, timeString) => {
                    setFieldValue(name, timeString)
                  }}
                />
              </AntForm.Item>
            )}
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
                    isDarkColor={true}
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
