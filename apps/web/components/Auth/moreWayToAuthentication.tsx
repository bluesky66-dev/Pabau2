import React, { FC } from 'react'
import styles from '../../pages/login.module.less'

const MoreWayAuthentication: FC = () => {
  return (
    <div>
      <div className={styles.signInForm}>
        <div className={styles.formHead}>
          <h6>More ways to authenticate</h6>
          <span className={styles.textContent}>
            Having trouble? Try one of these alternative methods to sign in.
          </span>
        </div>
      </div>
      <div className={styles.authLink}>
        <a>Send a code to your phone ending in 1462</a>
        <a>Send a code to your email in william@pabau.com</a>
        <a>Get help from Pabau</a>
      </div>
    </div>
  )
}

export default MoreWayAuthentication
