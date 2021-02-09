import React from 'react'
import { render } from '@testing-library/react'

import MedicalFormPreview from './MedicalFormPreview'

describe('MedicalFormPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MedicalFormPreview
        desktopTemp=""
        appTemp=""
        step={1}
        stepData={[]}
        user={{ name: 'a', src: 'a', date: 'a', tags: ['a'] }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
