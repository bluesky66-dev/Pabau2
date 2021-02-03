import React from 'react'
import { render } from '@testing-library/react'

import FullScreenReportModal from './FullScreenReportModal'

describe('FullScreenReportModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FullScreenReportModal />)
    expect(baseElement).toBeTruthy()
  })
})
