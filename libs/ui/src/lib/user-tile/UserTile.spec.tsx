import React from 'react'
import { render } from '@testing-library/react'
import { UserTile } from '@pabau/ui'

import austin from '../../assets/images/users/austin.png'
const dummyUsers = [
  {
    name: 'Joseph',
    surname: 'Howard',
    title: 'Managing Director',
    img: austin,
    vacation: true,
    available: true,
    active: true,
  },
]

describe('UserTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UserTile
        name={dummyUsers[0].name}
        surname={dummyUsers[0].surname}
        title={dummyUsers[0].title}
        vacation={dummyUsers[0].vacation}
        available={dummyUsers[0].available}
        active={dummyUsers[0].active}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
