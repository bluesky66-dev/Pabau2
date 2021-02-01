import React from 'react'
import { render } from '@testing-library/react'

import QuestionBank from './QuestionBank'

describe('QuestionBank', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionBank />)
    expect(baseElement).toBeTruthy()
  })
})
