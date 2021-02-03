import React from 'react'
import { render } from '@testing-library/react'

import QuickCreate from './QuickCreate'

describe('QuickCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuickCreate />)
    expect(baseElement).toBeTruthy()
  })
})
