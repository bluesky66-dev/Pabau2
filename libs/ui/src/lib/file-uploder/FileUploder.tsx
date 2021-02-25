import React, { FC, useState } from 'react'

import { UploadProps } from 'antd/es/upload'
import { Upload } from 'antd'
import Download from '../../assets/images/download.svg'
import { Button } from '@pabau/ui'
import {
  DeleteOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FilePdfOutlined,
} from '@ant-design/icons'

import styles from './FileUploder.module.less'

export interface DraggableProps {
  multiple?: boolean
  name?: string
}

/* eslint-disable-next-line */
export interface FileUploderProps {
  draggerProps?: DraggableProps
  onDelete?(file: UploadProps[]): void
  onFileChange?(file: UploadProps): void
}

const FileUploder: FC<FileUploderProps> = (props) => {
  const [fileList, setFileList] = useState<UploadProps[]>([])
  const { Dragger } = Upload

  const handleFileOnChange = (info) => {
    const { status } = info.file
    if (status !== 'uploading') {
      setFileList(info?.fileList)
    }
    props.onFileChange?.(info?.fileList)
  }

  const getFileType = (extension) => {
    switch (extension) {
      case 'application/pdf':
        return <FilePdfOutlined className={styles.pdfIcon} />
        break
      case 'image/png':
      case 'image/jpg':
      case 'image/jpeg':
        return <FileImageOutlined className={styles.imageIcon} />
        break
      case 'xls':
      case 'xlsx':
        return <FileExcelOutlined className={styles.excelIcon} />
        break
      default:
        return <i>alt</i>
    }
  }

  const onDelete = (file, index) => {
    const newFileList = [...fileList]
    newFileList.splice(index, 1)
    setFileList(newFileList)
    props.onDelete?.(newFileList)
  }

  return (
    <div className={styles.DragDropSection}>
      {fileList.length === 0 ? (
        <div className={styles.fileUploader}>
          <Dragger
            {...props?.draggerProps}
            onChange={handleFileOnChange}
            className={styles.dropBox}
          >
            <div className={styles.DropFileText}>
              <img src={Download} className={styles.image} alt="" />
              <p className={styles.text}>Drop Files here to upload</p>
            </div>
            <div className={styles.orBox}>or</div>
            <Button type="primary" className={styles.chooseFileButton}>
              Choose Files
            </Button>
          </Dragger>
        </div>
      ) : (
        <div>
          {fileList.map((file, index) => {
            return (
              <div className={styles.fileWrap} key={index}>
                <div className={styles.fileName}>
                  {getFileType(file.type)}
                  {file.name}
                </div>
                <Button
                  size="large"
                  type="default"
                  icon={<DeleteOutlined />}
                  onClick={() => onDelete(file, index)}
                >
                  Delete
                </Button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default FileUploder
