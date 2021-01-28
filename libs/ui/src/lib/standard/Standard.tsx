import React from 'react'

import './Standard.module.less'

interface P {
  title: string
}

export const Standard: React.FC<P> = ({ title }) => {
  return (
    <div>
      <h1>Welcome to Standard!</h1>
    </div>
  )
}

export default Standard
