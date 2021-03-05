import React, { FC } from 'react'
import ReactQuill from 'react-quill'

interface P {
  value: string
  onTextChange: (value: string) => void
}

const MyReactQuill: FC<P> = ({ value, onTextChange }) => (
  <ReactQuill value={value} onChange={onTextChange} />
)
export default MyReactQuill
