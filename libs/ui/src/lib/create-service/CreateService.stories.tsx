import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateService } from './CreateService'

export default {
  title: 'Modals/CreateService',
  component: CreateService,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CreateServiceStory: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create service
      </Button>
      <CreateService visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}
