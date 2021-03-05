import React from 'react'

import styles from './SpotlightButtons.module.less'
type ReactElementLike =
  | React.FunctionComponent<{ className?: string }>
  | React.ComponentClass<{ className?: string }, unknown>
  | React.FC<unknown>
  | React.ComponentClass<unknown, unknown>
/* eslint-disable-next-line */
export interface SpotlightButtonsProps {
  buttons: {
    name: string
    icon: ReactElementLike
    badge?: ReactElementLike
    href?: string // exclusive with onClick
    onClick?: (e: MouseEvent) => void // exclusive with href
  }[]
}

export const SpotlightButtons: React.FC<SpotlightButtonsProps> = (
  props: SpotlightButtonsProps
) => {
  return (
    <div className={styles.SpotlightButton}>
      {props.buttons.map((button) => {
        const { icon: Icon, name, badge: Badge } = button
        // this <a> tag can be swapped out later to effect the functionality of the component
        return (
          <a
            key={button.name}
            href={button.href}
            className={styles.ButtonWrapper}
          >
            <div className={styles.Button}>
              <span className={styles.IconWrapper}>
                <Icon />
              </span>
              <div className={styles.InlineContent}>
                <h2>{name}</h2>
                {Badge && <Badge></Badge>}
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SpotlightButtons
