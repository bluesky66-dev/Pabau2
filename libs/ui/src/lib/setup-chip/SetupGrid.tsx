import React, { useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import Link from 'next/link'

import styles from './SetupChip.module.less'

const { Panel } = Collapse

export interface SubDataTitle {
  title: string
  data: string[]
  href?: string
}

export interface SetupGridProps {
  image: string
  title: string
  subDataTitles: SubDataTitle[]
  isExpand?: boolean
  expandTitle?: SubDataTitle[]
}

export function SetupGrid(props: SetupGridProps): JSX.Element {
  const { image, title, subDataTitles, expandTitle, isExpand } = props
  const [data, setData] = useState<SubDataTitle[]>(subDataTitles)
  const [expand, setExpand] = useState<boolean>(isExpand ?? false)

  const onExpandClick = () => {
    if (expandTitle) {
      setData([...subDataTitles, ...expandTitle])
      setExpand(false)
    }
  }

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.imgWrap}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.listDetails}>
        <div className={styles.listItem}>{title}</div>
        {data.length > 0 &&
          data.map((subTitle, index) => {
            return subTitle.data.length > 0 ? (
              <Collapse accordion key={index}>
                <Panel
                  header={
                    <div key={index} className={styles.subList}>
                      <span>{subTitle.title}</span>
                      <RightOutlined />
                    </div>
                  }
                  key={index}
                  showArrow={false}
                  className={styles.collapsePanel}
                >
                  {subTitle.data.map((thread, index) => {
                    return (
                      <div key={index} className={styles.panelItem}>
                        <span>{thread}</span>
                      </div>
                    )
                  })}
                </Panel>
              </Collapse>
            ) : (
              <div key={index} className={styles.listItem}>
                {subTitle.href ? (
                  <Link href={subTitle.href}>
                    <span>{subTitle.title}</span>
                  </Link>
                ) : (
                  <span>{subTitle.title}</span>
                )}
              </div>
            )
          })}
        {expand && (
          <div className={styles.listItem} onClick={onExpandClick}>
            <b>Expand</b>
          </div>
        )}
      </div>
    </div>
  )
}

export default SetupGrid
