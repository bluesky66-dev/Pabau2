import React from 'react'
import { render } from '@testing-library/react'

import Menu from './Sidebar'

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Menu />)
    expect(baseElement).toBeTruthy()
  })
})
