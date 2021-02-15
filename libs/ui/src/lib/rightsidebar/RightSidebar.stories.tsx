/* eslint-disable */
import React from 'react'
import RightSidebar from './RightSidebar'

export default {
  component: RightSidebar,
  title: 'UI/Right Sidebar',
  args: { component: 'basic_heading', display: true },
  argTypes: {
    component: {
      control: {
        type: 'select',
        selected: 'basic_heading',
        options: [
          'basic_heading',
          'basic_shortanswer',
          'basic_longanswer',
          'basic_textblock',
          'basic_singlechoice',
          'basic_multiplechoice',
          'basic_dropdown',
          'basic_drawing',
          'basic_signature',
          'basic_conditions',
          'basic_drugs',
          'basic_traveldestination',
          'basic_vaccinescheduler',
          'basic_vaccinehistory',
          'basic_labtests',
          'custom_emailmarketing',
          'custom_smsmarketing',
          'custom_phonecall',
          'custom_lettermarketing',
          'custom_membershipnumber',
          'custom_authorizationcode',
          'custom_company',
          'custom_dob',
          'custom_gender',
          'custom_physicaladdress',
          'custom_postaladdress',
          'custom_referredby',
          'custom_telephonenumber',
        ],
      },
    },
    display: {
      control: {
        type: 'radio',
        selected: true,
        options: [true, false],
      },
    },
  },
}

const RightSidebarStory = ({ ...args }) => (
  <RightSidebar {...args}></RightSidebar>
)

export const RightSidebarPanel = RightSidebarStory.bind({})
RightSidebarPanel.args = {
  component: 'basic_heading',
  display: true,
}
