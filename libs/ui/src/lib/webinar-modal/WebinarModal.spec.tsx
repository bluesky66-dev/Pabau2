import React from 'react'
import { render } from '@testing-library/react'

import WebinarModal from './WebinarModal'

describe('WebinarModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebinarModal />)
    expect(baseElement).toBeTruthy()
  })
})
