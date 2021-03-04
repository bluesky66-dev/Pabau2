import React, { FC } from 'react'
import styles from './LetterBadge.module.less'

export enum LetterBadgeColors {
  blue = '#54B2D3',
  green = '#65CD98',
  yellow = '#FAAD14',
  purple = '#7B61E2',
}

interface P {
  children: string
  color: LetterBadgeColors
}
export const LetterBadge: FC<P> = ({ children, color }) => {
  return (
    <span style={{ backgroundColor: color }} className={styles.letterBadge}>
      {children}
    </span>
  )
}
