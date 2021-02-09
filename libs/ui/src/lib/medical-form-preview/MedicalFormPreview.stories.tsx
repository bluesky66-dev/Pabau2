import React, { FC } from 'react'
import MedicalFormPreview, {
  MedicalFormPreviewProps,
} from './MedicalFormPreview'
import { data } from './mock'

export default {
  component: MedicalFormPreview,
  title: 'UI/Medical Form Preview',
}

const MedicalFormPreviewStory: FC<MedicalFormPreviewProps> = ({ ...props }) => (
  <MedicalFormPreview {...props} />
)

export const Basic = MedicalFormPreviewStory.bind({})
Basic.args = {
  desktopTemp: 'https://fresha.com/',
  appTemp: 'https://fresha.com/',
  step: 2,
  stepData: data,
  user: {
    name: 'Sylvia Cole',
    date: 'December 24, 1992',
    src: '',
    tags: ['Botox'],
  },
}
