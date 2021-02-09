import React from 'react'
import GroupList from './GroupList'

export default {
  component: GroupList,
  title: 'Chat/GroupName',
  onClick: { action: 'onClick' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const GroupListStory = ({ ...args }) => <GroupList {...args} />

export const ListGroup = GroupListStory.bind({})
ListGroup.args = {}
