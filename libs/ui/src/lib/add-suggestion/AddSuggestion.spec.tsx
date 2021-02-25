import React from 'react'
import { render } from '@testing-library/react'

import AddSuggestion from './AddSuggestion'

describe('AddSuggestion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddSuggestion />)
    expect(baseElement).toBeTruthy()
  })
})
