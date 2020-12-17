import React, { FC } from 'react'
import './Logo.less'
import { ReactComponent as LogoSvg } from './logo.svg'

export const Logo: FC = () => (
  <div className="container">
    <LogoSvg className="logo" />
  </div>
)

export default Logo
