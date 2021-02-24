import { ReactComponent as Mastercard } from './images/payments/Mastercard.svg'
import { ReactComponent as Maestro } from './images/payments/Maestro.svg'
import { ReactComponent as Visa } from './images/payments/Visa.svg'
import { ReactComponent as Amex } from './images/payments/Amex.svg'
import { ReactComponent as ApplePay } from './images/payments/ApplePay.svg'
import { ReactComponent as GoogleTagManager } from './images/google-tag-manager.svg'
import { ReactComponent as FacebookPixel } from './images/facebook-pixel.svg'

export const defaultBuilderData = {
  apperance: [
    {
      title: 'Show rices',
      checked: false,
      type: 'checkbox',
    },
    {
      title: 'Show category photos',
      checked: true,
      type: 'checkbox',
    },
    {
      title: 'Show times',
      checked: true,
      type: 'checkbox',
    },
    {
      title: 'Show description',
      checked: true,
      type: 'checkbox',
    },
    {
      title: 'Enable custom Privacy Policy',
      checked: true,
      type: 'checkbox',
      advanced: true,
    },
    {
      title: 'Intro message',
      value: '',
      type: 'textfield',
      advanced: true,
    },
    {
      title: 'Outro message',
      value: '',
      type: 'textfield',
      advanced: true,
    },
    {
      title: 'Enable master categories',
      checked: true,
      type: 'checkbox',
      advanced: true,
    },
    {
      title: 'Show map',
      checked: true,
      type: 'checkbox',
      advanced: true,
    },
    {
      title: 'Disable any location',
      checked: true,
      type: 'checkbox',
      advanced: true,
    },
  ],
  booking: [
    {
      title: 'Allow promo codes',
      checked: false,
      type: 'checkbox',
    },
    {
      title: 'Allow cancellations',
      checked: false,
      type: 'checkbox',
    },
    {
      title: 'Allow rescheduling',
      checked: false,
      type: 'checkbox',
    },
    {
      title: 'New booking notification',
      value: 'John Lewis <john@pabau.com>',
      type: 'dropdown',
      items: ['John Lewis <john@pabau.com>'],
    },
    {
      title: 'Book again',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Quick service',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Consultation only',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Past services only',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Book on half',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Auto select anyone',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Minimum advance',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Allow group bookings',
      checked: false,
      type: 'checkbox',
      advanced: true,
      tooltip: 'lorem ipsum',
    },
    {
      title: 'Interval',
      value: '15 minutes',
      type: 'dropdown',
      advanced: true,
      items: [
        '5 minutes',
        '10 minutes',
        '15 minutes',
        '20 minutes',
        '30 minutes',
      ],
    },
    {
      title: 'Minimum advance',
      value: '15 minutes',
      type: 'dropdown',
      advanced: true,
      items: [
        '5 minutes',
        '10 minutes',
        '15 minutes',
        '20 minutes',
        '30 minutes',
      ],
      tooltip: 'lorem ipsum',
    },
  ],
  registration: [
    {
      title: "Disable Facebook's Sign up",
      checked: false,
      type: 'checkbox',
    },
    {
      title: 'Optional Sign up',
      checked: false,
      type: 'checkbox',
    },
  ],
}

export const paymentMethodItems = [
  {
    title: 'Mastercard',
    logo: <Mastercard />,
    selected: false,
  },
  {
    title: 'Maestro',
    logo: <Maestro />,
    selected: false,
  },
  {
    title: 'Visa',
    logo: <Visa />,
    selected: true,
  },
  {
    title: 'Amex',
    logo: <Amex />,
    selected: false,
  },
  {
    title: 'ApplePay',
    logo: <ApplePay />,
    showInstructions: true,
  },
]

export const analyticsSettingsData = [
  {
    title: 'Google Tag Manager',
    description:
      'Send events about certain actions to Google Analytics and create goals based on events to track conversations',
    isEnabled: false,
    isPlus: true,
    logo: <GoogleTagManager />,
  },
  {
    title: 'Facebook Pixel',
    description:
      'Use Facebook Ads Pixel to track events, and create audiences based on their activities',
    isEnabled: false,
    isPlus: true,
    logo: <FacebookPixel />,
  },
]
