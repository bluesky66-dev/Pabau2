import MedicalFormBuilder from './MedicalFormBuilder'

export default {
  component: MedicalFormBuilder,
  title: 'UI/Medical Form Builder',
  argTypes: {
    previewData: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

const defaultFilter = {
  previewData: '',
}

export const MedicalFormBuilding = MedicalFormBuilder.bind({})
MedicalFormBuilding.args = { ...defaultFilter }
