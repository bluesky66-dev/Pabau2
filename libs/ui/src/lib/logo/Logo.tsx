import React from 'react';

import './Logo.less';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div>
      <h1 style={{userSelect: 'none'}}>Welcome to <span className="logo">Pabau</span>!</h1>
    </div>
  );
}

export default Logo;
