import React, { FC, useState } from 'react'
import Layout from './../../../components/Layout/Layout'
import { TabbedTable, Button, Breadcrumb } from '@pabau/ui'
import { Card, Row, Col } from 'antd'
import { FileProtectOutlined } from '@ant-design/icons'
import styles from './index.module.less'

/* eslint-disable-next-line */
export interface GiftVouchersProps {}

const GiftVouchers: FC<GiftVouchersProps> = () => {
  const [libItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  const tabItems = ['Types', 'Circlulation']

  const cardHeader = (
    <div className={styles.header}>
      <div className="leftDiv">
        <div>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Gift Vouchers', path: '' },
            ]}
          />
        </div>
        <h3 className={styles.drugsHeading}>Gift Vouchers</h3>
      </div>
      <div className="rightDiv">
        <Button type="primary" size="large">
          Add Voucher Type
        </Button>
      </div>
    </div>
  )

  return (
    <Layout>
      <div className={styles.drugsListingMain}>
        <Card title={cardHeader}>
          <div className={styles.body}>
            <TabbedTable tabItems={tabItems}>
              <div className={styles.library}>
                <Row>
                  {libItems.length > 0 &&
                    libItems.map((el, key) => (
                      <Col
                        lg={6}
                        md={8}
                        sm={16}
                        xs={24}
                        key={`col-key-${key * 123}`}
                      >
                        <div className={styles.libraryCard}>
                          <div>
                            <FileProtectOutlined color="#9292A3;" />
                          </div>
                          <h4>BNF Drug Database</h4>
                          <p>1082 drugs</p>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
              <div className={styles.tableSheet}></div>
            </TabbedTable>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default GiftVouchers
