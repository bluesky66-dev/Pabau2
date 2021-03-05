import React from 'react'
import { render } from '@testing-library/react'

import SearchTags from './SearchTags'

describe('SearchTags', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchTags
        title="title"
        description="description"
        items={[]}
        itemType=""
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
