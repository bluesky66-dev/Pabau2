import React from 'react'
import { Layout, Breadcrumb, MobileHeader, Button } from '@pabau/ui'
import styles from './senders.module.less'
import {
  FilterOutlined,
  LeftOutlined,
  MailOutlined,
  MobileOutlined,
} from '@ant-design/icons'
import { Typography, Row, Col } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ReactComponent as Verified } from '../../assets/images/verified.svg'

const { Title } = Typography

export interface MergeTagItem {
  type: string
  value: string
}

export interface SenderItem {
  id?: string
  type: 'email' | 'sms'
  fromName: string
  fromEmail?: string
  fromCompanyEmail?: string
  replyTo?: string
  isDefaultSender: boolean
  isEnableReplies?: boolean
  isUseComapnyEmail?: boolean
  isAutoUploadReplies?: boolean
  isEnterpriseEmail?: string
  masterCriteria?: string
  subCriteria?: string
  mergeTags: MergeTagItem[]
}

export const senderItems: SenderItem[] = [
  {
    id: '001',
    type: 'email',
    fromName: 'Clinic Bookings',
    fromEmail: 'william@pabau.com',
    isEnableReplies: true,
    isDefaultSender: false,
    mergeTags: [],
  },
  {
    id: '002',
    type: 'sms',
    fromName: 'The Health Clinic',
    isDefaultSender: true,
    isEnableReplies: true,
    mergeTags: [],
  },
  {
    id: '003',
    type: 'sms',
    fromName: 'Surgical Clinic',
    isDefaultSender: false,
    mergeTags: [],
  },
]

export const masterCriteriaOptions = ['Master category', 'Master category 2']
export const subCriteriaOptions = ['Sub category', 'Sub category 2']
export const mergeTagTypeOptions = ['Tag Type 1', 'Tag Type 2']

export const Communications: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <div className={styles.desktopViewNone}>
        <MobileHeader className={styles.mobileHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.mobileHeaderTextStyle}>
              <Link href="/setup">
                <LeftOutlined />
              </Link>
              <p>Communications</p>
            </div>
          </div>
        </MobileHeader>
      </div>

      <Layout active={'setup'}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  { breadcrumbName: 'Communications', path: '' },
                ]}
              />
              <Title>Communications</Title>
            </div>
            <div className={styles.actions}>
              <Button>
                <FilterOutlined />
                Filter
              </Button>
              <Button
                onClick={() => router.push('senders/create')}
                backgroundColor="#54B2D3"
                className={styles.senderButton}
              >
                Create a sender
              </Button>
            </div>
          </div>
          <div className={styles.cardContent}>
            <Row gutter={16}>
              {senderItems.map((item, index) => (
                <Col span={4} xs={12} sm={8} md={6} key={index}>
                  <Button
                    className={styles.senderItem}
                    onClick={() => router.push(`senders/edit/${item.id}`)}
                  >
                    <div className={styles.itemHeader}>
                      {item.type === 'email' ? (
                        <MailOutlined className={styles.itemIcon} />
                      ) : (
                        <MobileOutlined className={styles.itemIcon} />
                      )}
                      <div className={styles.verifiedWrapper}>
                        {item.isDefaultSender && (
                          <div className={styles.defaultText}>Default</div>
                        )}
                        {item.isEnableReplies && <Verified />}
                      </div>
                    </div>
                    <div className={styles.itemBody}>
                      <div>{item.fromName}</div>
                      {item.fromEmail && (
                        <div className={styles.email}>{item.fromEmail}</div>
                      )}
                    </div>
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Communications
