import React from 'react'
import { render } from '@testing-library/react'

import CreateTemplateModal from './CreateTemplateModal'

describe('CreateTemplateModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateTemplateModal />)
    expect(baseElement).toBeTruthy()
  })
})
