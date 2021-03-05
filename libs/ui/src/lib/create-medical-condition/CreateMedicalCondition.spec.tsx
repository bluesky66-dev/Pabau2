import React from 'react'
import { render } from '@testing-library/react'

import CreateMedicalCondition from './CreateMedicalCondition'

describe('CreateMedicalCondition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateMedicalCondition />)
    expect(baseElement).toBeTruthy()
  })
})
