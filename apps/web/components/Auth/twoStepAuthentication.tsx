import React, { FC } from 'react'
import styles from '../../pages/login.module.less'
import _ from 'lodash'
import { Input, SubmitButton, Form } from 'formik-antd'
// import * as Yup from 'yup'
import { Formik } from 'formik'
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
          // validationSchema={Yup.object({
          //   code: Yup.object({
          //     '0': Yup.string().required('code'),
          //   }),
          //   .required('code is required')
          //   .length(6, 'Code is required'),
          // })}
          onSubmit={(value) => {
            console.log(value)
          }}
          render={({ values, setFieldValue }) => (
            <Form>
              <div className={styles.inputWrap}>
                {_.times(6, (i) => {
                  return (
                    <div className={styles.customInputWrap}>
                      <Form.Item
                        name={i.toString()}
                        // name={`code[${Object.keys(values.code)[i.toString()]}]`}
                      >
                        <Input
                          type="number"
                          name={i.toString()}
                          value={values.code[i]}
                          onChange={(e) => {
                            if (e.target.value.length <= 1) {
                              const codeArray = values.code
                              codeArray[i] = e.target.value
                              setFieldValue('code', codeArray)
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
          )}
        />
      </div>
    </div>
  )
}

export default TwoStepAuthentication
