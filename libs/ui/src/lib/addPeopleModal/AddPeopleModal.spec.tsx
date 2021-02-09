import React from 'react'
import { render } from '@testing-library/react'

import AddPeopleModal from './AddPeopleModal'

describe('AddPeopleModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddPeopleModal />)
    expect(baseElement).toBeTruthy()
  })
})
