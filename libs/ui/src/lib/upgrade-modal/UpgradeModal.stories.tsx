import React, { FC } from 'react'
import UpgradeModal, { UpgradeModalProps } from './UpgradeModal'
import {
  title,
  plan,
  description,
  btnText,
  sectionTitle,
  sectionData,
  sectionUpgradeTitle,
  sectionUpgradeData,
  linkText,
} from './UpgradeMock'

export default {
  component: UpgradeModal,
  title: 'Modals/UpgradeModal',
  args: {
    title,
    visible: false,
    footer: false,
    modalWidth: 682,
    plan,
    description,
    btnText,
    sectionTitle,
    sectionData,
    sectionUpgradeTitle,
    sectionUpgradeData,
    linkText,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    visible: { control: { type: 'boolean' } },
    plan: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    btnText: { control: { type: 'text' } },
    sectionTitle: { control: { type: 'text' } },
    sectionData: { control: { type: 'object' } },
    sectionUpgradeTitle: { control: { type: 'text' } },
    sectionUpgradeData: { control: { type: 'object' } },
    linkText: { control: { type: 'text' } },
  },
}

export const UpgradeStory: FC<UpgradeModalProps> = ({
  title,
  visible,
  modalWidth,
  plan,
  description,
  btnText,
  sectionTitle,
  sectionData,
  sectionUpgradeTitle,
  sectionUpgradeData,
  linkText,
}) => {
  return (
    <UpgradeModal
      title={title}
      visible={visible}
      modalWidth={modalWidth}
      plan={plan}
      description={description}
      btnText={btnText}
      sectionTitle={sectionTitle}
      sectionData={sectionData}
      sectionUpgradeTitle={sectionUpgradeTitle}
      sectionUpgradeData={sectionUpgradeData}
      linkText={linkText}
    />
  )
}
