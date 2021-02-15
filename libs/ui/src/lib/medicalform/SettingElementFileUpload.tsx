import { UploadOutlined } from '@ant-design/icons'
import { Upload } from 'antd'
import React, { FC } from 'react'

const { Dragger } = Upload

interface P {
  title: string
  desc?: string
}

const SettingElementFileUpload: FC<P> = ({ title, desc }) => {
  return (
    <>
      <p style={{ marginTop: '20px' }}>{title}</p>
      <Dragger style={{ height: '176px' }}>
        <p>
          <UploadOutlined />
        </p>
        <p className="ant-upload-text" style={{ color: '#9292a3' }}>
          {desc}
        </p>
      </Dragger>
    </>
  )
}

export default SettingElementFileUpload
