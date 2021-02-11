import React, { FC, useState } from 'react'
import { CheckCircleFilled } from '@ant-design/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FontIcon.module.less'
export interface FontIconProps {
  max?: number
  height?: number
  fontSize?: number
  selectedIcon?: string
  onIconSelected(val): void
}
export const FontIcon: FC<FontIconProps> = ({
  max = 100,
  height = 300,
  selectedIcon = '',
  onIconSelected,
}) => {
  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .slice(0, max)
    .map((icon) => Icons[icon])
  library.add(...iconList)
  const [activate, setActivate] = useState(selectedIcon)

  return (
    <div className={styles.iconPanel} style={{ height: height + 'px' }}>
      {iconList
        .filter((icon, index) => icon.iconName !== 'font-awesome-logo-full')
        .map((icon, index) => {
          return (
            <div
              key={index}
              className={
                activate === icon.iconName
                  ? styles.iconItemActive
                  : styles.iconItem
              }
              onClick={() => {
                let selectedIcon = icon.iconName
                if (activate === icon.iconName) {
                  selectedIcon = ''
                }
                setActivate(selectedIcon)
                onIconSelected(selectedIcon)
              }}
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
