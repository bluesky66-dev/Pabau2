import React from 'react'
import { render } from '@testing-library/react'

import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Pagination showingRecords={10} total={50} />
    )
    expect(baseElement).toBeTruthy()
  })
})
