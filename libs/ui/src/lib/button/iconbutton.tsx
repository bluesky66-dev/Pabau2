import * as Icons from '@ant-design/icons'
import { Button as AntButton } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'
import React, { FC, HTMLProps } from 'react'

interface P extends NativeButtonProps {
  // type?: ButtonTypes
  disabled?: boolean
  color?: string
  backgroundColor?: string
  style?: HTMLProps<HTMLElement>['style']
  className?: string
  icons?: string
}

const IconButton: FC<P> = ({
  className,
  disabled,
  color,
  backgroundColor,
  children,
  style,
  icons,
  ...props
}) => {
  const iconList = Object.keys(Icons)
    .filter((iconName) => iconName === icons)
    .map((iconName) => {
      return Icons[iconName]
    })
  return (
    <AntButton
      style={{ ...style, ...{ backgroundColor: backgroundColor } }}
      disabled={disabled}
      color={color}
      className={className}
      {...props}
    >
      {iconList.map((item) => {
        return item.render()
      })}
      {children}
    </AntButton>
  )
}

export default IconButton
