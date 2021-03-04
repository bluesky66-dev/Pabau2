import React, { FC, useState } from 'react'
import Layout from '../../../components/Layout/Layout'
import className from 'classnames'
import ExternalLink from './assets/external-link.svg'
import { Card, Row, Col, Select, Input } from 'antd'
import {
  UnorderedListOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  FileZipOutlined,
  FileOutlined,
  SettingOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Switch, Wstepper, Button, VoucherCard } from '@pabau/ui'
import styles from './index.module.less'

const { Option } = Select
const { TextArea } = Input

export interface CreateVoucherProps {
  title?: string
}

export const CreateVoucher: FC<CreateVoucherProps> = ({ title }) => {
  const steps = [
    {
      img: <SettingOutlined />,
      index: 0,
      isActive: true,
      name: 'Basic',
      step: 1,
    },
    {
      img: <SearchOutlined />,
      index: 1,
      isActive: false,
      name: 'Configure(API)',
      step: 2,
    },
  ]
  const [activeStep, setActiveStep] = useState(0)

  const cardHeader = (
    <div className={styles.purchaseOrderHeader}>
      <div className={styles.leftCardHeading}>
        <div className={styles.breadcrumbDiv}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: 'Gift Voucher', path: '' },
            ]}
          />
        </div>
        <div className={styles.heading}>Gift Voucher</div>
      </div>
      <div className={styles.rightCardHeadBtns}>
        <div className={styles.switchDiv}>
          <span>Sell this voucher online</span>
          <span>
            <Switch defaultChecked={true} />
          </span>
        </div>
        <div className={styles.hrefDiv}>
          <a href="https://connect-lutetia.pabau.me/booking">
            https://connect-lutetia.pabau.me/booking{' '}
            <img src={ExternalLink} alt="External Link" />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <div className={styles.mainCreateVoucher}>
        <Card title={cardHeader}>
          <Row>
            <Col md={24}>
              <Wstepper
                active={activeStep}
                data={steps}
                onActiveStepChange={(step) => setActiveStep(step)}
              />
            </Col>
            <Col md={24}></Col>
          </Row>
        </Card>
      </div>
    </Layout>
  )
}

export default CreateVoucher
