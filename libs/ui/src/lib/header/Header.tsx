import React, {useCallback} from 'react';

import './Header.less';
import Logo from "../logo/Logo";
import screenfull from "screenfull";
import {Button, Dropdown, Input, Layout, Menu} from "antd";
import {
  CalendarOutlined,
  ExpandOutlined,
  PoundOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined
} from "@ant-design/icons";

const {Header} = Layout;

/* eslint-disable-next-line */
export interface HeaderProps {
}


const items = [
  {
    name: "Contact",
    icon: <UserOutlined/>,
  },
  {
    name: "Lead",
    icon: <SmileOutlined/>,
  },
  {
    name: "Appointment",
    icon: <CalendarOutlined/>,
  },
  {
    name: "Invoice",
    icon: <PoundOutlined/>,
  },
]

export function Header2() {
  const handleMenuClick = useCallback(() => alert("Not yet done"), []);
  const overlay = <Menu onClick={handleMenuClick}>
    {
      items.map(({name, icon}) =>
        <Menu.Item key={name} icon={icon}>
          {name}
        </Menu.Item>
      )}
  </Menu>;
  return (
    <Header style={{backgroundColor: 'white', paddingLeft: '0.5em', position: 'sticky', top: 0, zIndex: 2}}>
      <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
        {screenfull.isEnabled &&
        <Button type="ghost" style={{borderRadius: 5}} shape="round" icon={<ExpandOutlined/>}
                className="button"
                size="large" onClick={() => {
          if (screenfull.isEnabled) screenfull.toggle()
        }}/>}

        <Dropdown overlay={overlay}>
          <Button style={{borderRadius: 5}} type="primary" shape="round" size="large" className="button">
            Create
            {/*Create <DownOutlined/>*/}
          </Button>
        </Dropdown>

        <div className="searchBox">
          <label>
            <SearchOutlined className="searchBoxIcon"/>
            <Input allowClear className="searchBoxInner"/>
          </label>
        </div>

        <Logo/>
      </div>
    </Header>
  );
}

export default Header2;
