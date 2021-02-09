import React, { FC, useEffect, useState } from 'react'

import btn_enable from '../../assets/images/security/btn_enable.svg'
import btn_disabled from '../../assets/images/security/close.svg'

import { UpgradeModalProps } from '../upgrade-modal/UpgradeModal'

import { modalContent, modalTypes } from '../upgrade-modal/UpgradeMock'

import UpgradeModal from '../upgrade-modal/UpgradeModal'

import styles from './Badge.module.less'

interface P {
  label?: string
  disabled?: boolean
}

export const Badge: FC<P> = ({ label, disabled }) => {
  return (
    <div>
      <button
        className={disabled ? styles.enabledStatus : styles.disabledStatus}
      >
        <img src={disabled ? btn_enable : btn_disabled} alt="" />
        <span
          className={disabled ? styles.imgtextspan : styles.imgtextspanDisable}
        >
          {label}
        </span>
      </button>
    </div>
  )
}

export default Badge

export interface PlusProps {
  label?: string
  disabled?: boolean
  modalType: string
}

export const PabauPlus: FC<PlusProps> = ({ label, disabled, modalType }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalBody, setModalBody] = useState<UpgradeModalProps>(
    modalContent[getModalKey(modalType, modalTypes)]
  )

  useEffect(() => {
    setModalBody(modalContent[getModalKey(modalType, modalTypes)])
  }, [modalType])

  const handleClick = (): void => {
    setShowModal((e) => !e)
  }

  const {
    title,
    plan,
    description,
    btnText,
    sectionTitle,
    sectionData,
    sectionUpgradeData,
    sectionUpgradeTitle,
    linkText,
  } = modalBody

  return (
    <div>
      <div className={styles.pabauPlusBtn} onClick={handleClick}>
        {label}
      </div>
      <UpgradeModal
        title={title}
        visible={showModal}
        modalWidth={682}
        plan={plan}
        description={description}
        btnText={btnText}
        sectionTitle={sectionTitle}
        sectionData={sectionData}
        sectionUpgradeTitle={sectionUpgradeTitle}
        sectionUpgradeData={sectionUpgradeData}
        linkText={linkText}
        onCancel={handleClick}
      />
    </div>
  )
}

function getModalKey(type: string, data): string {
  return data.filter(({ value }) => value === type)[0].key
}
