import React from 'react'
import { PabauPlus } from '../badge/Badge'
import styles from './SpotlightButtons.module.less'
type ReactElementLike =
  | React.FunctionComponent<{ className?: string }>
  | React.ComponentClass<{ className?: string }, unknown>
  | React.FC<unknown>
  | React.ComponentClass<unknown, unknown>

export interface SpotlightButtonsProps {
  buttons: {
    name: string
    icon: ReactElementLike
    badge?: boolean
    href?: string
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
                {Badge && <PabauPlus label="plus" />}
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SpotlightButtons
