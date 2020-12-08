import React from 'react';

import './Header.less';
import Logo from "../logo/Logo";

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <div>fullscreen</div>
      <div>create</div>
      <div>search</div>
      <Logo />

    </div>
  );
}

export default Header;
