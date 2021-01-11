import { Header, Logo } from '@pabau/ui'
import React from 'react'
import { Search } from './search/Search'
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'
import User4 from '../../assets/images/user4.png'
import User5 from '../../assets/images/user5.png'

export default {
  component: Header,
  title: 'Header',
}

const searchResults = [
  { id: '1', firstName: 'Will', lastName: 'Lawsons', avatarUrl: User1 },
  { id: '2', firstName: 'Jessica', lastName: 'Winter', avatarUrl: User2 },
  { id: '3', firstName: 'Stephen', lastName: 'Watson', avatarUrl: User3 },
  { id: '4', firstName: 'Walt', lastName: 'Smith', avatarUrl: User4 },
  { id: '5', firstName: 'Willy', lastName: 'Brown', avatarUrl: User5 },
]

export const PabauHeaderStory = (): JSX.Element => {
  return <Header searchRender={() => PabauSearch()} />
}

export const PabauLogo = (): JSX.Element => {
  return <Logo />
}

export const PabauSearch = (): JSX.Element => {
  return <Search searchResults={searchResults} />
}
