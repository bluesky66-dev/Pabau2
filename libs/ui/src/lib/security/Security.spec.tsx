import React from 'react'
import { render } from '@testing-library/react'

import SecurityScore from './SecurityScore'

describe('Security', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecurityScore percent={0} />)
    expect(baseElement).toBeTruthy()
  })
})
