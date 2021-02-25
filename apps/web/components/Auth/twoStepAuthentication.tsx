import React, { FC, useRef } from 'react'
import styles from '../../pages/login.module.less'
import _ from 'lodash'
import { SubmitButton, Form } from 'formik-antd'
import { Input } from 'antd'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@pabau/ui'
import { MinusOutlined } from '@ant-design/icons'

export interface TowStepFormProps {
  code: string
}

interface TwoStepAuthenticationProps {
  handlePageShow: (page: string) => void
}

const TwoStepAuthentication: FC<TwoStepAuthenticationProps> = ({
  handlePageShow,
}) => {
  const inputs = useRef([])
  return (
    <div>
      <div className={styles.signInForm}>
        <div className={styles.formHead}>
          <h6>Two-step authentication</h6>
          <span className={styles.textContent}>
            To continue, please, enter the 6-digit verification code sent to
            <b> your phone ending in 0000</b>
          </span>
          <span className={styles.textContent}>
            Did not receive a code? <a>Resend.</a>
          </span>
        </div>
      </div>
      <div className={styles.twoStepAuth}>
        <Formik
          initialValues={{
            code: {
              '0': '',
              '1': '',
              '2': '',
              '3': '',
              '4': '',
              '5': '',
            },
          }}
          validationSchema={Yup.object({
            code: Yup.object().shape({
              0: Yup.string().required(),
              1: Yup.string().required(),
              2: Yup.string().required(),
              3: Yup.string().required(),
              4: Yup.string().required(),
              5: Yup.string().required(),
            }),
          })}
          onSubmit={(value) => {
            const verificationCode = Object.values(value.code).join('')
            console.log(verificationCode)
          }}
          render={({ values, setFieldValue }) => {
            return (
              <Form>
                <div className={styles.inputWrap}>
                  {_.times(6, (i) => {
                    return (
                      <div className={styles.customInputWrap} key={i}>
                        <Form.Item
                          name={`code[${
                            Object.keys(values.code)[i.toString()]
                          }]`}
                        >
                          <Input
                            type="number"
                            name={`code[${
                              Object.keys(values.code)[i.toString()]
                            }]`}
                            value={values.code[i]}
                            ref={(ref) => inputs.current.push(ref)}
                            onChange={(e) => {
                              if (e.target.value.length <= 1) {
                                const codeArray = values.code
                                codeArray[i] = e.target.value
                                setFieldValue('code', codeArray)
                                if (i !== 5) {
                                  inputs.current[i + 1].focus()
                                }
                              }
                            }}
                            onKeyUp={(e) => {
                              if (e.keyCode === 8) {
                                inputs.current[i - 1].focus()
                              }
                            }}
                          />
                        </Form.Item>
                        {i === 2 && (
                          <div className={styles.hyphen}>
                            <MinusOutlined />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
                <div className={styles.btnAuthWrap}>
                  <SubmitButton type={'primary'}>Continue</SubmitButton>
                  <Button
                    className={styles.btnSignAuth}
                    type={'default'}
                    onClick={() => handlePageShow('moreWayAuth')}
                  >
                    Sign in another way
                  </Button>
                </div>
              </Form>
            )
          }}
        />
      </div>
    </div>
  )
}

export default TwoStepAuthentication
