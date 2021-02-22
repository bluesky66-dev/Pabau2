import React from 'react'
import { render } from '@testing-library/react'

import ProductImage from './ProductImage'

describe('ProductImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductImage />)
    expect(baseElement).toBeTruthy()
  })
})
