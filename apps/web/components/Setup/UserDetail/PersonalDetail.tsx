import React, { FC } from 'react'
import { Form, Input, Select, Checkbox } from 'formik-antd'
import { DatePicker } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Notification,
  NotificationType,
  PhoneNumberInput,
} from '@pabau/ui'
import styles from './UserDetail.module.less'
import { customFieldsProps } from './UserDetailMain'

interface PersonalDetail {
  field: customFieldsProps[]
}
const { TextArea } = Input

const PersonalDetail: FC<PersonalDetail> = ({ field }) => {
  const formikFields = () => {
    const initialValues = {}
    if (field.length > 0) {
      field.map((field) => {
        initialValues[field.name] = field.value ?? field.value
        return field
      })
    }
    return initialValues
  }

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={formikFields()}
        validationSchema={Yup.object({
          firstname: Yup.string().required(),
          lastname: Yup.string().required(),
          email: Yup.string().required().email('Invalid email'),
        })}
        onSubmit={() => {
          Notification(NotificationType.success, 'Success! Saved changes.')
        }}
      >
        {({ setFieldValue, values, handleSubmit }) => (
          <Form layout="vertical">
            <div>
              <div className={styles.personalDetailHead}>
                <h2>Personal Details</h2>
                <div className={styles.personalDetailHeadBtn}>
                  <Button className={styles.personalBtn}>
                    Send reset password email
                  </Button>
                  <Button
                    htmlType={'submit'}
                    className={styles.personalBtn}
                    onClick={() => handleSubmit}
                  >
                    Save changes
                  </Button>
                </div>
              </div>
              <div className={styles.customFormWrapper}>
                <div className={styles.mainForm}>
                  {field.length > 0 &&
                    field.map((fieldData) => {
                      return (
                        <Form.Item
                          key={fieldData.id}
                          label={
                            fieldData.control !== 'phoneInput' &&
                            fieldData.label
                          }
                          name={fieldData.name}
                        >
                          {fieldData.control === 'input' &&
                          fieldData.type === 'text' ? (
                            <Input name={fieldData.name} />
                          ) : fieldData.control === 'input' &&
                            fieldData.type === 'textArea' ? (
                            <TextArea name={fieldData.name} rows={2} />
                          ) : fieldData.control === 'phoneInput' ? (
                            <PhoneNumberInput
                              onChange={(value) => {
                                setFieldValue(fieldData.name, value)
                              }}
                              label={fieldData.label}
                            />
                          ) : fieldData.control === 'date' ? (
                            <DatePicker
                              onChange={(date, dateString) =>
                                setFieldValue(fieldData.name, dateString)
                              }
                              format={'DD/MM/YY'}
                              placeholder={fieldData.placeholder}
                            />
                          ) : fieldData.control === 'select' ? (
                            <Select
                              name={fieldData.name}
                              placeholder={fieldData.placeholder}
                            >
                              {fieldData.options.map((option) => (
                                <Select.Option value={option} key={option}>
                                  {option}
                                </Select.Option>
                              ))}
                            </Select>
                          ) : (
                            fieldData.control === 'checkbox-group' && (
                              <div className={styles.checkboxWrapper}>
                                <div className={styles.labelText}>
                                  Choose the locations where this staff member
                                  can be booked
                                </div>
                                <Checkbox.Group name={fieldData.name}>
                                  {fieldData.options.map((option) => (
                                    <Checkbox
                                      name={fieldData.name}
                                      value={option}
                                      key={option}
                                    >
                                      {option}
                                    </Checkbox>
                                  ))}
                                </Checkbox.Group>
                                {values[fieldData.name] &&
                                values[fieldData.name].length ===
                                  fieldData.options.length ? (
                                  <Button
                                    onClick={() => {
                                      setFieldValue(fieldData.name, [])
                                    }}
                                  >
                                    Uncheck All
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => {
                                      setFieldValue(
                                        fieldData.name,
                                        fieldData.options
                                      )
                                    }}
                                  >
                                    Check All
                                  </Button>
                                )}
                              </div>
                            )
                          )}
                        </Form.Item>
                      )
                    })}
                </div>
                <div className={styles.chart}></div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PersonalDetail
