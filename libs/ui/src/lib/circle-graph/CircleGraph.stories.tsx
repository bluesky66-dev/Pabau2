import React from 'react'
import CircleGraph from './CircleGraph'

export default {
  component: CircleGraph,
  title: 'Charts/CircleGraph',
}

const CircleGraphStory = ({ ...args }) => <CircleGraph {...args} />

export const KPIExlorer = CircleGraphStory.bind({})
KPIExlorer.args = {
  chartData: [
    {
      id: 1,
      targetName: 'Shifts',
      type: 'B',
      data: [
        {
          name: 'Days Worked',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Days Off',
          revenue: 100,
          target: 46,
        },
      ],
    },
    {
      id: 2,
      targetName: 'kpis',
      type: 'D',
      data: [
        {
          name: 'Services',
          revenue: 12,
          target: 46,
        },
        {
          name: 'Products',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Vouchers',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Packages',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Client',
          revenue: 100,
          target: 146,
        },
        {
          name: 'Rebook',
          revenue: 100,
          target: 146,
        },
        {
          name: 'Utilisation',
          revenue: 100,
          target: 146,
        },
        {
          name: 'Review Score',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Care Factor',
          revenue: 100,
          target: 46,
        },
      ],
    },
    {
      id: 3,
      targetName: 'Products',
      type: 'C',
      data: [
        {
          name: 'Face Creams',
          revenue: 100,
          target: 146,
        },
        {
          name: 'Obagi',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Skin Creams',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Whitening',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Lipstick',
          revenue: 100,
          target: 46,
        },
      ],
    },
    {
      id: 5,
      targetName: 'Services',
      type: 'C',
      data: [
        {
          name: 'Physio',
          revenue: 100,
          target: 432,
        },
        {
          name: 'Peels',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Facials',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Surgical',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Injectables',
          revenue: 100,
          target: 150,
        },
        {
          name: 'Consultations',
          revenue: 100,
          target: 150,
        },
        {
          name: 'Laser',
          revenue: 100,
          target: 150,
        },
      ],
    },
    {
      id: 6,
      targetName: 'Gift vouchers',
      type: 'C',
      data: [
        {
          name: 'Vouchers',
          revenue: 100,
          target: 146,
        },
      ],
    },
    {
      id: 7,
      targetName: 'Packages',
      data: [
        {
          name: 'Peels',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Dentistry',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Fat Freezing',
          revenue: 100,
          target: 46,
        },
        {
          name: 'Laser',
          revenue: 100,
          target: 46,
        },
      ],
    },
  ],
}
