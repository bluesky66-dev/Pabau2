import React, { FC, useState } from 'react'
import { Collapse } from 'antd'
import { Button } from '@pabau/ui'
import styles from './Accordion.module.less'
import DownArrowIcon from './DownArrow.svg'
import UpArrowIcon from './UpArrow.svg'
import FolderIcon from './FolderIcon.svg'
import OpenFolderIcon from './OpenFolder.svg'

const { Panel } = Collapse

/* eslint-disable-next-line */
export interface AccordionProps {
  headerLabel: string
}

export const Accordion: FC<AccordionProps> = ({ headerLabel, ...rest }) => {
  const [accordionState, setAccordionState] = useState(false)

  const customArrow = () => {
    return (
      <div>
        <Button type="default" size="large" className={styles.arrowIcon}>
          <img
            src={accordionState ? UpArrowIcon : DownArrowIcon}
            alt="CaretDown"
            width="100%"
          />
        </Button>
      </div>
    )
  }

  const callback = () => {
    setAccordionState(!accordionState)
  }

  return (
    <div className={styles.mainCollapseDiv}>
      <Collapse
        defaultActiveKey={[]}
        onChange={callback}
        expandIcon={customArrow}
        ghost={true}
      >
        <Panel
          header={
            <div className={styles.header}>
              <div className={styles.folderIcon}>
                <img
                  src={accordionState ? OpenFolderIcon : FolderIcon}
                  alt="Folder"
                />
              </div>
              <div className={styles.headerText}>{headerLabel}</div>
            </div>
          }
          key="1"
        >
          <div className={styles.panel}>{rest.children}</div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Accordion
