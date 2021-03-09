import React, { FC } from 'react'
import { CreateService, CreateServiceProps } from './CreateService'
import theLondonClinic from '../../assets/images/the-london-clinic.png'
import sloanMedicalCenter from '../../assets/images/sloan-medical-center.png'
import { ReactComponent as Bupa } from '../../assets/images/bupa.svg'
import { ReactComponent as AxaPPP } from '../../assets/images/axa-ppp.svg'

const rooms = ['Botox', ' Theraphy', 'Massage', 'Lab']
const equipment = [
  'Equipment A',
  'Equipment B',
  'Equipment C',
  'Equipment D',
  'Equipment E',
  'Equipment F',
  'Equipment G',
]
const contracts = [
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
]
const employees = [
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
]
const locations = [
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
]

export default {
  title: 'Modals/CreateService',
  component: CreateService,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

const CreateServiceStory: FC<CreateServiceProps> = ({ ...args }) => {
  return <CreateService {...args} />
}

export const Default = CreateServiceStory.bind({})
Default.args = {
  visible: false,
  rooms,
  roomsTitle: 'Rooms',
  roomsDesc: 'Select which rooms this service can be performed in',
  roomsItemType: 'room',
  equipment,
  equipmentTitle: 'Equipment',
  equipmentDesc: 'Select which equipment this service requires',
  equipmentItemType: 'equipment',
  contracts,
  employees,
  employeesTitle: 'Employees',
  employeesDesc: 'Choose which team members can perform this service.',
  locations,
}
