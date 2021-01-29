import React from 'react'
import { render } from '@testing-library/react'

import CustomModal from './CustomModal'

describe('BSecuritytool', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomModal />)
    expect(baseElement).toBeTruthy()
  })
})
