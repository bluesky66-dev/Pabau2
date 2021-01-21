import React from 'react'
import { render } from '@testing-library/react'

import PasswordWithHelper from './PasswordWithHelper'

describe('PasswordWithHelper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PasswordWithHelper />)
    expect(baseElement).toBeTruthy()
  })
})
