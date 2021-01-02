import React, { FC, HTMLProps } from 'react'
import { ReactComponent as LogoSvg } from './logo.svg'
import styles from './Logo.module.less'

export const Logo: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`${className || ''} container`} {...props}>
    <style jsx>{`
      .container {
        height: 100% !important;
        line-height: 0;
      }
      .logo {
        font-weight: 800;
        height: 100%;
      }
    `}</style>
    <LogoSvg className={styles.imageSpin} style={{ height: '100%' }} />
  </div>
)

export default Logo
