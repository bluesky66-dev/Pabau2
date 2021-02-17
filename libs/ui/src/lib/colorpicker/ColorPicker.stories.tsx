import React, { FC, useState } from 'react'
import ColorPicker from './ColorPicker'

export default {
  component: ColorPicker,
  title: 'UI/ColorPicker',
  args: { heading: 'Background color' },
  argsTypes: {
    heading: { control: { type: 'text' } },
  },
}

interface P {
  heading: string
}

export const DefaultColorPicker: FC<P> = ({ heading }) => {
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
        defaultColor={'#ffffff'}
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
