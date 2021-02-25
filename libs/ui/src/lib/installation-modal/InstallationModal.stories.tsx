import React from 'react'
import InstallationModalComponent from './InstallationModal'
import logo from '../../assets/images/logo.svg'
import installationModalImage from '../../assets/images/installationModalImage.png'
import installationModalWindowImage from '../../assets/images/installationModalWindowImage.png'
import message from '../../assets/images/message.svg'
import send from '../../assets/images/send.svg'
import inbox from '../../assets/images/inbox.svg'
import integrationUser from '../../assets/images/integrationUser.svg'

export default {
  component: InstallationModalComponent,
  title: 'Modals/InstallationModal',
  args: {
    visible: true,
    logo,
    title: 'Pabau Webinars',
    description:
      'Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  tempor incididunt ut labore et dolore magna aliqua.',
    longDescription:
      'Long Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    mobileViewDescription:
      'Mobile View Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    webViewDescription:
      'Web View Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    installationModalImage,
    installationModalWindowImage,
    installed: 0,
    worksWith: [
      {
        key: 0,
        title: 'Outbound',
        subTitle: 'Send in outbound messages',
        logoImage: send,
      },
      {
        key: 1,
        title: 'Messenger',
        subTitle: 'Add to Messenger home',
        logoImage: message,
      },
      {
        key: 2,
        title: 'Inbox',
        subTitle: 'Send in conversations',
        logoImage: inbox,
      },
      {
        key: 3,
        title: 'Operator',
        subTitle: 'Use as follow up actions',
        logoImage: integrationUser,
      },
    ],
    categories: ['Lead capture', 'Phone & video'],
  },
  argTypes: {
    worksWith: { control: { type: 'object' } },
  },
}

const InstallationModalStory = ({
  visible,
  logo,
  title,
  description,
  longDescription,
  mobileViewDescription,
  webViewDescription,
  installationModalImage,
  installationModalWindowImage,
  installed,
  worksWith,
  categories,
}) => (
  <InstallationModalComponent
    visible={visible}
    title={title}
    logo={logo}
    description={description}
    longDescription={longDescription}
    mobileViewDescription={mobileViewDescription}
    webViewDescription={webViewDescription}
    installationModalImage={installationModalImage}
    installationModalWindowImage={installationModalWindowImage}
    installed={installed}
    worksWith={worksWith}
    categories={categories}
  />
)

export const InstallationModal = InstallationModalStory.bind({})
