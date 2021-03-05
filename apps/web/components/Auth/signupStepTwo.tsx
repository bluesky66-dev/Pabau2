import React, { FC, useState } from 'react'
import { PhoneNumberInput } from '@pabau/ui'
import { Form, Input, Checkbox, Select, SubmitButton } from 'formik-antd'
import countries from 'i18n-iso-countries'
import english from 'i18n-iso-countries/langs/en.json'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import timezones from '../../../../libs/ui/src/assets/timezone'

import styles from './common.module.less'
import { Formik } from 'formik'
import * as Yup from 'yup'

export interface StepTwoFormProps {
  phoneNumber: string
  companyName: string
  country: string
  timeZone: string
}

interface SignupStepTwoProps {
  handleStepTwoSubmit?: (value: StepTwoFormProps) => void
}

export const SignupStepTwo: FC<SignupStepTwoProps> = ({
  handleStepTwoSubmit,
}) => {
  const [isValidPhone, setValidPhone] = useState(false)

  countries.registerLocale(english)
  const countriesName = countries.getNames('en')

  return (
    <div className={styles.signupFormInput}>
      <Formik
        initialValues={{
          phoneNumber: '',
          companyName: '',
          country: '',
          timeZone: '',
          termsAndCondition: false,
        }}
        validationSchema={Yup.object({
          phoneNumber: Yup.string().required('Phone number is required'),
          companyName: Yup.string().required('Company name is required'),
          country: Yup.string().required('Country is required'),
          timeZone: Yup.string().required('Timezone is required'),
          termsAndCondition: Yup.bool().oneOf(
            [true],
            'Accept Terms & Conditions is required'
          ),
        })}
        onSubmit={(value) => {
          if (isValidPhone) {
            handleStepTwoSubmit(value)
          }
        }}
        render={({ setFieldValue }) => (
          <Form layout="vertical">
            <Form.Item
              label={'Phone Number'}
              name={'phoneNumber'}
              className={styles.signupInput}
            >
              <PhoneNumberInput
                onChange={(value, valid) => {
                  setFieldValue('phoneNumber', value)
                  if (!valid) {
                    setValidPhone(false)
                  } else {
                    setValidPhone(true)
                  }
                }}
              />
            </Form.Item>
            <Form.Item
              label={'Company Name'}
              name={'companyName'}
              className={styles.signupInput}
            >
              <Input name={'companyName'} />
            </Form.Item>
            <Form.Item
              label={'Country'}
              name={'country'}
              className={styles.signupInput}
            >
              <Select name={'country'} showSearch>
                {Object.keys(countriesName).map((key) => (
                  <Select.Option value={key} key={key}>
                    {countriesName[key]}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label={'Timezone'}
              name={'timeZone'}
              className={styles.signupInput}
            >
              <Select name={'timeZone'} showSearch>
                {timezones.map((item) => (
                  <Select.Option key={item.text} value={item.text}>
                    {item.text}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div className={styles.signupAgree}>
              <Checkbox name={'termsAndCondition'}>
                I agree to <a>Terms and Conditions</a>
              </Checkbox>
            </div>
            <div className={styles.signupButton}>
              <SubmitButton
                className={styles.btnStarted}
                type={'primary'}
                disabled={!isValidPhone}
              >
                Create Account
              </SubmitButton>
            </div>
          </Form>
        )}
      />
    </div>
  )
}
