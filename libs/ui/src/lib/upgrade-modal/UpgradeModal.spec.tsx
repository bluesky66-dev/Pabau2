import React from 'react'
import { render } from '@testing-library/react'

import UpgradeModal from './UpgradeModal'

describe('UpgradeModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpgradeModal />)
    expect(baseElement).toBeTruthy()
  })
})
