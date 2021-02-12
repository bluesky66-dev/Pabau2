import React from 'react'
import Breadcrumb from './Breadcrumb'

export default {
  component: Breadcrumb,
  title: 'Basics/Breadcurmb',
}

const BreadcrumbStory = ({ breadcrumbItems }) => {
  return <Breadcrumb breadcrumbItems={breadcrumbItems} />
}

export const Basic = BreadcrumbStory.bind({})
Basic.args = {
  breadcrumbItems:[
    { breadcrumbName: 'Setup', path: '' },
    { breadcrumbName: 'Source', path: '' },
  ]
}
