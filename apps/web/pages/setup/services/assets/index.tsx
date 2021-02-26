import React, { FC } from 'react'

import Doting from './dots'
import Donating from './donate'
import Injecting from './injection'
import Keying from './key'
import Globing from './globe'
import Teaming from './team'
import Filing from './file'
import Foldering from './folder'

export const Dots: FC = () => {
  return <Doting />
}

export const Donate: FC = () => {
  return <Donating />
}

export const Injection: FC = () => {
  return <Injecting />
}

export const Key: FC = () => {
  return <Keying />
}

export const Globe: FC = () => {
  return <Globing />
}

export const Team: FC = () => {
  return <Teaming />
}

export const File: FC = () => {
  return <Filing />
}

export const Folder: FC = () => {
  return <Foldering />
}
