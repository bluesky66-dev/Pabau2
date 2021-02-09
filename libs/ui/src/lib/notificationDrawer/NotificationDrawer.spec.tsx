import React from 'react'
import { render } from '@testing-library/react'

import NotificationDrawer from './NotificationDrawer'

describe('NotificationDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationDrawer />)
    expect(baseElement).toBeTruthy()
  })
})
