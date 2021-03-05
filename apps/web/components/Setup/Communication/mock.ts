import iconHome from '../../../assets/images/share.svg'
const stepData = [
  {
    step: 1,
    name: 'Check Details',
    imgPath: iconHome,
    isActive: true,
    index: 0,
  },
  {
    step: 2,
    name: 'History',
    imgPath: iconHome,
    isActive: true,
    index: 1,
  },
  {
    step: 3,
    name: 'Consent',
    imgPath: iconHome,
    isActive: false,
    index: 2,
  },
  {
    step: 4,
    name: 'Complete',
    imgPath: iconHome,
    isActive: false,
    index: 3,
  },
]

export const communicationItems = [
  {
    key: '1',
    name: 'Emailm',
    communicationType: 'Email Template',
    createdAt: '23/10/2020',
    status: 'active',
    index: 0,
  },
  {
    key: '2',
    name: 'Botox Medical Form',
    communicationType: 'Latter Template',
    createdAt: '23/10/2020',
    status: 'active',
    index: 1,
  },
  {
    key: '3',
    name: 'Botox Medical Form',
    communicationType: 'SMS Template',
    createdAt: '23/10/2020',
    status: 'active',
    index: 2,
  },
]

export const medicalFormPreviewProps = {
  desktopTemp: 'https://fresha.com/',
  appTemp: 'https://fresha.com/',
  step: 2,
  stepData,
  user: {
    name: 'Sylvia Cole',
    date: 'December 24, 1992',
    src: '',
    tags: ['Botox'],
  },
}
