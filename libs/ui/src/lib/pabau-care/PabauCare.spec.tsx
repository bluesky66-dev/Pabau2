import React from 'react'
import { render } from '@testing-library/react'
import PabauCare from './PabauCare'

describe('PabauCare', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PabauCare />)
    expect(baseElement).toBeTruthy()
  })
})
