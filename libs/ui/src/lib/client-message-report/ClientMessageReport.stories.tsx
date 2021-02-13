import React from 'react'
import { ClientMessageReport } from './ClientMessageReport'
import { Button } from '@pabau/ui'

export default {
  title: 'UI/ClientMessageReport',
  component: ClientMessageReport,
  args: {
    reportTitle: 'Client Messages',
    reportVisibility: false,
    apiUrl: 'https://api.txtlocal.com/get_history_api/',
    start: 0,
    limit: 10,
  },
  argTypes: {
    reportVisibility: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const columns = [
  {
    title: 'Time sent',
    dataIndex: 'datetime',
    visible: true,
  },
  {
    title: 'Client',
    dataIndex: 'sender',
    visible: true,
  },
  {
    title: 'Ref',
    dataIndex: 'customID',
    visible: true,
  },
  {
    title: 'Destination',
    dataIndex: 'number',
    visible: true,
  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    visible: true,
  },
  {
    title: 'Type',
    dataIndex: 'id',
    visible: true,
  },
  {
    title: 'Content',
    dataIndex: 'content',
    visible: true,
    render: (content) => {
      return <span style={{ maxWidth: '200px' }}>{content}</span>
    },
  },
  {
    title: '',
    dataIndex: 'status',
    visible: true,
    render: (status) => {
      return (
        <Button type="default" size="small">
          {status}
        </Button>
      )
    },
  },
]

const ClientMessageReportStory = ({ ...args }) => (
  <ClientMessageReport {...args} />
)

export const BasicReport = ClientMessageReportStory.bind({})
BasicReport.args = {
  columns,
}
