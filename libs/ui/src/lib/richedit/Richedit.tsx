import React, { FC } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Richedit.module.less'

/* eslint-disable-next-line */
export interface RicheditProps {}

const Richedit: FC = () => {
  return <ReactQuill style={{ height: '150px' }} />
}

export default Richedit
