import React from 'react'
import { render } from '@testing-library/react'

import Formtype from './Formtype'

const setting = {
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

describe('Formtype', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Formtype setting={setting} onChangeSetting={(val) => val} />
    )
    expect(baseElement).toBeTruthy()
  })
})
