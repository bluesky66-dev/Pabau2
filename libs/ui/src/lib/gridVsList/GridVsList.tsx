import React, { ReactNode } from 'react'
import { Radio } from 'antd'

export interface displayTypes {
  title: string
  icon: ReactNode
}

export interface GridVsListProps {
  displayTypes?: displayTypes[]
  onChange?: (type?: string) => void
}

export function GridVsList(props: GridVsListProps): JSX.Element {
  const selectedType = (e) => {
    props.onChange?.(e.target.value)
  }

  return (
    <Radio.Group
      defaultValue={props.displayTypes?.[0].title}
      onChange={selectedType}
    >
      {props.displayTypes?.map((display) => (
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
