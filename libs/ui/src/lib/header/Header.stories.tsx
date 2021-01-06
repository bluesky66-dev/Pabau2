import { Header, Logo } from '@pabau/ui'
import React from 'react'
import { Search } from '../search/search'

export default {
  component: Header,
  title: 'Header',
}

export const PabauHeaderStory = (): JSX.Element => {
  return <Header />
}

export const PabauLogo = (): JSX.Element => {
  return <Logo />
}

export const PabauSearch = (): JSX.Element => {
  return <Search />
}
