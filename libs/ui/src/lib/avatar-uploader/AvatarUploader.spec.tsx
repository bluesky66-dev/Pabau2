import React from 'react'
import { render } from '@testing-library/react'

import AvatarUploader from './AvatarUploader'

describe('AvatarUploader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarUploader />)
    expect(baseElement).toBeTruthy()
  })
})
