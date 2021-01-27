import { render } from '@testing-library/react'
import React from 'react'
import Rightsidebar from './Rightsidebar'

describe('Rightsidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rightsidebar />)
    expect(baseElement).toBeTruthy()
  })
})
