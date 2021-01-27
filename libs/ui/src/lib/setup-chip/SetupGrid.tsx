import React, { useState } from 'react'

import styles from './SetupChip.module.less'

/* eslint-disable-next-line */
export interface SetupGridProps {
  image: string
  title: string
  subDataTitles: string[]
  isExpand?: boolean
  expandTitle?: string[]
}

export function SetupGrid(props: SetupGridProps): JSX.Element {
  const { image, title, subDataTitles, expandTitle, isExpand } = props
  const [data, setData] = useState<string[]>(subDataTitles)
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
            return (
              <div className={styles.listItem} key={index}>
                {subTitle}
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
