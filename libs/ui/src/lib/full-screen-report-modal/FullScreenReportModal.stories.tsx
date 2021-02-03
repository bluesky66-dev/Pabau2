import React from 'react'
import FullScreenReportModal from './FullScreenReportModal'

export default {
  component: FullScreenReportModal,
  title: 'Modals/FullScreenModal',
  args: {
    title: 'FTT Skin Clinics update',
    visible: false,
  },
  argTypes: { onBackClick: { action: 'clicked' } },
}

const FullScreenModalStory = ({ ...args }) => (
  <FullScreenReportModal {...args} />
)

export const FullScreenModal = FullScreenModalStory.bind({})
