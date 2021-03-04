import React, { FC } from 'react'
import { Table, Badge, Typography } from 'antd'
import { LetterBadge, LetterBadgeColors } from '../letter-badge/LetterBadge'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { PresetStatusColorType } from 'antd/lib/_util/colors'
const { Text } = Typography

export enum TableRowType {
  Header = 'header',
  Summary = 'summary',
}

export enum TableColAlign {
  Left = 'left',
  Right = 'right',
}

interface TeamReportCellValue {
  value: string
  badge: PresetStatusColorType
}

interface TeamReportRow {
  key: number
  desc: string
  children?: TeamReportRow
  type: TableRowType
  header_num: number
}

interface ColumnTransformer {
  (text: string, record: TeamReportRow): JSX.Element
}

interface TeamReportColumn {
  title: string
  dataIndex: string
  key: number | string
  align: TableColAlign
  render?: ColumnTransformer
}

interface TeamReportParams {
  source: TeamReportRow[]
  columns: TeamReportColumn[]
  loading?: boolean
}

const letter_badges = [
  {
    letter: 'A',
    color: LetterBadgeColors.blue,
  },
  {
    letter: 'B',
    color: LetterBadgeColors.green,
  },
  {
    letter: 'C',
    color: LetterBadgeColors.yellow,
  },
  {
    letter: 'D',
    color: LetterBadgeColors.purple,
  },
]

const transformTableCell = (
  text: string | TeamReportCellValue,
  record: TeamReportRow
): JSX.Element => {
  let badge = <Badge color="transparent" />
  if (typeof text === 'object') {
    badge = <Badge status={text.badge} />
    text = text.value
  }

  let ret = (
    <Text>
      {text} {badge}
    </Text>
  )

  if (record.type && record.type === TableRowType.Header && text) {
    const lb = letter_badges[record.header_num]
    ret = (
      <Text>
        <LetterBadge color={lb.color}>{lb ? lb.letter : '*'}</LetterBadge>
        {text}
      </Text>
    )
  } else if (record.type === TableRowType.Summary) {
    ret = (
      <Text strong>
        {text} {badge}
      </Text>
    )
  }
  return ret
}

export const TeamReport: FC<TeamReportParams> = ({
  source,
  columns,
  loading = false,
}) => {
  columns = columns.map((col) => {
    col.render = transformTableCell
    return col
  })

  return (
    <Table
      dataSource={source}
      columns={columns}
      scroll={{ x: 1200, y: 1200 }}
      loading={loading}
      size="small"
      expandable={{
        expandedRowRender: (record) => record.desc,
        expandIconColumnIndex: 1,
        expandIcon: ({ expanded, onExpand, record }) => {
          return record.children ? (
            expanded ? (
              <UpOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <DownOutlined onClick={(e) => onExpand(record, e)} />
            )
          ) : null
        },
      }}
    />
  )
}
