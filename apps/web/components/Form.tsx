import React, { FC } from 'react'
import { Form as AntForm, Input, Radio, Checkbox } from 'formik-antd'
// import { Radio } from 'antd'
import { ColorPicker, FontIcon } from '@pabau/ui'
import { FormikValues } from 'formik'
import { Collapse } from 'antd'
import styles from './CrudTable.module.less'

const { Panel } = Collapse
interface P {
  schema: Schema
  values: FormikValues
  layout?: 'horizontal' | 'inline' | 'vertical'
}

const Form: FC<P> = ({ schema, values, layout = 'vertical' }) => {
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
              collapsible,
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

            {collapsible && (
              <Collapse
                className={styles.advanceCollapsible}
                defaultActiveKey={'0'}
                ghost
                expandIconPosition="right"
              >
                <Panel header={extra} key="1">
                  {(type === 'string' || type === 'number') && (
                    <AntForm.Item label={short} name={name}>
                      <Input
                        name={name}
                        type={type}
                        placeholder={example && `eg ${example}`}
                        autoFocus={i === 0}
                      />
                    </AntForm.Item>
                  )}
                </Panel>
              </Collapse>
            )}

            {(type === 'string' || type === 'number') && !collapsible && (
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
