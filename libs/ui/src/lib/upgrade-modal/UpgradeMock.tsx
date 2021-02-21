import React from 'react'
import {
  TeamOutlined,
  HeatMapOutlined,
  ContainerOutlined,
  FormOutlined,
  AreaChartOutlined,
  BookOutlined,
  PieChartOutlined,
  DashboardOutlined,
} from '@ant-design/icons'
import { ReactComponent as Shuffle } from '../../assets/images/shuffle.svg'
import { ReactComponent as ApplicationSave } from '../../assets/images/application-save.svg'
import { ReactComponent as ApplicationBook } from '../../assets/images/application-book.svg'

export const modalTypes = [
  { key: 'marketing', value: 'Marketing' },
  { key: 'care', value: 'Care' },
  { key: 'staff', value: 'Staff' },
  { key: 'intelligence', value: 'Intelligence' },
]

export const modalContent = {
  marketing: {
    title: 'Upgrade to Marketing Plus',
    plan: 'from $499.00/month',
    description:
      'We’ll ask you about your needs, help you understand how pricing works, and get you started with new features.',
    btnText: 'Chat with us',
    sectionTitle: 'Scale with advanced workflows and security',
    sectionData: [
      {
        icon: <ContainerOutlined />,
        title: '100+ Newsletters',
        description:
          'You get 100+ ready-to-use templates for your newsletter campaigns.',
      },
      {
        icon: <HeatMapOutlined />,
        title: 'Reputation Manager',
        description: 'Integrate all your reviews into one place.',
      },
      {
        icon: <FormOutlined />,
        title: 'Smart Surveys',
        description: 'Choose from unique survey templates.',
      },
      {
        icon: <ApplicationBook />,
        title: 'Multiple Languages',
        description:
          'Stand out for your competitors and tailor your communications specific to your clients native language.',
      },
    ],
    sectionUpgradeTitle: 'Everything you get with the upgrade',
    sectionUpgradeData: [
      'Unlimited newsletters',
      'Review Incentives',
      'Multilingual templates',
      'Multilingual notifications',
      'Multilingual surveys',
      'Doctify integration',
      'Trustpilot integration',
      'Facebook reviews',
      'Google reviews',
      'Google Tag Manager',
      'Facebook Pixel',
      'Custom voucher templates',
      'Zapier Integration',
      'Recall insights',
      'Newsletter Insights',
      'Google Reviews',
    ],
    linkText: 'Compare all plans',
  },
  care: {
    title: 'Upgrade to Care Plus',
    plan: 'from $599.00/month',
    description:
      'We’ll ask you about your needs, help you understand how pricing works, and get you started with new features.',
    btnText: 'Chat with us',
    sectionTitle: 'Scale with advanced workflows and security',
    sectionData: [
      {
        icon: <Shuffle />,
        title: 'Custom Pathways',
        description:
          'Custom pathways allow for building tailored journeys specific to a particular service or patient.',
      },
      {
        icon: <TeamOutlined />,
        title: 'Smart Share',
        description:
          'With smart share you can create portrait photos with your before and after pictures and upload them directly to Facebook, Instagram or pretty much anywhere else in a click of a button.',
      },
      {
        icon: <ApplicationSave />,
        title: 'Pabau care',
        description: 'Automate actions with customizable conversational bots.',
      },
      {
        icon: <ApplicationBook />,
        title: 'Multi Lingual',
        description: 'Support customers with a multilingual help center.',
      },
    ],
    sectionUpgradeTitle: 'Everything you get with the upgrade',
    sectionUpgradeData: [
      'Multiple Questionnaires',
      'Inbound email',
      'Video Aftercare',
      'Link aftercare products',
      'One touch purchases',
      'Promotions',
      'Multilingual Journey',
      'Unique templates',
      'Video conferencing (iPad)',
    ],
    linkText: 'Compare all plans',
  },
  staff: {
    title: 'Upgrade to Team Plus',
    plan: 'from $699.00/month',
    description:
      'We’ll ask you about your needs, help you understand how pricing works, and get you started with new features.',
    btnText: 'Chat with us',
    sectionTitle: 'Scale with advanced workflows and security',
    sectionData: [
      {
        icon: <Shuffle />,
        title: 'Set team targets',
        description:
          'Gain useful insights into the performance of your Financial and Non-financial KPIs by setting targets.',
      },
      {
        icon: <ApplicationSave />,
        title: 'Performance Management',
        description:
          'Employees and managers can set and track there end of year appraisals, a long as they request feedback from peers.',
      },
      {
        icon: <TeamOutlined />,
        title: 'Commissions',
        description:
          'Track trends in employee performance and behaviour directly from the employee report.',
      },
      {
        icon: <ApplicationBook />,
        title: 'Applicant Tracking',
        description: 'A hiring experience they’ll tell their friends about.',
      },
    ],
    sectionUpgradeTitle: 'Everything you get with the upgrade',
    sectionUpgradeData: [
      'KPI Explorer',
      'Share & Upload Documents',
      'Lead groups',
      'Peer reviews',
      'Manager reviews',
      'Appraisal reminders',
      'Self Review',
    ],
    linkText: 'Compare all plans',
  },
  intelligence: {
    title: 'Upgrade to Intelligence Plus',
    plan: 'from $799.00/month',
    description:
      'We’ll ask you about your needs, help you understand how pricing works, and get you started with new features.',
    btnText: 'Chat with us',
    sectionTitle: 'Scale with advanced workflows and security',
    sectionData: [
      {
        icon: <DashboardOutlined />,
        title: 'Unlock Dashboards',
        description:
          'Understand the financial impact of your business, know which decisions to make, and when to take action.',
      },
      {
        icon: <AreaChartOutlined />,
        title: 'Report Graphs',
        description:
          'Choose from a range of ready-to-use charts, graphs and visualisations.',
      },
      {
        icon: <PieChartOutlined />,
        title: 'Trends',
        description:
          'Trend historical data to view business performance over time.',
      },
      {
        icon: <BookOutlined />,
        title: 'Benchmarks',
        description:
          'Receive industry metrics and see how you compare against the sector with Pabau’s benchmarking.',
      },
    ],
    sectionUpgradeTitle: 'Everything you get with the upgrade',
    sectionUpgradeData: [
      'Marketing dashboard',
      'Leads dashboard',
      'Team dashboard',
      'Business dashboard',
    ],
    linkText: 'Compare all plans',
  },
}

