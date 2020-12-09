import React from 'react';

import './styles.less';
import {Button, Dropdown, Input, Layout as AntLayout, Menu, Table} from "antd";
import {Layout, Logo} from "@pabau/ui";
import {useRouter} from "next/router";

const {Content, Sider, Footer} = AntLayout;
const handleMenuClick = () => alert("not yet implemented")

export function Index() {
  const router = useRouter();
  return (
    <Layout pageTitle="Add new Marketing Source" onCancelClicked={()=>router.back()}>
      Name: <input />
    </Layout>
  );
}

export default Index;
