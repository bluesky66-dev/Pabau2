/* eslint-disable */

import { Header, Logo } from '@pabau/ui'
import React from 'react'
import Search from '../search/search'

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
