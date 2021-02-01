import React from 'react'
import { render } from '@testing-library/react'

import ClientNotification from './ClientNotification'

describe('ClientNotification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientNotification />)
    expect(baseElement).toBeTruthy()
  })
})
