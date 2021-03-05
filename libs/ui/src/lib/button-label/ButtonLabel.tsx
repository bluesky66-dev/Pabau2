import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './ButtonLabel.module.less'

interface P {
  text: string
  type?: 'success' | 'info' | 'danger' | 'warning'
  className?: string
  style?: HTMLProps<HTMLElement>['style']
}

export const ButtonLabel: FC<P> = ({
  type = 'success',
  text,
  className,
  style,
}) => {
  return (
    <label
      style={style}
      className={classNames(styles.labelWrapper, styles[type], className)}
    >
      {text}
    </label>
  )
}

export default ButtonLabel
