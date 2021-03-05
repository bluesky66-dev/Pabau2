import React from 'react'
import FullScreenReportModal, {
  FullScreenReportModalProps,
  OperationType,
} from './FullScreenReportModal'

export default {
  component: FullScreenReportModal,
  title: 'Modals/FullScreenModal',
  args: {},
  argTypes: { onBackClick: { action: 'clicked' } },
}

const FullScreenModalStory = ({ ...args }: FullScreenReportModalProps) => (
  <FullScreenReportModal {...args} />
)

export const CreateService = FullScreenModalStory.bind({})
CreateService.args = {
  title: 'Create Service',
  visible: false,
  operations: [
    OperationType.active,
    OperationType.cancel,
    OperationType.create,
  ],
  cancelBtnText: 'Cancel',
  createBtnText: 'Create',
  enableCreateBtn: true,
  activated: true,
  subMenu: [
    'General',
    'Pricing',
    'Staff & Resources',
    'Online Booking',
    'Client pathway',
  ],
}

export const CreateIssuringCompany = FullScreenModalStory.bind({})
CreateIssuringCompany.args = {
  title: 'Create Issuring Company',
  visible: false,
  operations: [
    OperationType.vat,
    OperationType.cancel,
    OperationType.save,
    OperationType.create,
  ],
  saveBtnText: 'Save as draft',
  cancelBtnText: 'Cancel',
  createBtnText: 'Create',
  enableCreateBtn: true,
  vatRegistered: true,
}

export const CreateSender = FullScreenModalStory.bind({})
CreateSender.args = {
  title: 'Create a Sender',
  visible: false,
  operations: [
    OperationType.active,
    OperationType.cancel,
    OperationType.create,
  ],
  cancelBtnText: 'Cancel',
  createBtnText: 'Create',
  enableCreateBtn: true,
  activated: true,
}

export const EditSender = FullScreenModalStory.bind({})
EditSender.args = {
  title: 'Edit a Sender',
  visible: false,
  operations: [
    OperationType.active,
    OperationType.cancel,
    OperationType.delete,
    OperationType.create,
  ],
  deleteBtnText: 'Delete',
  cancelBtnText: 'Cancel',
  createBtnText: 'Create',
  enableCreateBtn: true,
  activated: true,
}

export const CreateRooms = FullScreenModalStory.bind({})
CreateRooms.args = {
  title: 'Create Rooms',
  visible: false,
  operations: [
    OperationType.active,
    OperationType.cancel,
    OperationType.delete,
    OperationType.create,
  ],
  deleteBtnText: 'Delete',
  cancelBtnText: 'Cancel',
  createBtnText: 'Create',
  enableCreateBtn: true,
  activated: true,
  subMenu: ['Details', 'Location'],
}

export const Newsletter = FullScreenModalStory.bind({})
Newsletter.args = {
  title: 'FTT Skin Clinics update',
  visible: false,
  operations: [],
}
