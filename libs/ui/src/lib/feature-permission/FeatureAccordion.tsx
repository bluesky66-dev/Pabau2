import React, { FC, useState } from 'react'
import { Collapse } from 'antd'
import { Button } from '@pabau/ui'
import styles from './FeaturePermission.module.less'
import DownArrowIcon from '../accordion/DownArrow.svg'
import UpArrowIcon from '../accordion/UpArrow.svg'

const { Panel } = Collapse

export interface AccordionProps {
  headerLabel: string
  subTitle: string
}

export const FeatureAccordion: FC<AccordionProps> = ({
  headerLabel,
  subTitle,
  ...rest
}) => {
  const [accordionState, setAccordionState] = useState(false)

  const customArrow = () => {
    return (
      <div>
        <Button
          type="default"
          size="large"
          shape="circle"
          className={styles.arrowIcon}
        >
          <img
            src={accordionState ? UpArrowIcon : DownArrowIcon}
            alt="CaretDown"
            width="100%"
          />
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.mainCollapseDiv}>
      <Collapse
        defaultActiveKey={[]}
        onChange={() => {
          setAccordionState((accordionState) => !accordionState)
        }}
        expandIcon={customArrow}
        ghost={true}
      >
        <Panel
          header={
            <div className={styles.header}>
              <p className={styles.headerText}>{headerLabel}</p>
              <span className={styles.subTitle}>{subTitle}</span>
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

export default FeatureAccordion
