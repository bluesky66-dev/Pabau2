import React, { FC, ReactNode, useState } from 'react'
import { Steps, DatePicker, Dropdown, Menu, Tooltip } from 'antd'
import classNames from 'classnames'

import {
  FileSearchOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons'
import dateFormat from 'dateformat'
import moment from 'moment'
import { Button } from '@pabau/ui'
import styles from './StaffPerformanceReview.module.less'
import { ClockCircleOutlined } from '@ant-design/icons/lib'
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

  const onDateChange = (date) => {
    setReviewDate(new Date(date))
  }

  const diff_months = (dt2, dt1) => {
    const monthDifference = moment(new Date(dt2)).diff(
      new Date(dt1),
      'months',
      true
    )
    return Math.abs(Math.round(monthDifference))
  }

  const today = new Date()
  const aYear = new Date(moment().add(1, 'years').calendar())
  const review = new Date(reviewDate)

  const convertDate = (month) => {
    const months = new Date(new Date().setMonth(reviewDate.getMonth() + month))
    return new Date(months.setDate(reviewDate.getDate()))
  }

  const convertDateWithCurrentDate = (month) => {
    return new Date(new Date().setMonth(new Date().getMonth() + month))
  }
  const DateArray: Array<{
    date: Date
    icon: ReactNode
    status: 'wait' | 'finish' | 'process' | 'error'
  }> = []
  if (reviewPeriod === 'annual') {
    if (DateFormatter(today) !== DateFormatter(reviewDate)) {
      const difference = Math.round(
        moment(new Date(aYear)).diff(new Date(reviewDate), 'months', true)
      )
      const numberOfReviews = Math.floor(Math.abs(difference) / 3)
      const reviewMonth = new Date(review.setMonth(review.getMonth() - 1))
      DateArray.push({
        date: today,
        icon: (
          <Tooltip placement="topLeft" title="Today">
            <ClockCircleOutlined />
          </Tooltip>
        ),
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
            icon: (
              <Tooltip placement="topLeft" title="Peer Feedback">
                <TeamOutlined />
              </Tooltip>
            ),
          })
        }
      }
      new Date(reviewMonth) > new Date(today)
        ? DateArray.push(
            {
              date: reviewMonth,
              icon: (
                <Tooltip placement="topLeft" title="Assessment Reminder Email">
                  <MailOutlined />
                </Tooltip>
              ),
              status: 'finish',
            },
            {
              date: reviewDate,
              icon: (
                <Tooltip placement="topLeft" title="Self & Manager assessment">
                  <FileSearchOutlined />
                </Tooltip>
              ),
              status: 'process',
            }
          )
        : DateArray.push({
            date: reviewDate,
            icon: (
              <Tooltip placement="topLeft" title="Self & Manager assessment">
                <FileSearchOutlined />
              </Tooltip>
            ),
            status: 'process',
          })
      if (
        new Date(new Date().setMonth(reviewDate.getMonth() + 1)) <
        new Date(aYear)
      ) {
        DateArray.push({
          date: convertDate(1),
          status: 'process',
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
        })
      }
      if (numberOfReviews > 0) {
        for (let i = 1; i < numberOfReviews; i++) {
          DateArray.push({
            date: convertDate(3 * i + 1),
            status: 'process',
            icon: (
              <Tooltip placement="topLeft" title="Peer Feedback">
                <TeamOutlined />
              </Tooltip>
            ),
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
          icon: (
            <Tooltip placement="topLeft" title="Self & Manager assessment">
              <FileSearchOutlined />
            </Tooltip>
          ),
          status: 'process',
        },
        {
          date: convertDateWithCurrentDate(1),
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
          status: 'wait',
        },
        {
          date: convertDateWithCurrentDate(4),
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
          status: 'wait',
        },
        {
          date: convertDateWithCurrentDate(7),
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
          status: 'wait',
        },
        {
          date: convertDateWithCurrentDate(10),
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
          status: 'wait',
        },
        {
          date: reviewMonth,
          icon: (
            <Tooltip placement="topLeft" title="Assessment Reminder Email">
              <MailOutlined />
            </Tooltip>
          ),
          status: 'finish',
        },
        { date: aYear, icon: <FileSearchOutlined />, status: 'process' }
      )
    }
  } else {
    const difference = Math.round(
      moment(new Date(aYear)).diff(new Date(reviewDate), 'months', true)
    )
    const numberOfReviews = Math.floor(Math.abs(difference) / 3)
    if (DateFormatter(today) !== DateFormatter(reviewDate)) {
      DateArray.push({
        date: today,
        icon: (
          <Tooltip placement="topLeft" title="Today">
            <ClockCircleOutlined />
          </Tooltip>
        ),
        status: 'process',
      })
      if (diff_months(today, reviewDate) > 3) {
        const diff = diff_months(today, reviewDate)
        const beforePeers = Math.floor(Math.abs(diff - 1) / 3)
        for (let i = 1; i < beforePeers + 2; i++) {
          if (convertDateWithCurrentDate(3 * i - 1) < convertDate(-1)) {
            DateArray.push({
              date: convertDateWithCurrentDate(3 * i - 1),
              status: 'process',
              icon: (
                <Tooltip placement="topLeft" title="Peer Feedback">
                  <TeamOutlined />
                </Tooltip>
              ),
            })
          }
        }
      }
      if (new Date(new Date().setMonth(review.getMonth() - 1)) > new Date()) {
        DateArray.push({
          date: convertDate(-1),
          icon: (
            <Tooltip placement="topLeft" title="Assessment Reminder Email">
              <MailOutlined />
            </Tooltip>
          ),
          status: 'finish',
        })
      }
      DateArray.push(
        {
          date: review,
          icon: (
            <Tooltip placement="topLeft" title="Self & Manager assessment">
              <FileSearchOutlined />
            </Tooltip>
          ),
          status: 'process',
        },
        {
          date: convertDate(1),
          icon: (
            <Tooltip placement="topLeft" title="Peer Feedback">
              <TeamOutlined />
            </Tooltip>
          ),
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
            icon: (
              <Tooltip placement="topLeft" title="Assessment Reminder Email">
                <MailOutlined />
              </Tooltip>
            ),
          },
          {
            date: convertDate(month),
            status: 'process',
            icon: (
              <Tooltip placement="topLeft" title="Self & Manager assessment">
                <FileSearchOutlined />
              </Tooltip>
            ),
          },
          {
            date: convertDate(month + 1),
            status: 'process',
            icon: (
              <Tooltip placement="topLeft" title="Peer Feedback">
                <TeamOutlined />
              </Tooltip>
            ),
          }
        )
      }
    } else {
      DateArray.push({
        date: today,
        icon: (
          <Tooltip placement="topLeft" title="Self & Manager assessment">
            <FileSearchOutlined />
          </Tooltip>
        ),
        status: 'process',
      })
      for (let i = 1; i < numberOfReviews + 1; i++) {
        const aMonth: number = 3 * i - 1
        const month: number = 3 * i
        DateArray.push(
          {
            date: convertDateWithCurrentDate(aMonth),
            status: 'finish',
            icon: (
              <Tooltip placement="topLeft" title="Assessment Reminder Email">
                <MailOutlined />
              </Tooltip>
            ),
          },
          {
            date: convertDateWithCurrentDate(month),
            status: 'process',
            icon: (
              <Tooltip placement="topLeft" title="Self & Manager assessment">
                <FileSearchOutlined />
              </Tooltip>
            ),
          },
          {
            date: convertDateWithCurrentDate(month + 1),
            status: 'process',
            icon: (
              <Tooltip placement="topLeft" title="Peer Feedback">
                <TeamOutlined />
              </Tooltip>
            ),
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
      <div className={styles.reviewDate}>
        NEXT REVIEW IS ON {DateFormatter(reviewDate)}
      </div>
      <div>
        {reviewPeriod === 'annual' ? (
          <div>
            <Steps
              className={styles.stepsDemo}
              responsive
              labelPlacement="vertical"
            >
              {DateArray.map((dates, i) => {
                let diff = 0
                if (i !== DateArray.length - 1) {
                  diff = diff_months(dates.date, DateArray[i + 1].date)
                }
                return (
                  <Step
                    key={DateFormatter(dates.date)}
                    status={dates.status}
                    title={i === 0 && 'Today'}
                    description={DateFormatter(dates.date)}
                    icon={dates.icon}
                    className={classNames(
                      diff === 2
                        ? styles.stepVersionOne
                        : diff === 3
                        ? styles.stepVersionTwo
                        : styles.stepVersionAnnual,
                      i === 0 && styles.firstStep
                    )}
                  />
                )
              })}
            </Steps>
          </div>
        ) : (
          <div>
            <Steps
              className={styles.stepsDemo}
              responsive
              labelPlacement="vertical"
            >
              {DateArray.map((dates, i) => {
                let diff = 0
                if (i !== DateArray.length - 1) {
                  diff = diff_months(dates.date, DateArray[i + 1].date)
                }
                return (
                  <Step
                    key={DateFormatter(dates.date)}
                    status={dates.status}
                    title={i === 0 && 'Today'}
                    description={DateFormatter(dates.date)}
                    icon={dates.icon}
                    className={classNames(
                      diff === 2
                        ? styles.stepVersionOne
                        : diff === 3
                        ? styles.stepVersionTwo
                        : styles.stepVersion,
                      i === 0 && styles.firstStep
                    )}
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
