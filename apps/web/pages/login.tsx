import React, { FC, useState } from 'react'
import loginImage from '../assets/images/login.png'
import styles from './login.module.less'
import { Logo } from '@pabau/ui'
import LoginMain from '../components/Auth/login'
import TwoStepAuthentication from '../components/Auth/twoStepAuthentication'
import MoreWayAuthentication from '../components/Auth/moreWayToAuthentication'
import ResetPassword from '../components/Auth/resetPassword'

const Login: FC = () => {
  const [showPage, setShowPage] = useState<string>('login')
  const handlePageShow = (page: string) => {
    setShowPage(page)
  }
  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInBackground}>
        <img src={loginImage} alt={loginImage} />
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.signInContent}>
          <div className={styles.signInLogo}>
            <Logo />
          </div>
        </div>
        {showPage === 'login' ? (
          <LoginMain handlePageShow={handlePageShow} />
        ) : showPage === 'twoStepAuth' ? (
          <TwoStepAuthentication handlePageShow={handlePageShow} />
        ) : showPage === 'moreWayAuth' ? (
          <MoreWayAuthentication />
        ) : (
          showPage === 'resetPassword' && (
            <ResetPassword handlePageShow={handlePageShow} />
          )
        )}
      </div>
    </div>
  )
}

export default Login
