import React from 'react'
import { render } from '@testing-library/react'

import Wstepper from './Wstepper'

describe('Wstepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wstepper active={0} data={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
