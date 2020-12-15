import React, { FC } from 'react'
import './Logo.less'

export const Logo: FC = () => (
  <div>
    <h1 style={{ userSelect: 'none' }}>
      Welcome to <span className="logo">Pabau</span>!
    </h1>
  </div>
)

export default Logo
