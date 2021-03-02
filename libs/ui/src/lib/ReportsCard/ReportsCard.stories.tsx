import React from 'react'
import { ReportsCard } from './ReportsCard'

export default {
  component: ReportsCard,
  title: 'ReportsCard',
  args: {
    catHeading: 'Staff',
    description:
      'Monitor your overall finances including sales, refunds, taxes, payments and more',
    graphDescription: 'Utilization by week',
    chartLabel: '%',
  },

  argTypes: {
    catHeading: {
      control: {
        type: 'text',
      },
    },

    description: {
      control: {
        type: 'text',
      },
    },

    graphDescription: {
      control: {
        type: 'text',
      },
    },

    chartLabel: {
      control: {
        type: 'text',
      },
    },
  },
}

const ReportsCardStory: any = ({ ...args }) => <ReportsCard {...args} />

export const Basic = ReportsCardStory.bind({})
Basic.args = {
  reports: [
    {
      id: 1,
      reportCode: 'FI000',
      reportName: 'Daily Sales',
      isNew: true,
      favorite: true,
    },

    {
      id: 2,
      reportCode: 'FI001',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 3,
      reportCode: 'FI002',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 4,
      reportCode: 'FI003',
      reportName: 'Receipts by Employee (detail...',
      isNew: true,
      favorite: true,
    },
    {
      id: 5,
      reportCode: 'FI004',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },

    {
      id: 6,
      reportCode: 'FI005',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 7,
      reportCode: 'FI006',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 8,
      reportCode: 'FI007',
      reportName: 'Receipts by Employee (detail...',
      isNew: false,
      favorite: true,
    },

    {
      id: 9,
      reportCode: 'FI008',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },

    {
      id: 10,
      reportCode: 'FI009',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },
  ],
  graphData: [
    ['Jan', 20],
    ['Feb', 5],
    ['Mar', 12],
    ['Apr', 20],
    ['May', 5],
    ['Jun', 12],
    ['Jul', 20],
    ['Aug', 5],
    ['Sep', 12],
    ['Oct', 20],
    ['Nov', 5],
    ['Dec', 12],
  ],
}

export const FewReports = ReportsCardStory.bind({})
FewReports.args = {
  catHeading: 'Clients',
  graphDescription: 'New clients by week',
  chartLabel: 'int',
  reports: [
    {
      id: 1,
      reportCode: 'FI000',
      reportName: 'Daily Sales',
      isNew: true,
      favorite: true,
    },

    {
      id: 2,
      reportCode: 'FI001',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 3,
      reportCode: 'FI002',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 4,
      reportCode: 'FI003',
      reportName: 'Receipts by Employee (detail...',
      isNew: true,
      favorite: true,
    },
    {
      id: 5,
      reportCode: 'FI004',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },
  ],
  graphData: [
    ['Jan', 20],
    ['Feb', 5],
    ['Mar', 12],
    ['Apr', 20],
    ['May', 5],
    ['Jun', 12],
    ['Jul', 20],
    ['Aug', 5],
    ['Sep', 12],
    ['Oct', 20],
    ['Nov', 5],
    ['Dec', 12],
  ],
}

export const ManyReports = ReportsCardStory.bind({})
ManyReports.args = {
  catHeading: 'Sales',
  graphDescription: 'Revenue by week',
  chartLabel: '£',
  reports: [
    {
      id: 1,
      reportCode: 'FI000',
      reportName: 'Daily Sales',
      isNew: true,
      favorite: true,
    },

    {
      id: 2,
      reportCode: 'FI001',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 3,
      reportCode: 'FI002',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 4,
      reportCode: 'FI003',
      reportName: 'Receipts by Employee (detail...',
      isNew: true,
      favorite: true,
    },
    {
      id: 5,
      reportCode: 'FI004',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },

    {
      id: 6,
      reportCode: 'FI005',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 7,
      reportCode: 'FI006',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 8,
      reportCode: 'FI007',
      reportName: 'Receipts by Employee (detail...',
      isNew: false,
      favorite: true,
    },

    {
      id: 9,
      reportCode: 'FI008',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },

    {
      id: 10,
      reportCode: 'FI009',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 11,
      reportCode: 'FI010',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 12,
      reportCode: 'FI011',
      reportName: 'Receipts by Employee (detail...',
      isNew: false,
      favorite: true,
    },

    {
      id: 13,
      reportCode: 'FI023',
      reportName: 'Daily Sales',
      isNew: false,
      favorite: true,
    },

    {
      id: 14,
      reportCode: 'FI013',
      reportName: 'Daily Reconciliation',
      isNew: true,
      favorite: false,
    },

    {
      id: 15,
      reportCode: 'FI014',
      reportName: 'Daily Payments',
      isNew: false,
      favorite: false,
    },

    {
      id: 16,
      reportCode: 'FI015',
      reportName: 'Receipts by Employee (detail...',
      isNew: false,
      favorite: true,
    },
  ],
  graphData: [
    ['Jan', 20],
    ['Feb', 5],
    ['Mar', 12],
    ['Apr', 20],
    ['May', 5],
    ['Jun', 12],
    ['Jul', 20],
    ['Aug', 5],
    ['Sep', 12],
    ['Oct', 20],
    ['Nov', 5],
    ['Dec', 12],
  ],
}

export const Custom = ReportsCardStory.bind({})
Custom.args = {
  catHeading: 'Custom',
  graphDescription: 'Revenue by week',
  chartLabel: '0',
}
