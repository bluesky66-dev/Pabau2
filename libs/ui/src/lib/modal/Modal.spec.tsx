import React from 'react'
import { render } from '@testing-library/react'

import Modal from './basicmodal'

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal />)
    expect(baseElement).toBeTruthy()
  })
})
