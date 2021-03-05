import React, { FC } from 'react'
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars'

export const CustomScrollbar: FC<ScrollbarProps> = ({ ...props }) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#C9C9D1',
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
  }

  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  )
}
