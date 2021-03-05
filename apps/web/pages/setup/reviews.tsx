import React, { FC, useState } from 'react'
import { useMedia } from 'react-use'

import {
  Button,
  NotificationBanner,
  Reviews,
  Table,
  Pagination,
  Avatar,
  MobileHeader,
  Layout,
} from '@pabau/ui'
import { Row, Col, Card, Popover, Rate } from 'antd'
import _ from 'lodash'
import {
  FacebookOutlined,
  FilterOutlined,
  GoogleOutlined,
} from '@ant-design/icons'
import { ReviewConfigObj } from '../../mocks/Reviews'
import PabauLogo from '../../assets/images/logo.svg'
import userImage from '../../assets/images/user.png'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import styles from './reviews.module.less'
import notificationBannerLabPageImage from '../../assets/images/notification-image-lab-page.png'
import smile from '../../assets/images/smile.svg'

const dataList = [
  {
    key: '1',
    source: <img src={PabauLogo} alt={'logo'} />,
    score: 2,
    name: 'Book Now Link',
    date: '2 month ago',
    color: '#B6CDFF',
    for: <Avatar src={userImage} />,
    message: 'Yesterday was my first and last time here',
  },
  {
    key: '2',
    source: <FacebookOutlined />,
    score: 2,
    name: 'From a friend',
    date: '2 month ago',
    for: <Avatar src={userImage} />,
    message: 'The worst place I’ve been in Dublin to date, avoid at all costs',
  },
  {
    key: '3',
    source: <GoogleOutlined />,
    score: 2,
    name: 'Instagram',
    date: '2 month ago',
    for: <Avatar src={userImage} />,
    message: 'Love my nails pleasant staff n friendly atmosphere',
  },
]

interface ColumnData {
  title?: string
  dataIndex?: string
  className?: string
  visible?: boolean
}

interface ReviewConfig {
  columnList: Array<ColumnData>
}

