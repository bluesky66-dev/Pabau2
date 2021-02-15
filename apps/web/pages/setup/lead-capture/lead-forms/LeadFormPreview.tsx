import React from 'react'
import { Row, Col, Button, Image } from 'antd'
import { Formik } from 'formik'
import { Form as AntForm, Input, Select } from 'formik-antd'
import NormalClinicLogo from '../../../../assets/images/normal-clinic-logo.png'
import classNames from 'classnames'
import styles from './Lead-forms.module.less'

const { Option } = Select

const schema: Schema = {
  full: '',
  fullLower: '',
  short: '',
  fields: {
    first_name: {
      full: 'First name',
      fullLower: 'first name',
      short: 'First Name',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your first name',
      cssWidth: 'max',
      type: 'string',
    },
    last_name: {
      full: 'Last name',
      fullLower: 'last name',
      short: 'Last Name',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your last name',
      cssWidth: 'max',
      type: 'string',
    },
    dob: {
      full: 'Date of birth',
      fullLower: 'Date of birth',
      short: 'Date of birth',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'DD/MM/YYYY',
      cssWidth: 'max',
      type: 'string',
    },
    telephone: {
      full: 'Telephone',
      fullLower: 'telephone',
      short: 'Telephone',
      shortLower: 'name',
      min: 2,
      example: '',
      description: 'Enter your telephone',
      cssWidth: 'max',
      type: 'string',
    },
    email: {
      full: 'Email',
      fullLower: 'email',
      short: 'Email',
      shortLower: 'email',
      min: 2,
      example: '',
      description: 'Email',
      cssWidth: 'max',
      type: 'string',
    },
    city: {
      full: 'City',
      fullLower: 'city',
      short: 'City',
      shortLower: 'city',
      min: 2,
      example: '',
      description: 'City',
      cssWidth: 'max',
      type: 'string',
    },
    about_us: {
      full: 'How did you hear about us?',
      fullLower: 'about_us',
      short: 'about_us',
      shortLower: 'about_us',
      min: 2,
      example: '',
      description: 'A about_us',
      cssWidth: 'max',
      type: 'select',
      selectOptions: [
        {
          label: '24 hours',
          value: '24',
        },
        {
          label: '12 hours',
          value: '12',
        },
        {
          label: '6 hours',
          value: '6',
        },
      ],
      defaultvalue: '24',
    },
    message: {
      full: 'Message',
      fullLower: 'message',
      short: 'Message',
      shortLower: 'message',
      min: 2,
      example: '',
      description: 'Enter your message',
      cssWidth: 'max',
      type: 'string',
    },
  },
}

export const LeadFormPreview: React.FC = () => {
  const formikFields = () => {
    const initialValues = {}
    Object.keys(schema.fields).map((field) => {
      initialValues[field] = checkFieldType(
        schema.fields[field]['type'],
        schema.fields[field]['defaultvalue']
      )
      return field
    })
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
        onSubmit={(values, { resetForm }) => {
          console.log('formik onsubmit', values)
          // onSubmit(values, { resetForm })
        }}
        //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
        initialValues={formikFields()}
      >
        <AntForm
          layout={'vertical'}
          requiredMark={false}
          className={styles.clinicLeadCaptureForm}
        >
          <div className={styles.formBox}>
            <div className={styles.imgCenterBox}>
              <Image src={NormalClinicLogo} />
            </div>
            <Row>
              {Object.entries(schema.fields).map(
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
                    },
                  ],
                  i
                ) => (
                  <Col
                    md={name === 'message' || name === 'about_us' ? 24 : 12}
                    xs={name === 'dob' || name === 'telephone' ? 12 : 24}
                    className={styles.colPaddingLeft}
                    key={name}
                  >
                    {(type === 'string' || type === 'number') && (
                      <AntForm.Item
                        key={name}
                        label={short}
                        name={name}
                        required={!!min}
                        // extra={extra && <div>{extra}</div>}
                        className={styles.clinicLabelStyle}
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
                        required={!!min}
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
                              <Option value={option.value} key={option.label}>
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
                  <Button className={styles.sendBtn} type="default">
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
