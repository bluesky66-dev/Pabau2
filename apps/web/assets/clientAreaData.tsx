import { ShareAltOutlined, HomeOutlined, EditOutlined } from '@ant-design/icons'
export const defaultBuilderSetting = {
  appearance: {
    backgroundColor: 'strong',
    iconColor: '',
    headerColor: '',
    footerColor: '',
  },
  registrationFields: [
    {
      fieldName: 'Saluation',
      visible: false,
      required: false,
    },
    {
      fieldName: 'First Name',
      visible: true,
      required: true,
    },
    {
      fieldName: 'Last Name',
      visible: true,
      required: true,
    },
    {
      fieldName: 'Gender',
      visible: true,
      required: true,
    },
    {
      fieldName: 'Date of Birth',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Mobile',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Address',
      visible: false,
      required: false,
    },
    {
      fieldName: 'City',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Country',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Post code',
      visible: false,
      required: false,
    },
    {
      fieldName: 'How did you hear about this?',
      visible: false,
      required: false,
    },
  ],
  customFields: [
    {
      fieldName: 'GP Name',
      visible: false,
      required: false,
    },
    {
      fieldName: 'GP Address',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Gender',
      visible: false,
      required: false,
    },
    {
      fieldName: 'Test MC',
      visible: false,
      required: false,
    },
  ],
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
