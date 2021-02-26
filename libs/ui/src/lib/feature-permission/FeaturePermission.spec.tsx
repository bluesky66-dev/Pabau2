import React from 'react'
import { render } from '@testing-library/react'

import FeaturePermission from './FeaturePermission'

describe('FeaturePermission', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturePermission />)
    expect(baseElement).toBeTruthy()
  })
})
