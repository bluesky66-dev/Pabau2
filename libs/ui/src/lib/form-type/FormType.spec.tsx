import React from 'react'
import { render } from '@testing-library/react'

import FormType from './FormType'

const setting = {
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

describe('FormType', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormType setting={setting} onChangeSetting={(val) => val} />
    )
    expect(baseElement).toBeTruthy()
  })
})
