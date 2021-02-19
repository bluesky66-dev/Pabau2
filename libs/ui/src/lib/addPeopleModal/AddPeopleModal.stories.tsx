import React from 'react'
import AddPeopleModal from './AddPeopleModal'
import Stephen from '../../assets/images/users/stephen.png'
import Linda from '../../assets/images/users/linda.png'
import Alex from '../../assets/images/users/alex.png'
import Arya from '../../assets/images/users/arya.png'
import James from '../../assets/images/users/james.png'
import Austin from '../../assets/images/users/austin.png'
import Walter from '../../assets/images/users/walter.png'
import Liza from '../../assets/images/users/liza.png'

export default {
  component: AddPeopleModal,
  title: 'Chat/AddPeopleModal',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const AddPeopleModalStory = ({ ...args }) => <AddPeopleModal {...args} />

export const AddPeople = AddPeopleModalStory.bind({})
AddPeople.args = {
  isAddModalVisible: true,
  searchAddMember: [],
  selectedGroup: 'general',
  groupData: {
    general: [
      {
        userName: 'Alex Johnson',
        profileURL: Alex,
      },
      {
        userName: 'Arya Davis',
        profileURL: Arya,
      },
      {
        userName: 'James Ocean',
        profileURL: James,
      },
      {
        userName: 'Austin Winter',
        profileURL: Austin,
      },
      {
        userName: 'Walter Brown',
        profileURL: Walter,
      },
      {
        userName: 'Liza Frank',
        profileURL: Liza,
      },
    ],
    design: [
      {
        userName: 'Arya Davis',
        profileURL: Arya,
      },
      {
        userName: 'Stephen Cox',
        profileURL: Stephen,
      },
      {
        userName: 'Linda Starck',
        profileURL: Linda,
      },
      {
        userName: 'Walter Brown',
        profileURL: Walter,
      },
    ],
  },
  searchMemberText: '',
}
