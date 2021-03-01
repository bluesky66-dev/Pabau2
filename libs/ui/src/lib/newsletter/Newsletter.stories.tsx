import React, { FC } from 'react'
import Newsletter from './Newsletter'
import { data } from './mock'

export default {
  component: Newsletter,
  title: 'REPORT/NewsletterCampaignReport',
  args: {
    data,
  },
  argTypes: {
    data: {
      control: {
        type: [],
      },
    },
  },
}

const newsletter: FC = (data) => <Newsletter {...data} />

export const CampaignReport = newsletter.bind({})
