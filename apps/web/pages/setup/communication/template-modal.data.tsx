import React from 'react'
import {
  CreateTemplateBar,
  CommunicationTemplatePreview,
  CreateLetterTemplateBar,
} from '@pabau/ui'
import { chooseModalSMSItems } from './choose-modal.data'
// import notificationBannerImage from '../../../assets/images/notification-image.png'
/*--- Template Modal Props ---*/

export const createTemplateStateArgs = {
  Email: {
    templateType: 'email',
    title: 'Create Email Template',
    visible: false,
    // icon?: React.Component
    // onClosed: () => alert(),
    // workingLabel?: string
    workingLabelVisible: false,
    buttonLabel: 'Save',
    // buttonClick?: () => void
    // createTemplateBarProps?: CreateTemplateBarProps
    sidebarComponent: (
      <CreateTemplateBar
        title={
          'This notification automatically sends to clients ahead of their upcoming appointment.'
        }
        inputTextProps={{
          labelName: 'Name',
          placeholder: '',
          onChange: (val: string) => alert(val),
        }}
        linkProps={{
          labelName: 'Learn More',
          href: '/#',
          onClick: () => alert(),
        }}
        inputAreaProps={{
          labelName: 'Message',
          placeholder: 'e.g. Special Offer',
          onChange: ({ target: { value } }) => alert(),
        }}
        chooseTypeGroupProps={{
          items: chooseModalSMSItems,
          onSelected: () => {
            alert()
          },
        }}
      />
    ),
    contentComponent: <CommunicationTemplatePreview />,
  },
  SMS: {
    templateType: 'sms',
    title: 'Create SMS Template',
    visible: false,
    // icon?: React.Component
    onClosed: () => alert(),
    // workingLabel?: string
    workingLabelVisible: false,
    buttonLabel: 'Save',
    // buttonClick?: () => void
    // createTemplateBarProps?: CreateTemplateBarProps
    sidebarComponent: (
      <CreateTemplateBar
        title={
          'This notification automatically sends to clients ahead of their upcoming appointment.'
        }
        inputTextProps={{
          labelName: 'Name',
          placeholder: '',
          onChange: (val: string) => alert(val),
        }}
        linkProps={{
          labelName: 'Learn More',
          href: '/#',
          onClick: () => alert(),
        }}
        inputAreaProps={{
          labelName: 'Message',
          placeholder: 'e.g. Special Offer',
          onChange: ({ target: { value } }) => alert(),
        }}
        chooseTypeGroupProps={{
          items: chooseModalSMSItems,
          onSelected: () => {
            alert()
          },
        }}
      />
    ),
    contentComponent: <CommunicationTemplatePreview />,
  },
  Letter: {
    templateType: 'letter',
    title: 'IPL Treatment Record (Clone)',
    visible: false,
    // icon?: React.Component
    onClosed: () => alert(),
    // workingLabel?: string
    workingLabelVisible: false,
    buttonLabel: 'Save',
    // buttonClick?: () => void
    // createTemplateBarProps?: CreateTemplaeBarProps
    sidebarComponent: (
      <CreateLetterTemplateBar />
      // <CreateTemplateBar
      //   title={
      //     'This notification automatically sends to clients ahead of their upcoming appointment.'
      //   }
      //   inputTextProps={{
      //     labelName: 'Name',
      //     placeholder: '',
      //     onChange: (val: string) => alert(val),
      //   }}
      //   linkProps={{
      //     labelName: 'Learn More',
      //     href: '/#',
      //     onClick: () => alert(),
      //   }}
      //   inputAreaProps={{
      //     labelName: 'Message',
      //     placeholder: 'e.g. Special Offer',
      //     onChange: ({ target: { value } }) => alert(),
      //   }}
      //   chooseTypeGroupProps={{
      //     items: chooseModalSMSItems,
      //     onSelected: () => {
      //       alert()
      //     },
      //   }}
      // />
    ),
    contentComponent: <CommunicationTemplatePreview />,
  },
}

/*--- Template Modal Props End ---*/
