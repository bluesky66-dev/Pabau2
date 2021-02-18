import React from 'react'
import SubscriptionInfo from './SubscriptionInfo'

export default {
  component: SubscriptionInfo,
  title: 'UI/SubscriptionInfo',
  args: {
    subscriptionName: 'Startup',
    inTrial: true,
    trialDaysRemaining: 4,
    goPlusActive: true,
    goPlusStartDate: new Date('03-21-2020'),
    teamPlusActive: true,
    teamPlusStartDate: new Date('03-21-2020'),
  },
  argTypes: {
    subscriptionName: {
      control: {
        type: 'select',
        selected: 'Startup',
        options: [
          'Trial',
          'Startup',
          'Solo',
          'Medium',
          'Group',
          'Enterprise',
          'Bespoke',
        ],
      },
    },
    inTrial: { control: { type: 'boolean', optional: true } },
  },
  onChange: { action: 'onChange' },
}

const SubscriptionInfoStory = ({ ...args }) => {
  return <SubscriptionInfo subscriptionName={args.subscriptionName} {...args} />
}

export const subscriptionInfo = SubscriptionInfoStory.bind({})
