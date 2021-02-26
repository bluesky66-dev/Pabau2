import React, { useState, useEffect } from 'react'
import {
  Breadcrumb,
  Button,
 
  TabbedTable
} from '@pabau/ui'
import { Card, Col, Row, Typography } from 'antd'
import ThirdPartyTable from '../../components/Setup/Table/ThirdPartyTable'
import LibraryTable from '../../components/Setup/Table/LibraryTable'
//import NewThirdTypeModal from '../../components/Setup/Third-Party/Third-partiesModal'
import Layout from '../../components/Layout/Layout'
import styles from './third-parties.module.less'

export interface BlockOutOptionsProps {}












export function BlockOutOptions(props: BlockOutOptionsProps) {

  const { Title } = Typography

  




 

  return (
    <Layout>
      <Card bodyStyle={{ padding: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'third-parties', path: '' },
              ]}
            />
            <Title>Third Parties</Title>
          </Col>
          <Col>
            <Button type="primary" >
            Create third party
            </Button>
          </Col>
        </Row>
        <div>
        <TabbedTable tabItems={['Third parties','Library']}>
          <ThirdPartyTable/>
       <LibraryTable/>

        </TabbedTable>

        </div>
     
      </Card>
 
  
    </Layout>
  )
}

export default BlockOutOptions
