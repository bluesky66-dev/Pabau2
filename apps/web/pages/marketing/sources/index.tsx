import React, { FC } from 'react'
import './styles.less'
import { Table } from 'antd'
import { Layout } from '@pabau/ui'
import { useRouter } from 'next/router'

export const Index: FC = () => {
  const router = useRouter()
  useEffect(() => {
    window.document.onkeypress = (e) => {
      console.log(e)
      if (e.code === 'KeyN') {
        setTimeout(() => router.push('sources/new'), 1)
      }
    }
  })
  return (
    <Layout pageTitle="Marketing Sources" newButtonText="New Source" onNewClicked="new">
      <Table
        style={{ height: '100vh' }}
        sticky={true}
        columns={[
          {
            title: 'name',
            dataIndex: 'name',
          },
        ]}
        dataSource={[
          {
            name: 'William',
          },
        ]}
      />
    </Layout>
  )
}

export default Index
