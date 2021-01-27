import React, { FC, ReactNode } from 'react'
import { Radio } from 'antd'

export interface displayTypes {
  title: string
  icon: ReactNode
}

interface P {
  displayTypes?: displayTypes[]
  onChange?: (type?: string) => void
}

const GridVsList: FC<P> = ({ displayTypes, onChange }) => {
  const selectedType = (e) => {
    onChange?.(e.target.value)
  }

  return (
    <Radio.Group defaultValue={displayTypes?.[0].title} onChange={selectedType}>
      {displayTypes?.map((display) => (
        <Radio.Button
          value={display.title}
          key={display.title}
          style={{ marginRight: 16 }}
        >
          {display.icon}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}

export default GridVsList
