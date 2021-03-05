import React from 'react'
import { render } from '@testing-library/react'

import CustomProgress from './CustomProgress'

import {
  percent,
  rest,
  labelPercent,
  labelRest,
  colorPercent,
  colorRest,
} from './data'

describe('CustomProgress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CustomProgress
        percent={percent}
        rest={rest}
        labelPercent={labelPercent}
        labelRest={labelRest}
        colorPercent={colorPercent}
        colorRest={colorRest}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
