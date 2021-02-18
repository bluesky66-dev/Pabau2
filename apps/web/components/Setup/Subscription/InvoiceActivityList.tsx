import React, { FC } from 'react'
import { Typography } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { Button, Table, Notification, NotificationType } from '@pabau/ui'

import { InvoiceData } from '../../../mocks/Subscriptions'
import EmailSendButton from './EmailSendButton'

const invoiceColumns = [
  {
    title: 'Invoice Date',
    dataIndex: 'date',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Invoice',
    dataIndex: 'number',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: '',
    dataIndex: 'buttonGp',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: () => (
      <div>
        <EmailSendButton
          style={{ marginRight: 16 }}
          onClick={() =>
            Notification(
              NotificationType.success,
              'This invoice has been sent to accounts@clinic.com'
            )
          }
        />
        <Button>
          <EyeOutlined /> Preview
        </Button>
      </div>
    ),
  },
]

const InvoiceActivity: FC = () => {
  const { Text, Paragraph } = Typography

  return (
    <div>
      <Table
        pagination={false}
        columns={invoiceColumns}
        dataSource={InvoiceData as never[]}
      />
      <div style={{ margin: 24 }}>
        <Paragraph type="secondary">
          SHOWING <Text>2</Text> RESULTS FROM <Text>2</Text>
        </Paragraph>
      </div>
    </div>
  )
}

export default InvoiceActivity
