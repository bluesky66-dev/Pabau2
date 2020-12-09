import React from 'react';
import './styles.less';
import {Table} from "antd";
import {Layout} from "@pabau/ui";
import {useRouter} from "next/router";

const handleMenuClick = () => alert("not yet implemented")

export function Index() {
  const router = useRouter();
  return (
    <Layout pageTitle="Marketing Sources" newButtonText="New Source" onNewClicked="new">
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
