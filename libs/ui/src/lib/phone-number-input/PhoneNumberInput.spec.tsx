import React from 'react'
import { render } from '@testing-library/react'

import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneNumberInput onChange={(val) => val} />)
    expect(baseElement).toBeTruthy()
  })
})
