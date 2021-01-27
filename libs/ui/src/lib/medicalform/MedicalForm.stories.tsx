/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import MeicalForm from './MedicalForm'
import ShortAnswer from './ShortAnswer'

export default {
  component: MeicalForm,
  title: 'UI/Medical Form',
}

export const Heading = () => <MeicalForm />
export const ShortAnswerForm = () => <ShortAnswer />
