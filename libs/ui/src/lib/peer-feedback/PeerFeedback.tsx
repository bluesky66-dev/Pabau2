import React, { FC } from 'react'

import { Collapse, Row, Table as AntTable, Tooltip } from 'antd'

import { AvatarList, Button, CustomProgress } from '@pabau/ui'

import styles from './PeerFeedback.module.less'

import {
  BellOutlined,
  DeleteOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'

import Avatar from 'antd/lib/avatar/avatar'

import moment from 'moment'

moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'seconds',
    ss: '%s seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
})

const { Panel } = Collapse

interface User {
  id: number
  title: string
  name: string
  avatarUrl: string
}

interface ReviewData {
  title1: string
  title2: string
  value: number
  total: number
}

interface Employee {
  id: number
  info: User
  analyticalThinking: number
  attentionToDetail: number
  myCustomCategory: number
}

interface Report {
  id: number
  info: User
  requestedOn: string
  completedOn: string
  action: boolean
}

export type PeerFeedbackProps = {
  title: string
  users?: User[]
  lastSendOut: string
  reviewDate: string
  reviewFilled: string
  filled: string
  reviewData: ReviewData
  employees: Employee[]
  reports: Report[]
}

export const PeerFeedback: FC<PeerFeedbackProps> = ({
  title,
  users,
  lastSendOut,
  reviewDate,
  reviewFilled,
  filled,
  reviewData,
  employees,
  reports,
  ...props
}) => {
  const calPercent = (reviewData: ReviewData) => {
    if (!reviewData || reviewData.total === 0) return [0, 0, 100]
    const p1 = Math.round((reviewData.value / reviewData.total) * 100)
    const p2 = Math.round((reviewData.value / reviewData.total) * 1000) / 10
    const p3 = 100 - p2
    const val = { p1: p1, p2: p2, p3: p3 }
    return [p1, p2, p3]
  }

  const calPercentValue = calPercent(reviewData)

  interface TooltipHeaderColumnProps {
    text: string
  }

  const TooltipHeaderColumn: FC<TooltipHeaderColumnProps> = ({ text }) => {
    return (
      <>
        {text}
        <Tooltip
          placement="topLeft"
          title="Prompt Text"
          className={styles.toolTipMargin}
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </>
    )
  }

  interface UserInfoColumnProps {
    info: User
  }

  const UserInfoColumn: FC<UserInfoColumnProps> = ({ info }) => {
    return (
      <div className={styles.flexDiv}>
        <div className={styles.userAvatar}>
          <Avatar src={info.avatarUrl} />
        </div>
        <div className={styles.flexFullDiv}>
          <div className={styles.userName}>{info.name}</div>
          <div className={styles.userTitle}>{info.title}</div>
        </div>
      </div>
    )
  }

  interface ActionColumnProps {
    action: boolean
  }

  const ActionColumn: FC<ActionColumnProps> = ({ action }) => {
    return action ? (
      <Button
        type="default"
        size="middle"
        className={styles.previewButton}
        icon={<EyeOutlined />}
      >
        {'Preview'}
      </Button>
    ) : null
  }

  const RemoveColumn = () => {
    return <DeleteOutlined />
  }

  const employeeColumns = [
    {
      key: 'info',
      dataIndex: 'info',
      title: 'Employee',
      className: styles.columnInfo,
      width: 364,
      // eslint-disable-next-line react/display-name
      render: (info: User) => <UserInfoColumn info={info} />,
    },
    {
      key: 'analyticalThinking',
      dataIndex: 'analyticalThinking',
      title: <TooltipHeaderColumn text="Analytical thinking" />,
      className: styles.columnAnalyticalThinking,
    },
    {
      key: 'attentionToDetail',
      dataIndex: 'attentionToDetail',
      title: <TooltipHeaderColumn text="Attention to detail" />,
      className: styles.columnAttentionToDetail,
    },
    {
      key: 'myCustomCategory',
      dataIndex: 'myCustomCategory',
      title: 'My custom category',
      className: styles.columnMyCustomCategory,
    },
  ]

  const reportColumns = [
    {
      key: 'info',
      dataIndex: 'info',
      title: 'Reviewer',
      className: styles.columnInfo,
      width: 364,
      // eslint-disable-next-line react/display-name
      render: (info: User) => <UserInfoColumn info={info} />,
    },
    {
      key: 'requestedOn',
      dataIndex: 'requestedOn',
      title: 'Requested on',
    },
    {
      key: 'completedOn',
      dataIndex: 'completedOn',
      title: 'Completed on',
    },
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Actions',
      // eslint-disable-next-line react/display-name
      render: (action: boolean) => <ActionColumn action={action} />,
    },
    {
      title: ' ',
      className: styles.columnRemove,
      width: 66,
      // eslint-disable-next-line react/display-name
      render: () => <RemoveColumn />,
    },
  ]

  interface SummaryRowProps {
    employees: Employee[]
  }

  const SummaryRow: FC<SummaryRowProps> = ({ employees }) => {
    let total1 = 0
    let total2 = 0
    let total3 = 0
    const lens = employees.length

    for (const employee of employees) {
      total1 += employee.analyticalThinking
      total2 += employee.attentionToDetail
      total3 += employee.myCustomCategory
    }

    const avg1 = total1 / lens
    const avg2 = total2 / lens
    const avg3 = total3 / lens

    return (
      <AntTable.Summary.Row>
        <AntTable.Summary.Cell index={1} className={styles.summaryTitleColumn}>
          <div>{'Overall Avg.'}</div>
        </AntTable.Summary.Cell>
        <AntTable.Summary.Cell index={2} className={styles.summaryColumn}>
          <div>{avg1}</div>
        </AntTable.Summary.Cell>
        <AntTable.Summary.Cell index={3} className={styles.summaryColumn}>
          <div>{avg2}</div>
        </AntTable.Summary.Cell>
        <AntTable.Summary.Cell index={4} className={styles.summaryColumn}>
          <div>{avg3}</div>
        </AntTable.Summary.Cell>
      </AntTable.Summary.Row>
    )
  }

  return (
    <div className={styles.peerFeedbackStyles}>
      <div className={styles.mainTitle}>
        <div className={styles.mainTitleText}>{title}</div>
        <div className={styles.remindButtonContainer}>
          <Button
            type="default"
            size="large"
            className={styles.remindButton}
            icon={<BellOutlined />}
          >
            {'Remind'}
          </Button>
        </div>
      </div>
      <div className={styles.avatarList}>
        <AvatarList users={users} />
      </div>
      <div className={styles.subText}>{lastSendOut}</div>
      <div className={styles.subContent}>
        {moment(reviewDate, 'DD/MM/YYYY').fromNow()}({reviewDate})
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewFilledText}>{reviewFilled}</div>
        <Row className={styles.filledPercentContainer}>
          <div className={styles.filledPercentTitle}>
            <div className={styles.filledPercentText}>
              {calPercentValue[0]}% {filled}
            </div>
            <div className={styles.filledNumber}>
              {reviewData.value} {'out of'} {reviewData.total}
            </div>
          </div>
          <div className={styles.filledProgressContainer}>
            <CustomProgress
              percent={calPercentValue[1]}
              rest={calPercentValue[2]}
              labelPercent="Filled"
              labelRest="Pending"
              colorPercent="#65CD98"
              colorRest="#FAAD14"
            />
          </div>
        </Row>
      </div>
      <Collapse className={styles.tableContainer}>
        <Panel
          header="Overview by employees"
          key="1"
          className={styles.tableContent}
        >
          <AntTable
            dataSource={employees}
            columns={employeeColumns}
            rowClassName={styles.employeeRow}
            summary={(employees) => <SummaryRow employees={employees} />}
            pagination={false}
          />
        </Panel>
      </Collapse>
      <Collapse className={styles.tableContainer}>
        <Panel
          header="Individual reports"
          key="2"
          className={styles.tableContent}
        >
          <AntTable
            dataSource={reports}
            columns={reportColumns}
            rowClassName={styles.reportRow}
            pagination={false}
          />
        </Panel>
      </Collapse>
    </div>
  )
}

export default PeerFeedback
