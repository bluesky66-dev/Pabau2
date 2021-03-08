import React from 'react'
import { Row, Col, Image } from 'antd'
import { Formik, FormikErrors } from 'formik'
import { Form as AntForm, Input, Select } from 'formik-antd'
import NormalClinicLogo from '../../../../assets/images/normal-clinic-logo.png'
import classNames from 'classnames'
import styles from './Lead-forms.module.less'
import { Button } from '@pabau/ui'
const { Option } = Select

interface colors {
  fontColor: string
  buttonColor: string
}
interface LeadFormPreviewInterface {
  schema: Schema
  colours: colors
}

export const LeadFormPreview: React.FC<LeadFormPreviewInterface> = ({
  schema,
  colours = { fontColor: '', buttonColor: '' },
}) => {
  const formikFields = () => {
    const initialValues = {}
    if (schema) {
      Object.keys(schema.fields).map((field) => {
        initialValues[field] = checkFieldType(
          schema.fields[field]['type'],
          schema.fields[field]['defaultvalue']
        )
        return field
      })
    }
    return initialValues
  }

  const checkFieldType = (type: string, defaultVal) => {
    switch (type) {
      case 'string':
      case 'color-picker':
      case 'radio-group':
        return defaultVal || ''
      case 'boolean':
      case 'checkbox':
        return defaultVal || true
      case 'number':
        return defaultVal || 0
      default:
        return defaultVal || ''
    }
  }

  return (
    <>
      <Row className={classNames(styles.headerStyle, styles.mobileViewNone)}>
        <div>PREVIEW</div>
      </Row>
      <Formik
        enableReinitialize={true}
        validate={(e) => {
          if (schema) {
            Object.entries(schema.fields).reduce((a, c) => {
              if (
                c[1].required &&
                c[1].min && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                c[1].min > e[c[0]].length
              ) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                a[c[0]] = `Required ${c[1].full}.`
              }
              return a
              // eslint-disable-next-line
            }, {} as FormikErrors<any>)
          }
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('formik onsubmit', values)
          // onSubmit(values, { resetForm })
        }}
        //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
        initialValues={formikFields()}
        // requiredMark={required}
      >
        <AntForm
          layout={'vertical'}
          requiredMark={true}
          className={styles.clinicLeadCaptureForm}
        >
          <div className={styles.formBox}>
            <div className={styles.imgCenterBox}>
              <Image src={NormalClinicLogo} />
            </div>
            <Row>
              {schema &&
                Object.entries(schema.fields).map(
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
                        defaultvalue,
                        visible,
                        required,
                      },
                    ],
                    i
                  ) =>
                    visible && (
                      <Col
                        md={name === 'message' || name === 'about_us' ? 24 : 12}
                        xs={name === 'dob' || name === 'telephone' ? 12 : 24}
                        className={styles.colPaddingLeft}
                        key={name}
                      >
                        {(type === 'string' || type === 'number') && (
                          <AntForm.Item
                            key={name}
                            // label={short}
                            label={
                              <span style={{ color: colours.fontColor }}>
                                {short}
                              </span>
                            }
                            name={name}
                            required={required}
                            // extra={extra && <div>{extra}</div>}
                            className={styles.clinicLabelStyle}
                            rules={[
                              {
                                required: required,
                                message: `* required ${full}`,
                              },
                            ]}
                          >
                            <Input
                              name={name}
                              type={type}
                              placeholder={description}
                              autoFocus={i === 0}
                            />
                          </AntForm.Item>
                        )}
                        {type === 'select' && (
                          <AntForm.Item
                            label={full}
                            name={name}
                            required={required}
                            // extra={extra && <div>{extra}</div>}
                            className={styles.clinicLabelStyle}
                          >
                            <Select
                              name={name}
                              style={{ width: '100%' }}
                              defaultValue={defaultvalue}
                            >
                              {selectOptions?.map((option) => {
                                return (
                                  <Option
                                    value={option.value}
                                    key={option.label}
                                  >
                                    {option.label}
                                  </Option>
                                )
                              })}
                            </Select>
                          </AntForm.Item>
                        )}
                      </Col>
                    )
                )}

              <Col md={24} xs={24} className={styles.colPaddingLeft}>
                <div className={styles.formSendBtnCenter}>
                  <Button
                    className={styles.sendBtn}
                    style={{
                      color: colours.fontColor,
                    }}
                    backgroundColor={colours?.buttonColor}
                    type="default"
                  >
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </AntForm>
      </Formik>
    </>
  )
}

export default LeadFormPreview
