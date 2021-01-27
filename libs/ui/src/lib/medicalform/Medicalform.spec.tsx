import { render } from '@testing-library/react'
import React from 'react'
import MedicalForm from './MedicalForm'

describe('Medicalform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalForm />)
    expect(baseElement).toBeTruthy()
  })
})
