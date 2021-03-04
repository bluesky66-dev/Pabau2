import { render } from '@testing-library/react'
import React from 'react'
import MedicalFormBuilder from './MedicalFormBuilder'

describe('MedicalFormBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MedicalFormBuilder previewData="" />)
    expect(baseElement).toBeTruthy()
  })
})
