import React from 'react';

import './index.module.less';
// import {Layout} from "@pabau/ui";
import {Button, Dropdown, Input, Layout as AntLayout, Menu, Table} from "antd";
import {
  CalendarOutlined,
  ExpandOutlined,
  PoundOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined
} from "@ant-design/icons";
import screenfull from "screenfull";
import {Layout, Logo} from "@pabau/ui";
import {Header2 as Header} from "@pabau/ui"

const {Content, Sider, Footer} = AntLayout;

const handleMenuClick = () => alert("not yet implemented")



export function Index({id}) {
  return (
    <Layout>
      ID is {id}
      <Table
        style={{height:'100vh'}}
        sticky={true}
        columns={[
          {
            title: "name",
            dataIndex: "name"
          }
        ]}
        dataSource={[
        {
          name: "William"
        }
      ]} />
    </Layout>
  );
}

export default Index;
