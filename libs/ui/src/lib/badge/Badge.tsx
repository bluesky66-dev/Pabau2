import React, { FC, useEffect, useState } from 'react'
import { Tooltip, Divider, Button, Typography } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

import btn_enable from '../../assets/images/security/btn_enable.svg'
import btn_disabled from '../../assets/images/security/close.svg'
import UpgradeModal, { UpgradeModalProps } from '../upgrade-modal/UpgradeModal'
import { modalContent, modalTypes } from '../upgrade-modal/UpgradeMock'
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

type ModalType = 'Marketing' | 'Care' | 'Staff' | 'Intelligence'

export interface PlusProps {
  label?: string
  disabled?: boolean
  modalType: ModalType
}

const getColor = (type: ModalType) => {
  switch (type) {
    case 'Care':
      return '#2a4aad'
    case 'Marketing':
      return '#40A0C1'
    case 'Staff':
      return '#4e30b0'
    case 'Intelligence':
      return '#8e339d'
  }
}

export const PabauPlus: FC<PlusProps> = ({
  label = 'Plus',
  disabled,
  modalType = 'Marketing',
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalBody, setModalBody] = useState<UpgradeModalProps>(
    modalContent[getModalKey(modalType, modalTypes)]
  )

  useEffect(() => {
    setModalBody(modalContent[getModalKey(modalType, modalTypes)])
  }, [modalType])

  const handleClick = (): void => {
    if (disabled) return
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
  } = modalBody || {}

  const color = getColor(modalType)

  const tooltipContent = (
    <div style={{ color: '#000' }}>
      <div style={{ padding: 12, display: 'flex' }}>
        <div className={styles.upArrow} style={{ borderColor: color }}>
          <ArrowUpOutlined style={{ color }} />
        </div>
        <div>
          <Typography.Text className={styles.primaryText}>
            Upgrade to {modalType} Plus
          </Typography.Text>
          <Typography.Paragraph className={styles.secondaryText}>
            {sectionTitle}
          </Typography.Paragraph>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      <div style={{ padding: 12 }}>
        <Button
          disabled={disabled}
          type="primary"
          style={{ width: '100%', background: color, borderColor: color }}
          onClick={handleClick}
        >
          Get Feature
        </Button>
      </div>
    </div>
  )

  return (
    <div>
      <Tooltip
        arrowPointAtCenter
        title={tooltipContent}
        color="#FFF"
        overlayClassName={styles.tooltipCard}
      >
        <div className={styles.pabauPlusBtn} onClick={handleClick}>
          {label}
        </div>
      </Tooltip>
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

function getModalKey(type: string | undefined, data): string {
  return data.find(({ value }) => value === type)?.key
}
