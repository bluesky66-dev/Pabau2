import { Input } from 'antd'
import React, { FC } from 'react'

const { TextArea } = Input

interface P {
  title?: string
  desc?: string
}

const ElementTextBox: FC<P> = ({ title, desc }) => {
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <TextArea placeholder={desc} rows={4} />
    </>
  )
}

export default ElementTextBox
