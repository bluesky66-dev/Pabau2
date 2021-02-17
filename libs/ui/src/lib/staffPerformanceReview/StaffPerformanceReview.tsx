import React, { FC, ReactNode } from 'react'
import { Steps } from 'antd'
import {
  FileSearchOutlined,
  TeamOutlined,
  MailOutlined,
} from '@ant-design/icons'
import dateFormat from 'dateformat'

const { Step } = Steps

export enum periodType {
  annual = 'annual',
  threeMonth = 'threeMonth',
}

interface P {
  reviewDate: Date
  reviewPeriod?: periodType
}

const StaffPerformanceReview: FC<P> = ({ reviewDate, reviewPeriod }) => {
  const DateFormatter = (date) => {
    return dateFormat(date, 'mmm d, yyyy')
  }

  const today = new Date()
  const aYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  const review = new Date(reviewDate)

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
      reviewMonth.getMonth() > today.getMonth()
        ? DateArray.push(
            { date: today, icon: <FileSearchOutlined />, status: 'wait' },
            { date: reviewMonth, icon: <MailOutlined />, status: 'finish' },
            {
              date: reviewDate,
              icon: <FileSearchOutlined />,
              status: 'process',
            }
          )
        : DateArray.push(
            { date: today, icon: <FileSearchOutlined />, status: 'wait' },
            {
              date: reviewDate,
              icon: <FileSearchOutlined />,
              status: 'process',
            }
          )
      DateArray.push({
        date: new Date(new Date().setMonth(reviewDate.getMonth() + 1)),
        status: 'process',
        icon: <TeamOutlined />,
      })
      for (let i = 1; i < numberOfReviews + 1; i++) {
        DateArray.push({
          date: new Date(
            new Date().setMonth(reviewDate.getMonth() + 3 * i + 1)
          ),
          status: 'process',
          icon: <TeamOutlined />,
        })
      }
    } else {
      console.log('aYear', aYear)
      const reviewMonth = new Date(new Date().setMonth(aYear.getMonth() - 1))
      if (reviewMonth.getMonth() == aYear.getMonth()) reviewMonth.setDate(0)
      reviewMonth.setDate(aYear.getDate())
      console.log('reviewMonth', reviewMonth)
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
      DateArray.push(
        {
          date: today,
          icon: <FileSearchOutlined />,
          status: 'process',
        },
        {
          date: new Date(new Date().setMonth(review.getMonth() - 1)),
          icon: <MailOutlined />,
          status: 'finish',
        },
        {
          date: review,
          icon: <FileSearchOutlined />,
          status: 'process',
        }
      )
      for (let i = 1; i < numberOfReviews + 1; i++) {
        const aMonth: number = 3 * i - 1
        const month: number = 3 * i
        DateArray.push(
          {
            date: new Date(new Date().setMonth(reviewDate.getMonth() + aMonth)),
            status: 'finish',
            icon: <MailOutlined />,
          },
          {
            date: new Date(new Date().setMonth(reviewDate.getMonth() + month)),
            status: 'process',
            icon: <FileSearchOutlined />,
          },
          {
            date: new Date(
              new Date().setMonth(reviewDate.getMonth() + month + 1)
            ),
            status: 'process',
            icon: <TeamOutlined />,
          }
        )
      }
      DateArray.push({
        date: aYear,
        icon: <FileSearchOutlined />,
        status: 'process',
      })
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
      {reviewPeriod === 'annual' ? (
        <div>
          <Steps labelPlacement="vertical">
            {DateArray.map((dates) => (
              <Step
                key={DateFormatter(dates.date)}
                status={dates.status}
                description={DateFormatter(dates.date)}
                icon={dates.icon}
              />
            ))}
          </Steps>
        </div>
      ) : (
        <div>
          <Steps labelPlacement="vertical">
            {DateArray.map((dates) => (
              <Step
                key={DateFormatter(dates.date)}
                status={dates.status}
                description={DateFormatter(dates.date)}
                icon={dates.icon}
              />
            ))}
          </Steps>
        </div>
      )}
    </div>
  )
}

export default StaffPerformanceReview
