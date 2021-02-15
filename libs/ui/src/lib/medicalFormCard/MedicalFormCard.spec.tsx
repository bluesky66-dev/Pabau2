import React from 'react'
import { render } from '@testing-library/react'

import MedicalFormCard from './MedicalFormCard'

describe('MedicalFormCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalFormCard />)
    expect(baseElement).toBeTruthy()
  })
})
