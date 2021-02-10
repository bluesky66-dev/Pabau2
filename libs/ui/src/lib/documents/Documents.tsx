import React, { FC, useRef } from 'react'
import styles from './Documents.module.less'
import { Button, Checkbox, Accordion, DotButton } from '@pabau/ui'
import FolderIcon from './Folder.svg'
import UploadIcon from './Upload.svg'
import FileIcon from './FileIcon.svg'
import { Select } from 'antd'

const { Option } = Select

/* eslint-disable-next-line */
export interface DocumentsProps {}

export const Documents: FC<DocumentsProps> = ({ ...props }) => {
  const fileInputRef = useRef(null)

  const DotMenuIcon = (
    <div>
      <img src={FileIcon} />
    </div>
  )
  const DotMenuOptions = [
    {
      key: 1,
      icon: DotMenuIcon,
      label: 'Rename',
      onClick: () => {},
    },
    {
      key: 2,
      icon: DotMenuIcon,
      label: 'Delete',
      onClick: () => {},
    },
  ]

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
          <div>
            <Button type="default" size="large" className={styles.addFolder}>
              <img src={FolderIcon} alt="Folder" width="100%" />
            </Button>
          </div>
          <div
            onClick={() => {
              fileInputRef.current.click()
            }}
          >
            <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
            <Button type="default" size="large" className={styles.upload}>
              <img src={UploadIcon} alt="Upload" width="100%" />
              <div>Upload</div>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.content}>
        <div className={styles.folderPanel}>
          <div>
            <Accordion headerLabel="Resumes and Applications (0)">
              <div className={styles.subFolderDiv}>
                <div className="detailsWithControls">
                  <div className="checkBoxDiv">
                    <Checkbox
                      className="checkBox"
                      onChange={(res) => {
                        console.log('RES: ', res)
                      }}
                    />
                  </div>
                  <div className="details">
                    <div className="fileIcon">
                      <img src={FileIcon} alt="FileIcon" width="100%" />
                    </div>
                    <div className="fileDetails">
                      <div className="nameStatus">
                        <span className="name">Company Handbook.pdf</span>
                        <div className="seperator"></div>
                        <span className="status">Shared</span>
                      </div>
                      <div className="dateSize">
                        <span className="date">
                          Added 07/09/2020 by Charlotte Abbott
                        </span>
                        <div className="seperator"></div>
                        <span className="size">(25.5 MB)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dottedMenu">
                  <DotButton menuList={DotMenuOptions} />
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
