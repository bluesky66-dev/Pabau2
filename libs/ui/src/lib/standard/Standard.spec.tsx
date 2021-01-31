import React from 'react'
import { render } from '@testing-library/react'

describe('Standard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div />)
    expect(baseElement).toBeTruthy()
  })
})
