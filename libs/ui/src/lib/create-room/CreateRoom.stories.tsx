import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateRoom } from './CreateRoom'

export default {
  title: 'Modals/CreateService',
  component: CreateRoom,
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
        Create Room
      </Button>
      <CreateRoom
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
        locations={[
          'London Road, London, England',
          'Lorem Street, Liverpool, England',
        ]}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