export const title = 'Upgrade to Accelerate plan'
export const plan = 'from $499.00/month'
export const description =
  'We’ll ask you about your needs, help you understand how pricing works, and get you started with new features.'
export const btnText = 'Chat with us'
export const sectionTitle = 'Scale with advanced workflows and security'
export const sectionData = [
  {
    icon: <TeamOutlined />,
    title: 'Collaborate as a team',
    description: 'Drive faster responses with shared team inboxes',
  },
  {
    icon: <Shuffle />,
    title: 'Automate team workflows',
    description: 'Leverage powerful assignment rules to automate workflows',
  },
  {
    icon: <ApplicationSave />,
    title: 'Reduce workload with bots',
    description: 'Automate actions with customizable conversational bots',
  },
  {
    icon: <ApplicationBook />,
    title: 'Provide global support',
    description: 'Support customers with a multilingual help center',
  },
]
export const sectionUpgradeTitle = 'Everything you get with the upgrade'
export const sectionUpgradeData = [
  'Create private articles',
  'Reactions',
  'Audience targeting',
  'Round robin assignment',
  'Button triggers',
  'Salesforce integration',
  'Follow up actions',
  'Serve articles to logged-in users',
  'Bot identity',
  'Target inbound conversations',
  'Bot Inbox',
  'Multiple team inboxes',
  'Auto-close abandoned bot conversations',
  'Team office hours',
  'Preview',
  'Twitter integration',
  'Reporting',
  'Unbranded messaging',
  'Bot rules',
  'Remove intercom branding',
  'Bot templates',
  'Zendesk integration',
  'Video bots',
  'Customizable reporting charts',
  'Unlimited bots',
  'Conversation attributes',
  'Facebook integration',
  'Conversational Insights',
  'Priority rules',
  'Upfront collection bot',
  'Assignment rules',
  'Effectiveness report',
  'Support 38 languages',
  'Team performance report',
  'Sales team performance reports',
  'Duplicate conversations bot',
]
export const linkText = 'Compare all plans'
