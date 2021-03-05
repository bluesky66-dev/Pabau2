import React from 'react'
import { Typography } from 'antd'
import { Layout, Breadcrumb, Button } from '@pabau/ui'
const { Title } = Typography
export const MedicalConditions = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: '#fff',
        }}
      >
        <Breadcrumb
          breadcrumbItems={[
            {
              breadcrumbName: 'Setup',
              path: 'setup',
            },
            { breadcrumbName: 'Invoice Templates', path: '' },
          ]}
        />
        <Title>Invoice Templates</Title>
        <Button>New Condition</Button>
      </div>
    </Layout>
  )
}
export default MedicalConditions
