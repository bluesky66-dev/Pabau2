import React from 'react'
import { render } from '@testing-library/react'

import NewsletterDelivery from './NewsletterDelivery'

describe('NewsletterDelivery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsletterDelivery />)
    expect(baseElement).toBeTruthy()
  })
})
