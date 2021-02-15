import React from 'react'
import { Button } from '@pabau/ui'
import { LabsDashboard } from './LabsDashboard'

const columns = [
  {
    title: 'Lab No',
    dataIndex: 'labNo',
    visible: true,
  },
  {
    title: 'Client',
    dataIndex: 'client',
    visible: true,
  },
  {
    title: 'Test',
    dataIndex: 'test',
    visible: true,
  },
  {
    title: 'Requested',
    dataIndex: 'requested',
    visible: true,
  },
  {
    title: 'Last Update',
    dataIndex: 'lastUpdate',
    visible: true,
  },
  {
    title: 'Lab',
    dataIndex: 'lab',
    visible: true,
  },
  {
    title: 'Requester',
    dataIndex: 'requester',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    visible: true,
    render: (status: string | number) => {
      return (
        <Button type="default" size="small">
          {status}
        </Button>
      )
    },
  },
]

const breadcrumbItems = [
  {
    breadcrumbName: 'Clients',
    path: '',
  },
  {
    breadcrumbName: 'Labs',
    path: '',
  },
]

export default {
  title: 'UI/LabsDashboard',
  component: LabsDashboard,
  args: {
    apiUrl: 'https://api.txtlocal.com/get_history_api/',
    notification: true,
    notificationTitle: 'Integrate your Lab',
    notificationImagePath: 'static/media/notification.8ad6bbd7.png',
    notificationDescription: `We noticed that you are processing lab results, however have not
    setup integration for “UD Labs”. To receive these automatically.
    Just have your lab provider send those results to
    labs+482@pabau.com, and then you can automatically match the results
    against the patient.`,
    breadcrumbItems: breadcrumbItems,
    pageTitle: 'Labs',
    columns: columns,
    tableTitle: 'Tablesheet',
  },
}

const LabsDashboardStory = ({ ...args }) => <LabsDashboard {...args} />

export const LabsDashboardPage = LabsDashboardStory.bind({})
LabsDashboardPage.args = {}
