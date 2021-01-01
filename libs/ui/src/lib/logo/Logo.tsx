import React, { FC, HTMLProps } from 'react'
import './Logo.less'
import { ReactComponent as LogoSvg } from './logo.svg'

export const Logo: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`${className} container`} {...props}>
    <LogoSvg className="logo" />
  </div>
)

export default Logo
