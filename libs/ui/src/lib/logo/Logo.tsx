import React, { FC, HTMLProps } from 'react'
import { ReactComponent as LogoSvg } from './logo.svg'
import styles from './Logo.module.less'

export const Logo: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => (
  <div className={styles.container} {...props}>
    <LogoSvg className="imageSpin2" style={{ height: '100%', width: '120px' }} />
  </div>
)

export default Logo
