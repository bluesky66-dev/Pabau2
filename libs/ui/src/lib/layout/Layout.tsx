import React from 'react';

import './Layout.less';
import Header from "../header/Header";
import Menu from "../menu/Menu";

/* eslint-disable-next-line */
export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <Header/>
      <Menu/>
      {props.children}
    </div>
  );
}

export default Layout;
