import React from 'react'
import { render } from '@testing-library/react'

import GridVsList from './GridVsList'

describe('GridVsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridVsList />)
    expect(baseElement).toBeTruthy()
  })
})
