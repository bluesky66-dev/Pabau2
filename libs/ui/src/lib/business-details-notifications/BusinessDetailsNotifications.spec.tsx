import React from 'react'
import { render } from '@testing-library/react'

import BusinessDetailsNotifications from './BusinessDetailsNotifications'

describe('BusinessDetailsNotifications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BusinessDetailsNotifications />)
    expect(baseElement).toBeTruthy()
  })
})
