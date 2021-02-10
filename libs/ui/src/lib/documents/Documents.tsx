import React, { FC, useRef } from 'react'
import styles from './Documents.module.less'
import FolderIcon from './Folder.svg'
import UploadIcon from './Upload.svg'
import { Select } from 'antd'

const { Option } = Select

/* eslint-disable-next-line */
export interface DocumentsProps {}

export const Documents: FC<DocumentsProps> = ({ ...props }) => {
  const fileInputRef = useRef(null)

  return (
    <div className={styles.documentsMain}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h3>Documents</h3>
        </div>
        <div className={styles.control}>
          <div className={styles.sortBy}>
            <div className="label">Sort by</div>
            <div>
              <Select
                defaultValue="lucy"
                size="large"
                style={{ width: '100%' }}
              >
                <Option value="lucy">Lucy</Option>
              </Select>
            </div>
          </div>
          <div className={styles.addFolder}>
            <img src={FolderIcon} alt="Folder" width="100%" />
          </div>
          <div
            className={styles.upload}
            onClick={() => {
              fileInputRef.current.click()
            }}
          >
            <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
            <img src={UploadIcon} alt="Upload" width="100%" />
            <div>Upload</div>
          </div>
        </div>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.content}>
        <div className={styles.folderPanel}></div>
      </div>
    </div>
  )
}

export default Documents
