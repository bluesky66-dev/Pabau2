import React from 'react'
import { render } from '@testing-library/react'

import InstallationModal from './InstallationModal'

describe('InstallationModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InstallationModal
        logo={''}
        title={'AAA'}
        description={
          'Software system that helps you see your cashflow in real-time with online accounts & banking\n'
        }
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
