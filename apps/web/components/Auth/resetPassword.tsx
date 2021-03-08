import React, { FC } from 'react'
import styles from '../../pages/login.module.less'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Input, SubmitButton } from 'formik-antd'
import { Button } from 'antd'

interface ResetPasswordProps {
  handlePageShow: (page: string) => void
}

const ResetPassword: FC<ResetPasswordProps> = ({ handlePageShow }) => {
  return (
    <div>
      <div className={styles.signInForm}>
        <div className={styles.formHead}>
          <h6>Reset your password</h6>
          <span className={styles.textContent}>
            Enter the email address associated with your account, and we’ll send
            you a link to reset your password.
          </span>
        </div>
      </div>
      <div className={styles.resetPassword}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email')
              .required('Email is required'),
          })}
          onSubmit={(value) => {
            console.log(value)
          }}
          render={() => (
            <Form className={styles.resetWrap} layout="vertical">
              <Form.Item
                label={'Email'}
                name={'email'}
                className={styles.signupInput}
              >
                <Input name={'email'} />
              </Form.Item>
              <div className={styles.btnReset}>
                <SubmitButton className={styles.btnStarted} type={'primary'}>
                  Login
                </SubmitButton>
                <Button
                  className={styles.btnReturn}
                  onClick={() => handlePageShow('login')}
                >
                  Return to sign in
                </Button>
              </div>
              <div className={styles.linkReset}>
                <p> Do not have a Pabau account yet?</p>
                <span>Start a free trial</span>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
}

export default ResetPassword
