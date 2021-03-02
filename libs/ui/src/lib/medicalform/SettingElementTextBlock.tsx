import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const ReactQuill = dynamic(() => import('./MyReactQuill'), {
  ssr: false,
})

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
      <ReactQuill value={value} onTextChange={onTextChange} />
    </>
  )
}

export default SettingElementTextBlock
