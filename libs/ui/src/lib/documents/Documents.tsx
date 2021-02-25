import React, { FC, useRef } from 'react'
import styles from './Documents.module.less'
import { Button, Checkbox, Accordion, DotButton } from '@pabau/ui'
import FileIcon from './FileIcon.svg'
import {
  DeleteOutlined,
  FileOutlined,
  DownloadOutlined,
  FolderAddOutlined,
} from '@ant-design/icons'
import { Select } from 'antd'
const { Option } = Select

interface Files {
  key: string
  status: string
  name: string
  addedByDate: string
  size: string
}
interface Folders {
  name: string
  files: Files[]
}

/* eslint-disable-next-line */
export interface DocumentsProps {
  headingLabel: string
  folders: Folders[]
}

export const Documents: FC<DocumentsProps> = ({
  headingLabel,
  folders,
  ...rest
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const chooseFile = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click()
    }
  }

  const DotMenuOptions = [
    {
      key: 1,
      icon: <FileOutlined />,
      label: 'Rename',
    },
    {
      key: 2,
      icon: <DeleteOutlined />,
      label: 'Delete',
    },
  ]

  return (
    <div className={styles.documentsMain}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <h3>{headingLabel}</h3>
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
            <Button
              type="default"
              size="large"
              className={styles.addFolder}
              icon={<FolderAddOutlined />}
            ></Button>
          </div>
          <div onClick={chooseFile}>
            <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
            <Button
              type="default"
              size="large"
              className={styles.upload}
              icon={<DownloadOutlined />}
            >
              {/* <img src={UploadIcon} alt="Upload" width="100%" /> */}
              <div>Upload</div>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.seperator}></div>
      <div className={styles.content}>
        <div className={styles.folderPanel}>
          {folders &&
            folders.length > 0 &&
            folders.map((folder, index) => (
              <div key={`folder${index}`}>
                <Accordion headerLabel={folder.name}>
                  {folder.files.length > 0 &&
                    folder.files.map((file, ind) => (
                      <div
                        className={styles.subFolderDiv}
                        key={`file${ind * index}`}
                      >
                        <div className="detailsWithControls">
                          <div className="checkBoxDiv">
                            <Checkbox className="checkBox" />
                          </div>
                          <div className="details">
                            <div className="fileIcon">
                              <img src={FileIcon} alt="FileIcon" width="100%" />
                            </div>
                            <div className="fileDetails">
                              <div className="nameStatus">
                                <span className="name">{file.name}</span>
                                <div className="seperator"></div>
                                <span className="status">{file.status}</span>
                              </div>
                              <div className="dateSize">
                                <span className="date">{file.addedByDate}</span>
                                <div className="seperator"></div>
                                <span className="size">
                                  {file.size && `(${file.size})`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dottedMenu">
                          <div>
                            <DotButton menuList={DotMenuOptions} />
                          </div>
                        </div>
                      </div>
                    ))}
                </Accordion>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Documents
