import React, { FC, useState, useEffect } from 'react'
import Layout from './../../../components/Layout/Layout'
import { TabbedTable, Button, Breadcrumb, VoucherCard } from '@pabau/ui'
import { Card, Row, Col } from 'antd'
import styles from './index.module.less'

/* eslint-disable-next-line */
export interface GiftVouchersProps {}

const giftCardSettings = {
  cardWidth: 525,
  backgroundColor1: '#9013FE',
  backgroundColor2: '#BD10E0',
  gradientType: 'linear-gradient',
  borderColor: '#000',
  bookNowButton: true,
  buttonLabel: 'Book Now',
  dotMenuShow: true,

  voucherType: '',
  voucherNum: 100001,
  voucherPrice: 100,
  voucherPriceLabel: 'Voucher Value',
  voucherSoldPrice: 100,
  voucherSoldPriceLabel: 'Sold 5',
  voucherRelation: 'Family',
  voucherRelationLabel: 'Redeem on all services',
  currencyType: '£',
}

const GiftVouchers: FC<GiftVouchersProps> = () => {
  const [gifts, setGifts] = useState([])
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

  useEffect(() => {
    setGifts([
      { ...giftCardSettings },
      { ...giftCardSettings },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'birthday',
      },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'valentine',
      },
      {
        ...giftCardSettings,
        gradientType: 'radial-gradient',
      },
      {
        ...giftCardSettings,
        gradientType: 'linear-gradient',
        voucherType: 'flowers',
      },
    ])
  }, [])

  return (
    <Layout>
      <div className={styles.giftVoucherMain}>
        <Card title={cardHeader}>
          <div className={styles.body}>
            <TabbedTable tabItems={tabItems}>
              <div className={styles.types}>
                <Row>
                  {gifts.length > 0 &&
                    gifts.map((gift, key) => (
                      <Col
                        lg={8}
                        md={12}
                        sm={12}
                        xs={24}
                        key={`col-key-${key * 123}`}
                      >
                        <div className={styles.voucherCard}>
                          <VoucherCard {...gift} />
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
