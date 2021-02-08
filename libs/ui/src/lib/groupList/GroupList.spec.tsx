import React from 'react'
import { render } from '@testing-library/react'

import GroupList from './GroupList'

describe('AllChatView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GroupList />)
    expect(baseElement).toBeTruthy()
  })
})
