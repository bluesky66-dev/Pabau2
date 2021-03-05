import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateMedicalCondition } from './CreateMedicalCondition'

export default {
  title: 'Modals/CreateMedicalCondition',
  component: CreateMedicalCondition,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CreateMedicalConditionStory: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create Medical Condition
      </Button>
      <CreateMedicalCondition
        visible={visible}
        onClose={() => setVisible(false)}
        onCreate={() => setVisible(false)}
      />
    </>
  )
}
