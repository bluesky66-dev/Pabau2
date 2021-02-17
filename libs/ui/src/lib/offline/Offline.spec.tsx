import React from 'react'
import { render } from '@testing-library/react'

import Offline from './Offline'

describe('Offline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Offline />)
    expect(baseElement).toBeTruthy()
  })
})
