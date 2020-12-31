import React, { FC } from 'react'
import './Logo.less'
import { ReactComponent as LogoSvg } from '../../../assets/images/pabau-logo.svg'

export const Logo: FC = () => (
  <div>
    <LogoSvg className="pabau-logo" />
  </div>
)

export default Logo
