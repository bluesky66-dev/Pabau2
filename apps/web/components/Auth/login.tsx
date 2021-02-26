import React, { FC, useState } from 'react'
import styles from '../../pages/login.module.less'
import { Button, Notification, NotificationType } from '@pabau/ui'
import * as Yup from 'yup'
import { Form, Input, Checkbox, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'
import { EyeInvisibleOutlined, LinkedinFilled } from '@ant-design/icons'
import { ReactComponent as GoogleIcon } from '../../assets/images/google.svg'
import { ReactComponent as SSOIcon } from '../../assets/images/sso.svg'
import { gql, useMutation } from '@apollo/client'
import { router } from 'next/client'
import { useRouter } from 'next/router'

export interface LoginFormProps {
  email: string
  password: string
  remember?: boolean
}

interface LoginProps {
  handlePageShow: (page: string) => void
}

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(username: $email, password: $password)
  }
`

const LoginMain: FC<LoginProps> = ({ handlePageShow }) => {
  const router = useRouter()
  const [
    login,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(LOGIN_MUTATION)

  return (
    <div>
      <div className={styles.signInForm}>
        <div className={styles.formHead}>
          <h6>Log in</h6>
          <span>
            Do not have an account? <a>Start a free trial</a>
          </span>
        </div>
      </div>
      <div className={styles.formLogin}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid work email')
              .required('Email is required'),
            password: Yup.string().required('Password is required'),
          })}
          onSubmit={async (value: LoginFormProps) => {
            const { email, password } = value
            const result = await login({
              variables: {
                email,
                password,
              },
            })
            if (!result) {
              console.log('Wrong user/password')
            }
            localStorage.setItem('token', JSON.stringify(result))
            router.push('/index')
          }}
          render={() => (
            <Form layout="vertical">
              <Form.Item
                label={'Email'}
                name={'email'}
                className={styles.signupInput}
              >
                <Input name={'email'} />
              </Form.Item>
              <Form.Item
                label={'Password'}
                name={'password'}
                className={styles.signupInput}
              >
                <Input.Password
                  name={'password'}
                  iconRender={() => <EyeInvisibleOutlined />}
                />
              </Form.Item>
              <div className={styles.forgotWrap}>
                <div
                  className={styles.forgotKey}
                  onClick={() => handlePageShow('resetPassword')}
                >
                  Forgot password?
                </div>
              </div>
              <div className={styles.checkBox}>
                <Checkbox name={'remember'}>Remember me</Checkbox>
              </div>
              <div className={styles.btnSubmit}>
                <SubmitButton className={styles.btnStarted} type={'primary'}>
                  Login
                </SubmitButton>
              </div>
              <div className={styles.accessKey}>
                <div className={styles.line}>
                  <span>or access quickly</span>
                </div>
              </div>
              <div className={styles.socialWrapper}>
                <div className={styles.google}>
                  <Button
                    className={styles.btnStarted}
                    type={'default'}
                    icon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                </div>
                <div className={styles.socialLine}>
                  <Button
                    className={styles.btnStarted}
                    type={'default'}
                    icon={<LinkedinFilled />}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className={styles.btnStarted}
                    type={'default'}
                    icon={<SSOIcon className={styles.keyIc} />}
                  >
                    <span className={styles.iconTxtKey}>SSO</span>
                  </Button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
}

export default LoginMain
