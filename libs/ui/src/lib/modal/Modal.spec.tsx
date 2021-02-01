import React from 'react'
import { render } from '@testing-library/react'

import Modal from './basicmodal'
import ConfirmModal from './confirmmodal'

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal />)
    expect(baseElement).toBeTruthy()
  })
})

describe('ConfirmModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConfirmModal />)
    expect(baseElement).toBeTruthy()
  })
})
