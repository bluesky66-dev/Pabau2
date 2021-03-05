import React from 'react'
import { render } from '@testing-library/react'

describe('ChooseModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div />)
    expect(baseElement).toBeTruthy()
  })
})
