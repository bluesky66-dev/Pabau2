import React from 'react'
import { render } from '@testing-library/react'

import MedicalFilter from './MedicalFilter'
const defaultFilter = {
  language: 'English (UK)',
  status: 'active',
  formtype: {
    medicalHistory: false,
    consent: false,
    treatmentForm: false,
    epaper: false,
    presciption: false,
    labForm: false,
  },
}

describe('MedicalFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MedicalFilter filter={defaultFilter} onApply={(val) => val} />
    )
    expect(baseElement).toBeTruthy()
  })
})
