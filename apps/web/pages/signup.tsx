import React, { FC, useState } from 'react'
import { Logo } from '@pabau/ui'
import LaunchingImage from '../assets/images/launching-pana.png'

import {
  SignupStepOne,
  StepOneFormProps,
} from '../components/Auth/signupStepOne'
import {
  SignupStepTwo,
  StepTwoFormProps,
} from '../components/Auth/signupStepTwo'
import styles from '../components/Auth/common.module.less'

const Signup: FC = () => {
  const [step, setStep] = useState<number>(1)

  const handleStepOneSubmit = (value: StepOneFormProps) => {
    console.log(value)
    setStep(2)
  }

  const handleStepTwoSubmit = (value: StepTwoFormProps) => {
    console.log(value)
  }

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupBackground}>
        <img src={LaunchingImage} alt={LaunchingImage} />
      </div>
      <div className={styles.signupContent}>
        <div className={styles.signupLogo}>
          <Logo />
        </div>
        <div className={styles.signupForm}>
          <div className={styles.formHead}>
            <h6>We’re ready to set up your free trial of Pabau</h6>
            <span>Step {step} of 2</span>
          </div>
          {step === 1 ? (
            <SignupStepOne handleStepOneSubmit={handleStepOneSubmit} />
          ) : (
            <SignupStepTwo handleStepTwoSubmit={handleStepTwoSubmit} />
          )}
          <div className={styles.signupLogin}>
            <span>
              Already has an account? <a>Log in</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
