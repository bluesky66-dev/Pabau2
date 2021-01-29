import React, { useState } from 'react'
import Slider from './Slider'
import { SliderProps } from './Slider'

const handleStyle = {
  backgroundColor: '#65CD98',
  borderColor: '#65CD98',
  width: '16px',
  height: '16px',
  marginTop: '-6px',
}

export default {
  component: Slider,
  title: 'Basics/Slider',
  args: {
    title: 'Logo size',
    disabled: false,
    handleStyle: handleStyle,
    trackStyle: {
      backgroundColor: '#65CD98',
    },
  },
  argTypes: {
    title: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
}

export const SliderStory = ({ ...args }: SliderProps): JSX.Element => {
  const [value, setValue] = useState<number>(0)
  const [calculatedValue, setCalculatedValue] = useState<string>('0 px')

  const handleChange = (value: number): void => {
    setValue(value)
    setCalculatedValue(value.toString() + ' px')
  }

  return (
    <div>
      <Slider
        {...args}
        title={args.title}
        value={value}
        onChange={handleChange}
        calculatedValue={calculatedValue}
      />
    </div>
  )
}
