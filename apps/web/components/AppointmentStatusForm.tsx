import React, { FC } from 'react'
import { Form as AntForm, Input, Radio, Checkbox } from 'formik-antd'
// import { Radio } from 'antd'
import { ColorPicker, FontIcon } from '@pabau/ui'
import { FormikValues } from 'formik'
interface P {
  schema: Schema
  values: FormikValues
}

const AppointmentStatusForm: FC<P> = ({ schema, values }) => {
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
              defaultvalue,
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
                <Checkbox name={name} defaultChecked={values[name] || true}>
                  {full}
                </Checkbox>
              </AntForm.Item>
            )}
            {type === 'string' && values.appointment_type === 'Line' && (
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

export default AppointmentStatusForm
