import React from 'react'
import { render } from '@testing-library/react'

import VersionHistory from './VersionHistory'

describe('VersionHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VersionHistory />)
    expect(baseElement).toBeTruthy()
  })
})
