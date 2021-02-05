import React from 'react'
import { render } from '@testing-library/react'

import ModalWithImage from './ModalWithImage'

describe('ModalWithImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalWithImage />)
    expect(baseElement).toBeTruthy()
  })
})
