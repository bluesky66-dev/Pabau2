import { UploadOutlined } from '@ant-design/icons'
import { Input, Upload } from 'antd'
import React, { FC } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const { Dragger } = Upload

interface P {
  hideSideBar?: () => void
}

const Drawing: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }

  const drawingStyle = {
    height: '176px',
  }
  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={drawingIcon}
          bgcolor="#F78561"
          title="Drawing"
          desc="Draw on an image or a photo"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Title</p>
          <Input placeholder="Enter your title" />
          <p style={{ marginTop: '20px' }}>Image</p>
          <Dragger style={drawingStyle}>
            <p>
              <UploadOutlined />
            </p>
            <p className="ant-upload-text" style={{ color: '#9292a3' }}>
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
      </div>
    </div>
  )
}

export default Drawing
