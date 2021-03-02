import React, { FC } from 'react'
import Newsletter from './Newsletter'
import { data } from './mock'

export default {
  component: Newsletter,
  title: 'REPORT/NewsletterCampaignReport',
  args: {
    data,
    TableTitle: 'Subscribers',
    TilesTitle: 'Satatistics',
    ChartTitle: 'High Charts',
    OpensLabel: 'Opens',
    ClicksLabel: 'Clicks',
    OpensColor: '#54B2D3',
    ClicksColor: '#65CD98',
  },
  argTypes: {
    data: {
      control: {
        data: data,
      },
    },
    TableTitle: {
      control: {
        type: 'text',
      },
    },
    TilesTitle: {
      control: {
        type: 'text',
      },
    },
    ChartTitle: {
      control: {
        type: 'text',
      },
    },
    OpensLabel: {
      control: {
        type: 'text',
      },
    },
    ClicksLabel: {
      control: {
        type: 'text',
      },
    },
    OpensColor: {
      control: {
        type: 'color',
      },
    },
    ClicksColor: {
      control: {
        type: 'color',
      },
    },
  },
}

const newsletter: FC = (data) => <Newsletter {...data} />

export const CampaignReport = newsletter.bind({})
