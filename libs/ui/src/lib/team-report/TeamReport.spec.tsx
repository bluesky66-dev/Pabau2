import React from 'react'
import { render } from '@testing-library/react'

import { TeamReport } from './TeamReport'

describe('TeamReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamReport source={[]} columns={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
