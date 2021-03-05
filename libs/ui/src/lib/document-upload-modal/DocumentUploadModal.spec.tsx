import React from 'react'
import { render } from '@testing-library/react'

import DocumentUploadModal from './DocumentUploadModal'

describe('DocumentUploadModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocumentUploadModal />)
    expect(baseElement).toBeTruthy()
  })
})
