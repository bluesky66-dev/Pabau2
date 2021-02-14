import React from 'react'
import { render } from '@testing-library/react'

import AddGroupModal from './AddGroupModal'

describe('AddGroupModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddGroupModal />)
    expect(baseElement).toBeTruthy()
  })
})
