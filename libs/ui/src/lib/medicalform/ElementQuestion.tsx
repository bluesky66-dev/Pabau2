import { Input } from 'antd'
import React, { FC } from 'react'

interface P {
  title?: string
  desc?: string
}

const ElementQuestion: FC<P> = ({ title, desc }) => {
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <Input placeholder={desc} />
    </>
  )
}

export default ElementQuestion
