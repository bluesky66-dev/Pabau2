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
      <CreateService
        rooms={['Botox', ' Theraphy', 'Massage', 'Lab']}
        equipment={[
          'Equipment A',
          'Equipment B',
          'Equipment C',
          'Equipment D',
          'Equipment E',
          'Equipment F',
          'Equipment G',
        ]}
        employees={[
          { name: 'Jessica Winter' },
          { name: 'Jeff Hackley' },
          { name: 'Alexander Wang' },
          { name: 'Linda Davis' },
          { name: 'William Tyson' },
          { name: 'Max Starck' },
          { name: 'Kyle Walsh' },
          { name: 'Owen Phillips' },
          { name: 'Aidan Kelly' },
          { name: 'Ewan Morgan' },
          { name: 'Jordan Martin' },
          { name: 'Grant Dudley' },
        ]}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
