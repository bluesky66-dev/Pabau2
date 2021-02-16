import React, { useState } from 'react'
import { Row, Col, Button, Image } from 'antd'
import { Formik } from 'formik'
import { Form as AntForm, Input, Select } from 'formik-antd'
import NormalClinicLogo from '../../../../assets/images/normal-clinic-logo.png'
import classNames from 'classnames'
import styles from './Lead-forms.module.less'
import { FieldType, BasicModal as Modal, ButtonTypes } from '@pabau/ui'
const { Option } = Select

interface LeadFormPreviewInterface {
  schema: Schema
  formBuilderField: FieldType[]
}

export const LeadFormPreview: React.FC<LeadFormPreviewInterface> = ({
  schema,
  formBuilderField,
}) => {
  const [sendToDeveloperModal, setSendToDeveloperModal] = useState(false)

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

  const onSend = () => {
    setSendToDeveloperModal(true)
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
        // requiredMark={required}
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
                          label={short}
                          name={name}
                          required={!!min}
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
                  <Button
                    onClick={onSend}
                    className={styles.sendBtn}
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
      <Modal
        modalWidth={682}
        centered={true}
        onOk={() => {
          setSendToDeveloperModal((e) => !e)
        }}
        closable={true}
        onCancel={() => setSendToDeveloperModal((e) => !e)}
        visible={sendToDeveloperModal}
        title={'Send To Developer'}
        newButtonText={'Send'}
        btnType={ButtonTypes.default}
      >
        <Formik
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            console.log('formik onsubmit', values)
            // onSubmit(values, { resetForm })
          }}
          //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
          initialValues={{ email: '' }}
          // requiredMark={required}
        >
          <AntForm
            layout={'vertical'}
            requiredMark={false}
            className={styles.clinicLeadCaptureForm}
          >
            <AntForm.Item
              label={'email'}
              name={'email'}
              // extra={extra && <div>{extra}</div>}
              className={styles.clinicLabelStyle}
              rules={[
                {
                  required: true,
                  message: `* required email`,
                },
              ]}
            >
              <Input
                name={'email'}
                placeholder={'client@email.com'}
                autoFocus
              />
            </AntForm.Item>
          </AntForm>
        </Formik>
      </Modal>
    </>
  )
}

export default LeadFormPreview
