import React, { FC, useState } from 'react'
import ColorPicker from './ColorPicker'

export default {
  component: ColorPicker,
  title: 'UI/ColorPicker',
  args: { heading: 'Background color', isDarkColor: false },
  argsTypes: {
    heading: { control: { type: 'text' } },
    isDarkColor: { control: { type: 'boolean' } },
  },
}

interface P {
  heading: string
  isDarkColor: boolean
}

export const DefaultColorPicker: FC<P> = ({ heading, isDarkColor }) => {
  const [selectColor, setSelectColor] = useState('')
  const [hoverColor, setHoverolor] = useState('')
  return (
    <div style={{ width: '344px' }}>
      <ColorPicker
        heading={heading}
        selectedColor=""
        onSelected={(val) => setSelectColor(val)}
        onHover={(val) => setHoverolor(val)}
        onLeave={(val) => setHoverolor('')}
        isDarkColor={isDarkColor}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectColor,
        }}
      >
        Selected Color
      </div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: hoverColor }}
      >
        Hover Color
      </div>
    </div>
  )
}
