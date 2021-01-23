import { CheckCircleFilled } from '@ant-design/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { PropsWithChildren, useState } from 'react'
import styles from './FontIcon.module.less'

/* eslint-disable-next-line */
export interface FontIconProps {
  max?: number
}

export function FontIcon({ max }: PropsWithChildren<FontIconProps>) {
  const iconList = Object.keys(Icons)
    .slice(0, max)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon])
  library.add(...iconList)
  const [activate, setActivate] = useState('')
  return (
    <div className={styles.iconPanel}>
      {iconList
        .filter((icon, index) => icon.iconName !== 'font-awesome-logo-full')
        .map((icon, index) => {
          return (
            <div
              key={index}
              className={activate === icon.iconName ? styles.iconItemActive : styles.iconItem}
              onClick={() => setActivate(icon.iconName)}
            >
              {activate === icon.iconName && <CheckCircleFilled />}
              <FontAwesomeIcon size="2x" icon={icon.iconName} />
            </div>
          )
        })}
    </div>
  )
}

export default FontIcon
