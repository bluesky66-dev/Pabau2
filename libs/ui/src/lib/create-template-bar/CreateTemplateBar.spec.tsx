import React from 'react'
import { render } from '@testing-library/react'

import CreateTemplateBar from './CreateTemplateBar'

describe('CreateTemplateBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTemplateBar />)
    expect(baseElement).toBeTruthy()
  })
})
