import React from 'react'
import { render } from '@testing-library/react'

import NotificationBanner from './NotificationBanner'

describe('NotificationBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationBanner />)
    expect(baseElement).toBeTruthy()
  })
})
