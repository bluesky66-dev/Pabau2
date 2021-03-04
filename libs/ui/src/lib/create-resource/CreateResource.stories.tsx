import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateResource } from './CreateResource'

export default {
  title: 'Modals/CreateResource',
  component: CreateResource,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CreateResourceStory: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create Room
      </Button>
      <CreateResource
        visible={visible}
        onClose={() => setVisible(false)}
        onCreate={() => setVisible(false)}
      />
    </>
  )
}
