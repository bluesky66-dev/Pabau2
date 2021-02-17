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
      target: 'Services',
      data: [
        {
          name: 'Laser',
        },
        {
          name: 'Consultations',
        },
        {
          name: 'Injectables',
        },
        {
          name: 'surgical',
        },
      ],
    },
    {
      target: 'Products',
      data: [
        {
          name: 'Lipstick',
        },
        {
          name: 'Whitening',
        },
        {
          name: 'Skin Creams',
        },
        {
          name: 'Obagi',
        },
      ],
    },
    {
      target: 'Packages',
    },
    {
      target: 'Vouchers',
    },
    {
      target: 'Shifts',
      type: 'B',
    },
    {
      target: 'kpis',
      type: 'D',
    },
  ],
}
