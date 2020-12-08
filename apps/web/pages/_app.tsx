import React from 'react';
import { AppProps } from 'next/app';
import './styles.less'

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CustomApp;
