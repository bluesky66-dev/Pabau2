import React, { FC } from 'react'
import ReactQuill from 'react-quill'
import '../../assets/css/quill.css'

interface P {
  title: string
  desc: string
  value: string
  onChangeText: (value: string) => void
}

const SettingElementTextBlock: FC<P> = ({
  title,
  desc,
  value,
  onChangeText,
}) => {
  const onTextChange = (e) => {
    onChangeText?.(e)
  }
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <ReactQuill value={value} onChange={onTextChange} />
    </>
  )
}

export default SettingElementTextBlock
