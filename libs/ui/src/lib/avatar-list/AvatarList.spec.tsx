import React from 'react'
import { render } from '@testing-library/react'

import AvatarList from './AvatarList'

describe('AvatarList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AvatarList />)
    expect(baseElement).toBeTruthy()
  })
})
