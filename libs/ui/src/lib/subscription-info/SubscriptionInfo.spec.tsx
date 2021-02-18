import React from 'react'
import { render } from '@testing-library/react'

import SubscriptionInfo from './SubscriptionInfo'

describe('SubscriptionInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubscriptionInfo />)
    expect(baseElement).toBeTruthy()
  })
})
