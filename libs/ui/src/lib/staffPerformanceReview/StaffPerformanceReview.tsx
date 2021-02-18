import React, { FC, ReactNode, useState } from 'react'
import { Steps, DatePicker, Dropdown, Menu, Button } from 'antd'
import {
  FileSearchOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons'
import dateFormat from 'dateformat'
import moment from 'moment'

import styles from './StaffPerformanceReview.module.less'
const { Step } = Steps

export enum periodType {
  annual = 'annual',
  threeMonth = 'threeMonth',
}

interface P {
  reviewDate: Date
  reviewPeriod?: periodType
}

const StaffPerformanceReview: FC<P> = () => {
  const [reviewDate, setReviewDate] = useState(new Date())
  const [reviewPeriod, setReviewPeriod] = useState('threeMonth')

  const handleMenuClick = (e) => {
    setReviewPeriod(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="threeMonth">3 months</Menu.Item>
      <Menu.Item key="annual">Annual</Menu.Item>
    </Menu>
  )

  const DateFormatter = (date) => {
    return dateFormat(date, 'mmm d, yyyy')
  }

  const onDateChange = (date, dateString) => {
    setReviewDate(new Date(date))
  }

  const diff_months = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000
    diff /= 60 * 60 * 24 * 7 * 4
    return Math.abs(Math.round(diff))
  }

  const today = new Date()
  const aYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  const review = new Date(reviewDate)
  const convertDate = (month) => {
    const months = new Date(new Date().setMonth(reviewDate.getMonth() + month))
    return new Date(months.setDate(reviewDate.getDate()))
  }
  const DateArray: Array<{
    date: Date
    icon: ReactNode
    status: 'wait' | 'finish' | 'process' | 'error'
  }> = []
  if (reviewPeriod === 'annual') {
    if (DateFormatter(today) !== DateFormatter(reviewDate)) {
      const difference =
        reviewDate.getFullYear() * 12 +
        reviewDate.getMonth() -
        (aYear.getFullYear() * 12 + aYear.getMonth())
      const numberOfReviews = Math.floor(Math.abs(difference - 1) / 3)
      const reviewMonth = new Date(review.setMonth(review.getMonth() - 1))
      DateArray.push({
        date: today,
        icon: <FileSearchOutlined />,
        status: 'wait',
      })
      if (diff_months(today, reviewDate) > 3) {
        const diff = diff_months(today, reviewDate)
        console.log('diff', diff)
        const beforePeers = Math.floor(Math.abs(diff - 1) / 3)
        console.log('beforePeers', beforePeers)
        for (let i = 1; i < beforePeers + 1; i++) {
          DateArray.push({
            date: new Date(
              new Date().setMonth(new Date().getMonth() + 3 * i - 1)
            ),
            status: 'process',
            icon: <TeamOutlined />,
          })
        }
      }
      new Date(reviewMonth) > new Date(today)
        ? DateArray.push(
            { date: reviewMonth, icon: <MailOutlined />, status: 'finish' },
            {
              date: reviewDate,
              icon: <FileSearchOutlined />,
              status: 'process',
            }
          )
        : DateArray.push({
            date: reviewDate,
            icon: <FileSearchOutlined />,
            status: 'process',
          })
      if (
        new Date(new Date().setMonth(reviewDate.getMonth() + 1)) <
        new Date(aYear)
      ) {
        DateArray.push({
          date: new Date(new Date().setMonth(reviewDate.getMonth() + 1)),
          status: 'process',
          icon: <TeamOutlined />,
        })
      }
      if (numberOfReviews > 0) {
        for (let i = 1; i < numberOfReviews; i++) {
          DateArray.push({
            date: new Date(
              new Date().setMonth(reviewDate.getMonth() + 3 * i + 1)
            ),
            status: 'process',
            icon: <TeamOutlined />,
          })
        }
      }
    } else {
      const reviewMonth = new Date(new Date().setMonth(aYear.getMonth() - 1))
      if (reviewMonth.getMonth() === aYear.getMonth()) reviewMonth.setDate(0)
      reviewMonth.setDate(aYear.getDate())
      DateArray.push(
        {
          date: today,
          icon: <FileSearchOutlined />,
          status: 'process',
        },
        {
          date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          icon: <TeamOutlined />,
          status: 'wait',
        },
        {
          date: new Date(new Date().setMonth(new Date().getMonth() + 4)),
          icon: <TeamOutlined />,
          status: 'wait',
        },
        {
          date: new Date(new Date().setMonth(new Date().getMonth() + 7)),
          icon: <TeamOutlined />,
          status: 'wait',
        },
        {
          date: new Date(new Date().setMonth(new Date().getMonth() + 10)),
          icon: <TeamOutlined />,
          status: 'wait',
        },
        { date: reviewMonth, icon: <MailOutlined />, status: 'finish' },
        { date: aYear, icon: <FileSearchOutlined />, status: 'process' }
      )
    }
  } else {
    const difference =
      reviewDate.getFullYear() * 12 +
      reviewDate.getMonth() -
      (aYear.getFullYear() * 12 + aYear.getMonth())
    const numberOfReviews = Math.floor(Math.abs(difference) / 3)
    if (DateFormatter(today) !== DateFormatter(reviewDate)) {
      DateArray.push({
        date: today,
        icon: <FileSearchOutlined />,
        status: 'process',
      })
      if (diff_months(today, reviewDate) > 3) {
        const diff = diff_months(today, reviewDate)
        const beforePeers = Math.floor(Math.abs(diff - 1) / 3)
        for (let i = 1; i < beforePeers + 1; i++) {
          DateArray.push({
            date: new Date(
              new Date().setMonth(new Date().getMonth() + 3 * i - 1)
            ),
            status: 'process',
            icon: <TeamOutlined />,
          })
        }
      }
      if (new Date(new Date().setMonth(review.getMonth() - 1)) > new Date()) {
        DateArray.push({
          date: convertDate(-1),
          icon: <MailOutlined />,
          status: 'finish',
        })
      }
      DateArray.push(
        {
          date: review,
          icon: <FileSearchOutlined />,
          status: 'process',
        },
        {
          date: convertDate(1),
          icon: <TeamOutlined />,
          status: 'process',
        }
      )
      for (let i = 1; i < numberOfReviews + 1; i++) {
        const aMonth: number = 3 * i - 1
        const month: number = 3 * i
        DateArray.push(
          {
            date: convertDate(aMonth),
            status: 'finish',
            icon: <MailOutlined />,
          },
          {
            date: convertDate(month),
            status: 'process',
            icon: <FileSearchOutlined />,
          },
          {
            date: convertDate(month + 1),
            status: 'process',
            icon: <TeamOutlined />,
          }
        )
      }
    } else {
      DateArray.push({
        date: today,
        icon: <FileSearchOutlined />,
        status: 'process',
      })
      for (let i = 1; i < numberOfReviews + 1; i++) {
        const aMonth: number = 3 * i - 1
        const month: number = 3 * i
        DateArray.push(
          {
            date: new Date(new Date().setMonth(new Date().getMonth() + aMonth)),
            status: 'finish',
            icon: <MailOutlined />,
          },
          {
            date: new Date(new Date().setMonth(new Date().getMonth() + month)),
            status: 'process',
            icon: <FileSearchOutlined />,
          },
          {
            date: new Date(
              new Date().setMonth(new Date().getMonth() + month + 1)
            ),
            status: 'process',
            icon: <TeamOutlined />,
          }
        )
      }
    }
  }
  return (
    <div>
      <div className={styles.review}>
        <DatePicker
          style={{ marginRight: '25px' }}
          disabledDate={(current) => {
            return (
              moment().add(-1, 'days') >= current ||
              moment().endOf('year') <= current
            )
          }}
          onChange={onDateChange}
        />
        <Dropdown overlay={menu} placement="bottomCenter" arrow>
          <Button>{reviewPeriod}</Button>
        </Dropdown>
      </div>
      <div>
        {reviewPeriod === 'annual' ? (
          <div>
            <Steps className={styles.stepsDemo} labelPlacement="vertical">
              {DateArray.map((dates, i) => {
                let diff = 0
                if (i !== DateArray.length - 1) {
                  diff = diff_months(dates.date, DateArray[i + 1].date)
                }
                console.log('diff', diff)
                return (
                  <Step
                    key={DateFormatter(dates.date)}
                    status={dates.status}
                    description={DateFormatter(dates.date)}
                    icon={dates.icon}
                    className={
                      diff === 2
                        ? styles.stepVersionOne
                        : diff === 3
                        ? styles.stepVersionTwo
                        : ''
                    }
                  />
                )
              })}
            </Steps>
          </div>
        ) : (
          <div>
            <Steps className={styles.stepsDemo} labelPlacement="vertical">
              {DateArray.map((dates, i) => {
                let diff = 0
                if (i !== DateArray.length - 1) {
                  diff = diff_months(dates.date, DateArray[i + 1].date)
                }
                console.log('diff', diff)
                return (
                  <Step
                    key={DateFormatter(dates.date)}
                    status={dates.status}
                    description={DateFormatter(dates.date)}
                    icon={dates.icon}
                    className={
                      diff === 2
                        ? styles.stepVersionOne
                        : diff === 3
                        ? styles.stepVersionTwo
                        : ''
                    }
                  />
                )
              })}
            </Steps>
          </div>
        )}
      </div>
    </div>
  )
}

export default StaffPerformanceReview
