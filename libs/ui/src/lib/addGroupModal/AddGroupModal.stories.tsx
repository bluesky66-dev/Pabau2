import React from 'react'

import Stephen from '../../assets/images/users/stephen.png'
import Linda from '../../assets/images/users/linda.png'
import Alex from '../../assets/images/users/alex.png'
import Arya from '../../assets/images/users/arya.png'
import James from '../../assets/images/users/james.png'
import Austin from '../../assets/images/users/austin.png'
import Walter from '../../assets/images/users/walter.png'
import Liza from '../../assets/images/users/liza.png'

import AddGroupModal from './AddGroupModal'
const groupData = {
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
}

export default {
  component: AddGroupModal,
  title: 'Chat/AddGroupModal',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const AddGroupModalStory = ({ ...args }) => (
  <AddGroupModal groupData={groupData} isGroupModalVisible={true} {...args} />
)

export const AddGroupMember = AddGroupModalStory.bind({})
AddGroupMember.args = {
  memberModalTitle: 'General',
  groupData: groupData,
  selectedGroup: 'general',
  isGroupModalVisible: true,
  searchMemberText: 'Li',
  searchMember: [
    {
      userName: 'Linda Starck',
      profileURL: Linda,
    },
  ],
}
