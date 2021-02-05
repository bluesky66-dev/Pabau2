import React from 'react'
import WebinarModalComponent from './WebinarModal'
import backgroundImage from '../../assets/images/footer.png'

export default {
  component: WebinarModalComponent,
  title: 'Modals/WebinarModal',
  args: {
    visible: false,
    title: 'Stock Management',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    description:
      'This training session is to kick start your Pabau jorney, suitable for anyone starting off with the system, fron desh, practioers and anyone who nneds to know how to book. It covers all the core features you will need on a daily basisss, to ensure you are able to work at ease with the system.',
    backgroundImage,
    buttonType: 'join',
  },
}

const WebinarModalStory = ({ ...args }) => <WebinarModalComponent {...args} />

export const WebinarModal = WebinarModalStory.bind({})
