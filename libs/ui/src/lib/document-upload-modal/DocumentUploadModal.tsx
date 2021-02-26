import React, { FC, useState } from 'react'
import BasicModal from '../modal/BasicModal'

import styles from './DocumentUploadModal.module.less'
import { Avatar } from '../avatar/Avatar'
import { Select, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Button, Checkbox } from '@pabau/ui'
import { UploadProps } from 'antd/es/upload'
import FileUploder from '../file-uploder/FileUploder'

export interface DocumentUploadDraggableProp {
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
  onFolderChange?: (value) => void
  onFileDelete?(file: UploadProps): void
  onFileChange?(file: UploadProps): void
  draggerProps?: DocumentUploadDraggableProp
  folderOptions: FolderOptions[]
  acceptFileType?: string
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
  onFileChange,
  onFileDelete,
  draggerProps,
  acceptFileType,
  ...props
}) => {
  const [fileList, setFileList] = useState<UploadProps[]>([])

  const handlefileChanges = (files) => {
    setFileList(files)
    onFileChange?.(files)
  }

  const handleDeleteFiles = (files) => {
    setFileList(files)
    onFileDelete?.(files)
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
          <FileUploder
            draggerProps={draggerProps}
            onFileChange={handlefileChanges}
            onDelete={handleDeleteFiles}
            acceptFileType={acceptFileType}
          />
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
