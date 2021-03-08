import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { CreateService } from './CreateService'
import theLondonClinic from '../../assets/images/the-london-clinic.png'
import sloanMedicalCenter from '../../assets/images/sloan-medical-center.png'
import { ReactComponent as Bupa } from '../../assets/images/bupa.svg'
import { ReactComponent as AxaPPP } from '../../assets/images/axa-ppp.svg'

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
        contracts={[
          {
            logo: <Bupa />,
            name: 'BUPA',
            type: 'Insurance',
          },
          {
            logo: <AxaPPP />,
            name: 'AXA PPP',
            type: 'Insurance',
          },
        ]}
        employees={[
          { name: 'Jessica Winter', selected: false },
          { name: 'Jeff Hackley', selected: false },
          { name: 'Alexander Wang', selected: false },
          { name: 'Linda Davis', selected: false },
          { name: 'William Tyson', selected: false },
          { name: 'Max Starck', selected: false },
          { name: 'Kyle Walsh', selected: false },
          { name: 'Owen Phillips', selected: false },
          { name: 'Aidan Kelly', selected: false },
          { name: 'Ewan Morgan', selected: false },
          { name: 'Jordan Martin', selected: false },
          { name: 'Grant Dudley', selected: false },
        ]}
        locations={[
          {
            location: 'The London Clinic',
            detail: '20 Devonshire Pl, Marylebone, London W1G 6BW, UK',
            selected: false,
            img: theLondonClinic,
          },
          {
            location: 'Sloan Medical Centre',
            detail: '2 Little London Rd, Meersbrook, Sheffield S8 0YH, UK',
            selected: false,
            img: sloanMedicalCenter,
          },
          {
            location: 'Sheffield Late Night Pharmacy',
            detail: '277 Fulwood Rd, Sheffield S10 3BD, UK',
            selected: false,
          },
        ]}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