const ReviewsConfig: FC<ReviewConfig> = () => {
  const [hideBanner, setHideBanner] = useState(false)
  const isMobile = useMedia('(max-width: 768px)', false)
  const [data, setData] = useState(dataList)

  const fields = [
    {
      icon: <img src={PabauLogo} alt={'logo'} />,
      score: '4/5',
      reviews: 20,
      mostRecent: '2 months ago',
      isPlus: false,
      key: 1,
    },
    {
      icon: <FacebookOutlined />,
      score: '4/5',
      reviews: 20,
      mostRecent: '2 months ago',
      isPlus: true,
      key: 2,
    },
    {
      icon: <GoogleOutlined />,
      score: '4/5',
      reviews: 20,
      mostRecent: '2 months ago',
      isPlus: true,
      key: 3,
    },
  ]

  const handleSave = (): void => {
    // console.log('Save Object', posConfigObj)
  }

  const filterContent = (isMobile = false) => (
    <div className={styles.filterContent}>
      {/*{!isMobile && (*/}
      {/*  <div className={classNames(styles.filterHeader)}>*/}
      {/*    <h6>Filter by</h6>*/}
      {/*    <p>Status</p>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<div className={styles.radioTextStyle}>*/}
      {/*  <Radio.Group onChange={(e) => {}} value={false}>*/}
      {/*    <Radio value={true}>*/}
      {/*      <span>Active</span>*/}
      {/*    </Radio>*/}
      {/*    <Radio value={false}>*/}
      {/*      <span>Inactive</span>*/}
      {/*    </Radio>*/}
      {/*  </Radio.Group>*/}
      {/*</div>*/}
    </div>
  )

  const renderNotification = () => {
    return (
      <NotificationBanner
        title="Reviews"
        desc="You are not displaying your reviews on your website, and therefore you are not receiving Google Ranking, as well as customers not being able to see them!"
        imgPath={notificationBannerLabPageImage}
        allowClose={true}
        setHide={[hideBanner, setHideBanner]}
        showPaymentButton={true}
        showEmail={true}
        paymentButtonTitle="Find out how"
      />
    )
  }

  const mobileHeader = () => {
    return (
      <div className={styles.headerMobile}>
        <MobileHeader>
          <div className={styles.mobTopHead}>
            <div className={styles.mobTopHeadRow}>
              <LeftOutlined /> <h6> {'Reviews'}</h6>
            </div>
          </div>
        </MobileHeader>
      </div>
    )
  }
  const deskTopHeader = () => {
    return (
      <div>
        <Row className={styles.mainWrapper}>
          <Col span={12} className={styles.titleWrapper}>
            <p className={styles.titleTagLine}>
              {'Setup'}
              <span>
                <RightOutlined /> {'Reviews'}
              </span>
            </p>
            <h4>{'Reviews'}</h4>
          </Col>
          <Col span={'auto'} className={styles.titleSaveBtn}>
            <div className={styles.reviewLink}>
              <h5>Review link</h5>
              <span>pabau.com/reviews/perfect-skin</span>
            </div>
            <div className={styles.btnWrapperFilter}>
              <Popover
                trigger="click"
                content={filterContent}
                placement="bottomRight"
                overlayClassName={styles.filterPopover}
              >
                <Button className={styles.filterBtn}>
                  <FilterOutlined /> Filter
                </Button>
              </Popover>
              <Button
                type="primary"
                className={styles.saveBtn}
                onClick={handleSave}
              >
                {'Configure'}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  const progress = [
    {
      id: 1,
      width: '15%',
      color: '#DF562B',
      label: '<2',
    },
    {
      id: 2,
      width: '20%',
      color: '#FAAD14',
      label: '2-3',
    },
    {
      id: 3,
      width: '40%',
      color: '#9DD7BF',
      label: '3 - 4.5',
    },
    {
      id: 4,
      width: '25%',
      color: 'linear-gradient(67.52deg, #00A36E 0%, #00A69B 92.36%)',
      label: '> 4.5',
    },
  ]

  const customProgressBar = (feedbackValue) => {
    let left = feedbackValue * 20
    let color = null
    if (feedbackValue < 2) {
      left = feedbackValue * 7.5
      color = '#DF562B'
    }
    if (feedbackValue >= 2 && feedbackValue < 3) {
      left = feedbackValue === 2 ? feedbackValue * 7.5 : feedbackValue * 11.67
      color = '#FAAD14'
    }
    if (feedbackValue >= 3 && feedbackValue < 4.5) {
      left = feedbackValue === 3 ? feedbackValue * 11.67 : feedbackValue * 16.67
    }
    if (feedbackValue >= 4.5) {
      left = feedbackValue === 4.5 ? feedbackValue * 16.67 : feedbackValue * 20
      color = 'linear-gradient(67.52deg, #00A36E 0%, #00A69B 92.36%)'
    }
    return (
      <div className={styles.containerStyles}>
        {progress.map((item) => (
          <div
            className={styles.fillerStyles}
            style={{ width: item.width, background: item.color }}
            key={item.id}
          >
            <div className={styles.number}>{item.label}</div>
            <span className={styles.labelStyles} />
            {item.id === 3 && (
              <div
                className={styles.progressDot}
                style={{
                  left: `${left}%`,
                  background: color !== null ? color : item.color,
                }}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderVisibleData = () => {
    return (
      <div className={styles.buttonVisibleWrap}>
        <Button>Share</Button>
        <Button>Respond</Button>
      </div>
    )
  }
  const onHoverHandle = (item) => {
    item.visibleData1 = renderVisibleData()
    const result = data.map((itemList) => {
      if (itemList.key === item.key) {
        return item
      }
      return _.omit(itemList, 'visibleData1')
    })
    setData(result)
  }
  const onHoverLeave = (item) => {
    const resultData = data.map((itemList) => {
      if (itemList.key === item.key) {
        return _.omit(itemList, 'visibleData1')
      }
      return itemList
    })
    setData(resultData)
  }

  const onPaginationChange = () => {
    console.info('---')
  }

  return (
    <div className={styles.mainWrapper}>
      <Layout>
        {!isMobile && renderNotification()}
        <Card className={styles.posConfigurationContainer}>
          {isMobile ? mobileHeader() : deskTopHeader()}
          {isMobile && (
            <Col span={'auto'} className={styles.titleSaveBtn}>
              <div className={styles.reviewLink}>
                <h5>Review link</h5>
                <span>pabau.com/reviews/perfect-skin</span>
              </div>
              <div className={styles.btnWrapperFilter}>
                <Popover
                  trigger="click"
                  content={filterContent}
                  placement="bottomRight"
                  overlayClassName={styles.filterPopover}
                >
                  <Button className={styles.filterBtn}>
                    <FilterOutlined /> Filter
                  </Button>
                </Popover>
                <Button
                  type="primary"
                  className={styles.saveBtn}
                  onClick={handleSave}
                >
                  {'Configure'}
                </Button>
              </div>
            </Col>
          )}

          <Row className={styles.mobColumn}>
            <Col xs={24} lg={12}>
              <div className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.starWrapper}>
                    <span className={styles.imgSmile}>
                      <img src={smile} alt="smile" />
                    </span>
                    <div className={styles.clientReview}>
                      <h5>Your clients love you!</h5>
                      <div className={styles.rateWrap}>
                        <h6>5/5</h6>
                        <Rate className={styles.rateWrapStar} disabled={true} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.socialBtn}>
                    <Button>Share score to Facebook</Button>
                  </div>
                </div>
                <div className={styles.rateListing}>
                  <div className={styles.progressBar}>
                    {customProgressBar(4)}
                  </div>
                  <div className={styles.listColor}>
                    <ul>
                      <li>
                        <span></span>
                        <p>Needs improvement</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Ok</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Great</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Excellent</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={6}>
              <div className={styles.reviewWrap}>
                <Reviews
                  fields={fields}
                  sourceFieldTitle="Source"
                  scoreFieldTitle="Score"
                  reviewFieldTitle="Reviews"
                  mostRecentTitle="Most recent"
                />
              </div>
            </Col>
          </Row>
          <h5 className={styles.tableHead}> reviews tablesheet</h5>
          <div className={styles.tableMob}>
            <Table
              columns={ReviewConfigObj.columnData}
              dataSource={data}
              isHover={true}
              onRowHover={onHoverHandle}
              onLeaveRow={onHoverLeave}
            />
          </div>
          {isMobile && (
            <div className={styles.mobSaveBtn} onClick={handleSave}>
              <Button type={'primary'}>{'Save Changes'}</Button>
            </div>
          )}
        </Card>
        <Pagination
          total={data.length}
          defaultPageSize={10}
          showSizeChanger={false}
          onChange={onPaginationChange}
          pageSize={5}
          current={0}
          showingRecords={data.length}
        />
      </Layout>
    </div>
  )
}

export default ReviewsConfig
