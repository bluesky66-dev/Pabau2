import React, { useState } from 'react'
import Slider from './Slider'

export default {
  component: Slider,
  title: 'Basics/Slider',
}

export function SliderStory(): JSX.Element {
  const [value, setValue] = useState(0)
  const [calculatedValue, setCalculatedValue] = useState('0 px')

  const handleChange = (value: number): void => {
    setValue(value)
    setCalculatedValue(value.toString() + ' px')
  }

  return (
    <div>
      <Slider
        title={'Logo size'}
        value={value}
        onChange={handleChange}
        calculatedValue={calculatedValue}
      />
    </div>
  )
}
