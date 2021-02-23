import React, { FC, ReactNode, useState } from 'react'
import { Collapse } from 'antd'
import { Button } from '@pabau/ui'
import styles from './Accordion.module.less'
import ArrowIcon from './assets/DownArrow.svg'
import FolderIcon from './assets/FolderIcon.svg'
import OpenFolderIcon from './assets/OpenFolder.svg'

const { Panel } = Collapse

/* eslint-disable-next-line */
export interface AccordionProps {
  headerLabel: ReactNode | number | string
  folderIconShow?: boolean
  folderIcon?: ReactNode | string | number
  dropDownIconShow?: boolean
  dropDownIcon?: ReactNode | string | number
  isDefaultOpen?: boolean
}

export const Accordion: FC<AccordionProps> = ({
  headerLabel,
  folderIcon,
  folderIconShow = true,
  dropDownIcon,
  dropDownIconShow = true,
  isDefaultOpen = false,
  ...rest
}) => {
  const [accordionState, setAccordionState] = useState(isDefaultOpen || false)

  const customArrow = () => {
    return (
      <div>
        {dropDownIconShow &&
          (dropDownIcon ? (
            <div>
              <div
                className={`arrow ${accordionState && 'rotated'}`}
                style={{ margin: '10px' }}
              >
                {dropDownIcon}
              </div>
            </div>
          ) : (
            <Button
              type="default"
              size="large"
              shape="circle"
              className={styles.arrowIcon}
            >
              <img
                src={ArrowIcon}
                alt="CaretDown"
                width="100%"
                className={`arrow ${accordionState && 'rotated'}`}
              />
            </Button>
          ))}
      </div>
    )
  }

  return (
    <div className={styles.mainCollapseDiv}>
      <Collapse
        defaultActiveKey={isDefaultOpen ? ['true'] : []}
        onChange={() => {
          setAccordionState((accordionState) => !accordionState)
        }}
        expandIcon={customArrow}
        ghost={true}
      >
        <Panel
          header={
            <div className={styles.header}>
              {folderIconShow && (
                <div className={styles.folderIcon}>
                  {folderIcon ? (
                    folderIcon
                  ) : (
                    <img
                      src={accordionState ? OpenFolderIcon : FolderIcon}
                      alt="Folder"
                    />
                  )}
                </div>
              )}
              <div className={styles.headerText}>{headerLabel}</div>
            </div>
          }
          key="true"
        >
          <div className={styles.panel}>{rest.children}</div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Accordion
