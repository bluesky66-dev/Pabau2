import { render } from '@testing-library/react'
import React from 'react'
import RightSidebar from './RightSidebar'

describe('RightSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightSidebar />)
    expect(baseElement).toBeTruthy()
  })
})
