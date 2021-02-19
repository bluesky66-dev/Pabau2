import React from 'react'
import { render } from '@testing-library/react'

import QuestionBankModal from './QuestionBankModal'

describe('QuestionBankModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionBankModal />)
    expect(baseElement).toBeTruthy()
  })
})
