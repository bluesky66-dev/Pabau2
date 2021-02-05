import React from 'react'
import { render } from '@testing-library/react'

import NotificationMessages from './NotificationMessages'

describe('NotificationMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationMessages />)
    expect(baseElement).toBeTruthy()
  })
})
