import React from 'react'
import { render } from '@testing-library/react'

import CommunicationFilter from './CommunicationFilter'

describe('CommunicationFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommunicationFilter />)
    expect(baseElement).toBeTruthy()
  })
})
