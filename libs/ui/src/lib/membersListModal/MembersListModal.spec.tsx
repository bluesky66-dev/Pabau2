import React from 'react'
import { render } from '@testing-library/react'

import MembersListModal from './MembersListModal'
import Alex from '../../assets/images/users/alex.png'
import Arya from '../../assets/images/users/arya.png'
import James from '../../assets/images/users/james.png'
import Austin from '../../assets/images/users/austin.png'
import Walter from '../../assets/images/users/walter.png'
import Liza from '../../assets/images/users/liza.png'

const memberData = [
  {
    id: '1',
    firstName: 'Alex',
    lastName: 'Johnson',
    avatarURL: Alex,
  },
  {
    id: '2',
    firstName: 'Arya',
    lastName: 'Davis',
    avatarURL: Arya,
  },
  {
    id: '3',
    firstName: 'James',
    lastName: 'Ocean',
    avatarURL: James,
  },
  {
    id: '4',
    firstName: 'Austin',
    lastName: 'Winter',
    avatarURL: Austin,
  },
  {
    id: '5',
    firstName: 'Walter',
    lastName: 'Brown',
    avatarURL: Walter,
  },
  {
    id: '6',
    firstName: 'Liza',
    lastName: 'Frank',
    avatarURL: Liza,
  },
]

describe('MembersListModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MembersListModal memberData={memberData} isMemberModal={true} />
    )
    expect(baseElement).toBeTruthy()
  })
})
