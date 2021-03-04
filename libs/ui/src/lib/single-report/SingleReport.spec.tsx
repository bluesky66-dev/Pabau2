import React from 'react'
import { render } from '@testing-library/react'
import { SingleReport } from '@pabau/ui'

describe('SingleReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleReport />)
    expect(baseElement).toBeTruthy()
  })
})
