import React from 'react'
import { render } from '@testing-library/react'

import CreateRoom from './CreateRoom'

describe('CreateRoom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CreateRoom
        visible={true}
        employees={[]}
        rooms={[]}
        equipment={[]}
        locations={[]}
        onClose={() => {
          return
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
