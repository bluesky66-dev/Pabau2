import React from 'react'
import { render } from '@testing-library/react'

import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Newsletter />)
    expect(baseElement).toBeTruthy()
  })
})
