/* eslint-disable */

import { Header, Logo } from '@pabau/ui'
import React from 'react'
// import { Header2 } from './Header'
import { PabauHeader } from './PabauHeader'
import Logo  from '../logo/Logo'
import { Search } from '../search/search'

export default {
  component: Header,
  title: 'Header',
}

export const PabauHeaderStory = () => {
  return <Header />
}

export const PabauLogo = () => {
  return <Logo />
}

export const PabauSearch = () => {
  return <Search />
}
