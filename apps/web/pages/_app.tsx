import React from 'react'
import { AppProps } from 'next/app'
import './styles.less'

export default function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} /
}
