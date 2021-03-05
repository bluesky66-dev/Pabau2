import React from 'react'
import { render } from '@testing-library/react'

import FileUploder from './FileUploder'

describe('FileUploder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileUploder />)
    expect(baseElement).toBeTruthy()
  })
})
