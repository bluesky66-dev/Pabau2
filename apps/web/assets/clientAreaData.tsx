import {
  ShareAltOutlined,
  HomeOutlined,
  EditOutlined,
  LaptopOutlined,
  ScheduleOutlined,
  ShoppingOutlined,
  GiftOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  MoneyCollectOutlined,
  PayCircleOutlined,
  TagsOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
export const defaultBuilderSetting = {
  appearance: {
    backgroundColor: 'strong',
    iconColor: '',
    headerColor: '',
    footerColor: '',
  },
  registrationFields: [
    {
      fieldName: 'Salutation',
      label: 'Salutation',
      visible: false,
      required: false,
      key: 1,
    },
    {
      fieldName: 'First Name',
      label: 'First Name',
      visible: true,
      required: true,
      disabled: true,
      key: 2,
    },
    {
      fieldName: 'Last Name',
      label: 'Last Name',
      visible: true,
      required: true,
      disabled: true,
      key: 3,
    },
    {
      fieldName: 'Gender',
      label: 'Gender',
      visible: false,
      required: false,
      key: 4,
    },
    {
      fieldName: 'Date of Birth',
      label: 'Date of Birth',
      visible: false,
      required: false,
      key: 5,
    },
    {
      fieldName: 'Mobile',
      label: 'Mobile',
      visible: false,
      required: false,
      key: 6,
    },
    {
      fieldName: 'Address',
      label: 'Address',
      visible: false,
      required: false,
      key: 7,
    },
    {
      fieldName: 'City',
      label: 'City',
      visible: false,
      required: false,
      key: 8,
    },
    {
      fieldName: 'Country',
      label: 'Country',
      visible: false,
      required: false,
      key: 9,
    },
    {
      fieldName: 'Post code',
      label: 'Post code',
      visible: false,
      required: false,
      key: 10,
    },
    {
      fieldName: 'How did you hear about us?',
      label: 'How did you hear about us?',
      visible: false,
      required: false,
      key: 11,
    },
  ],
  customFields: [
    {
      fieldName: 'GP Name',
      label: 'GP Name',
      visible: false,
      required: false,
      key: 1,
    },
    {
      fieldName: 'GP Address',
      label: 'GP Address',
      visible: false,
      required: false,
      key: 2,
    },
    {
      fieldName: 'Gender',
      label: 'Gender',
      visible: false,
      required: false,
      key: 3,
    },
    {
      fieldName: 'Test MC',
      label: 'Test MC',
      visible: false,
      required: false,
      key: 4,
    },
  ],
}

export const defaultWidgetsData = {
  features: {
    title: 'Core Features',
    description:
      'Choose whick core features you wish to enable to all of your clients',
    widgets: [
      {
        id: 0,
        icon: <LaptopOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Online bookings',
        description:
          'Online bookings allowing customers to register and book appointments online',
      },
      {
        id: 1,
        icon: <ScheduleOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Class sign up',
        description: 'Allow clients to sign up to your classes',
      },
      {
        id: 2,
        icon: <ShoppingOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Packages',
        description: 'Clients can purchaise package online',
      },
      {
        id: 3,
        icon: <GiftOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Gift vouchers',
        description:
          'Embed online bookings allowing customers to register and book appointments online',
      },
    ],
  },
  profile: {
    title: 'Client Profile',
    description:
      'This section allows you to determine what logged in users have access to',
    widgets: [
      {
        id: 0,
        icon: <ExperimentOutlined />,
        isPlus: true,
        isEnabled: false,
        title: 'My labs',
        description: 'Patients can view their labs online',
      },
      {
        id: 1,
        icon: <FileTextOutlined />,
        isPlus: true,
        isEnabled: true,
        title: 'My documents',
        description:
          'Publish photos/documents for clients to simplify view and share via your Pabau Connect',
      },
      {
        id: 2,
        icon: <MoneyCollectOutlined />,
        isPlus: true,
        isEnabled: false,
        title: 'Invoices',
        description: 'Patients can view their labs online',
      },
      {
        id: 3,
        icon: <PayCircleOutlined />,
        isPlus: false,
        isEnabled: false,
        title: 'Make Payment',
        description: 'Some description here',
      },
      {
        id: 4,
        icon: <ShoppingOutlined />,
        isPlus: false,
        isEnabled: false,
        title: 'My Packages',
        description: 'Patients can view their labs online',
      },
      {
        id: 5,
        icon: <TagsOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Loyalty',
        description:
          'Embed your card system into your connect account allowing your customers to check and redeem their points online',
      },
    ],
  },
  other: {
    title: 'Other',
    description:
      'Allow your clients to see extra information about your business',
    widgets: [
      {
        id: 0,
        icon: <PhoneOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Call us',
        description:
          'Allows users to initiate a phone call to your business through their mobiles or desktops',
      },
      {
        id: 1,
        icon: <ClockCircleOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Openings',
        description: 'Display your opening hours on your Pabau Connect website',
      },
      {
        id: 2,
        icon: <GlobalOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Website',
        description: 'Allows users to jump straight to your website',
      },
      {
        id: 3,
        icon: <EnvironmentOutlined />,
        isPlus: false,
        isEnabled: true,
        title: 'Location',
        description: 'Displays a map of your location',
      },
    ],
  },
}

export const defaultStepData = [
  {
    step: 0,
    name: 'Basics',
    img: <HomeOutlined />,
    isActive: true,
    index: 0,
  },
  {
    step: 1,
    name: 'Widget',
    img: <EditOutlined />,
    isActive: false,
    index: 1,
  },
  {
    step: 2,
    name: 'Share',
    img: <ShareAltOutlined />,
    isActive: false,
    index: 2,
  },
]

export const defaultShareData = {
  clientPortalURL: 'https://live.loremipsum.com',
  addWordpressPlugin: '',
  sendCampaign: '',
  addConfirmationAndReminder: '',
  learnMore: '',
}
