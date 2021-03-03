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
    OpensColor: 'rgba(84, 178, 211, 0.40)',
    ClicksColor: 'rgba(101, 205, 152, 0.40)',
    ShowSizeChanger: true,
    ModalHeader: true,
    ModalVisible: true,
    ModalTitle: 'FTT Skin Clinics update',
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
    ShowSizeChanger: {
      control: {
        type: 'boolean',
      },
    },
    ModalHeader: {
      control: {
        type: 'boolean',
      },
    },
    ModalVisible: {
      control: {
        type: 'boolean',
      },
    },
    ModalTitle: {
      control: {
        type: 'text',
      },
    },
  },
}

const newsletter: FC = (data) => <Newsletter {...data} />

export const CampaignReport = newsletter.bind({})
