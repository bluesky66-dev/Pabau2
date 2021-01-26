import React, { useState } from 'react'
import { StopOutlined } from '@ant-design/icons'

import styles from './Background.module.less'

export interface listType {
  name: string
  color: string
}

export interface BackgroundProps {
  list?: listType[]
  onChange?: (name: string) => void
}
/* eslint-disable-next-line */

export function Background(props: BackgroundProps): JSX.Element {
  const [selected, setSelected] = useState<string>()

  const { list } = props

  const handleChange = (name: string) => {
    setSelected(name)
    props.onChange?.(name)
  }

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.title}>Background Colour</div>
      <div className={styles.listWrapper}>
        {list &&
          list.length > 0 &&
          list.map((thread, index) => {
            return (
              <div key={index} className={styles.list}>
                <div
                  style={{ background: thread.color }}
                  className={
                    selected === thread.name ? `${styles.box} ${styles.selectedBox}` : styles.box
                  }
                  onClick={() => handleChange(thread.name)}
                >
                  {thread.name === 'None' && <StopOutlined className={styles.noneIcon} />}
                </div>
                <p className={styles.name}>{thread.name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Background
