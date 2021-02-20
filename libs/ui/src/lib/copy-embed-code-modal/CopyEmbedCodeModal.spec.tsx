import React from 'react'
import { render } from '@testing-library/react'

import CopyEmbedCodeModal from './CopyEmbedCodeModal'

describe('CopyEmbedCodeModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyEmbedCodeModal />)
    expect(baseElement).toBeTruthy()
  })
})
