import React from 'react'
import { render } from '@testing-library/react'

import CopyEmbeddCodeModal from './CopyEmbeddCodeModal'

describe('CopyEmbeddCodeModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyEmbeddCodeModal />)
    expect(baseElement).toBeTruthy()
  })
})
