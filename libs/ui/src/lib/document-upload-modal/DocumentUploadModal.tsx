import React, { FC, useState } from 'react'
import BasicModal from '../modal/basicmodal'

import styles from './DocumentUploadModal.module.less'
import { Avatar } from '../avatar/Avatar'
import { Upload, Select, Tooltip } from 'antd'
import {
  DeleteOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Button, Checkbox } from '@pabau/ui'
import Download from '../../assets/images/download.svg'

export interface DraggableProps {
  multiple?: boolean
  name?: string
}

export interface FolderOptions {
  name: string
  value: string
}

export interface DocumentUploadModalProps {
  title: string
  visible: boolean
  avatarSrc: string
  userName: string
  position: string
  checkboxTooltip?: string
  onCancel?: () => void
  onDelete?: (file, index) => void
  onFolderChange?: (value) => void
  draggerProps?: DraggableProps
  folderOptions: FolderOptions[]
}

const DocumentUploadModal: FC<DocumentUploadModalProps> = ({
  visible,
  onCancel,
  onFolderChange,
  title,
  avatarSrc,
  userName,
  position,
  checkboxTooltip,
  ...props
}) => {
  const [fileList, setFileList] = useState([])
  const { Dragger } = Upload

  const handleFileOnChange = (info) => {
    const { status } = info.file
    if (status !== 'uploading') {
      setFileList(info?.fileList)
    }
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
    if (props?.onDelete) {
      props.onDelete(file, index)
    } else {
      const newFileList = [...fileList]
      newFileList.splice(index, 1)
      setFileList(newFileList)
    }
  }

  const renderContent = () => {
    return (
      <div className={styles.documentUploadModal}>
        <div className={styles.contentBox}>
          <div className={styles.userInfo}>
            <Avatar size={44} src={avatarSrc} />
            <div className={styles.reviewName}>
              <h5>{userName}</h5>
              <div className={styles.position}>{position}</div>
            </div>
          </div>
          <div className={styles.DragDropSection}>
            {fileList.length === 0 ? (
              <div>
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
                  <Button
                    label="Choose Files"
                    size="medium"
                    type="primary"
                    className={styles.chooseFileButton}
                  >
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
          <div className={styles.filter}>
            <div className={styles.filterName}>Folder</div>
            <Select
              style={{ width: '100%' }}
              size="large"
              placeholder="Select person"
              onChange={onFolderChange}
            >
              {props.folderOptions?.map((option) => {
                return (
                  <Select.Option value={option.value} key={option.value}>
                    {option.name}
                  </Select.Option>
                )
              })}
            </Select>
          </div>
          <div>
            <Checkbox className={styles.checkBox}>
              <span className={styles.checkLabel}>
                {'Share these File(s) with the Employee'}
              </span>
            </Checkbox>
            <Tooltip
              placement="topLeft"
              color="#595959"
              title={checkboxTooltip}
              className={styles.tooltip}
            >
              <QuestionCircleOutlined className={styles.icon} />
            </Tooltip>
          </div>
          <div className={styles.footerBtn}>
            <Button size="large" type={'default'} onClick={onCancel}>
              Cancel
            </Button>
            <Button
              disabled={fileList.length === 0}
              label="Upload"
              size="large"
              type="primary"
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={''}>
      <BasicModal
        {...props}
        title={title}
        modalWidth={682}
        footer={false}
        onCancel={onCancel}
        visible={visible}
      >
        <div>{renderContent()}</div>
      </BasicModal>
    </div>
  )
}

export default DocumentUploadModal
