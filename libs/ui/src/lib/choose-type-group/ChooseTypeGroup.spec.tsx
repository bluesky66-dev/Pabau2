import React from 'react'
import { render } from '@testing-library/react'

import ChooseTypeGroup from './ChooseTypeGroup'

describe('ChooseTypeGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChooseTypeGroup />)
    expect(baseElement).toBeTruthy()
  })
})
