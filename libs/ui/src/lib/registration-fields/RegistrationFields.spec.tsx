import React from 'react'
import { render } from '@testing-library/react'

import RegistrationFields from './RegistrationFields'

describe('RegistrationFields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegistrationFields />)
    expect(baseElement).toBeTruthy()
  })
})
