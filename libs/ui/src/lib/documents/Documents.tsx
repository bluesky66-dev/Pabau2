import React, { FC, useRef } from 'react'
import styles from './Documents.module.less'
import { Button, Checkbox, Accordion, DotButton } from '@pabau/ui'
import FolderIcon from './Folder.svg'
import UploadIcon from './Upload.svg'
import FileIcon from './FileIcon.svg'
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
  const fileInputRef = useRef<HTMLDivElement>(null)

  const chooseFile = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click()
    }
  }

  const DotMenuIcon = (
    <div>
      <img src={FileIcon} alt="Icon" />
    </div>
  )
  const DotMenuOptions = [
    {
      key: 1,
      icon: DotMenuIcon,
      label: 'Rename',
      onClick: () => {
        console.log('RENAME CLICKED')
      },
    },
    {
      key: 2,
      icon: DotMenuIcon,
      label: 'Delete',
      onClick: () => {
        console.log('DELETE CLICKED')
      },
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
            <Button type="default" size="large" className={styles.addFolder}>
              <img src={FolderIcon} alt="Folder" width="100%" />
            </Button>
          </div>
          <div onClick={chooseFile}>
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
          {folders &&
            folders.length &&
            folders.map((folder, index) => (
              <div key={`folder${index}`}>
                <Accordion headerLabel={folder.name}>
                  {folder.files &&
                    folder.files.length &&
                    folder.files.map((file, ind) => (
                      <div
                        className={styles.subFolderDiv}
                        key={`file${ind * index}`}
                      >
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
                          <DotButton menuList={DotMenuOptions} />
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
