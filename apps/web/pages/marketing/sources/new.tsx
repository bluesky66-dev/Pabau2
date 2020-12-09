import React from 'react';
import './styles.less';
import {Layout} from "@pabau/ui";
import {useRouter} from "next/router";

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
