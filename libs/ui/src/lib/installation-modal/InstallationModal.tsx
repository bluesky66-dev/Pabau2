import React, { FC } from 'react'
import { Modal } from 'antd'
import { Button } from '@pabau/ui'

import installationModalImage1 from '../../assets/images/installationModalImage.png'
import installationModalWindowImage1 from '../../assets/images/installationModalWindowImage.png'

import styles from './InstallationModal.module.less'

interface WorksWith {
  key: number
  title: string
  subTitle: string
  logoImage: JSX.Element
}

export interface InstallationModalProps {
  visible?: boolean
  logo: string
  title: string
  description: string
  longDescription?: string
  mobileViewDescription?: string
  webViewDescription?: string
  installationModalImage?: string
  installationModalWindowImage?: string
  installed?: number
  onCancel?: () => void
  onSubmit?: () => void
  worksWith?: WorksWith[]
  categories?: string[]
}

export const InstallationModal: FC<InstallationModalProps> = ({
  visible,
  title,
  logo,
  description,
  longDescription,
  mobileViewDescription,
  webViewDescription,
  installationModalImage = installationModalImage1,
  installationModalWindowImage = installationModalWindowImage1,
  installed,
  onCancel,
  onSubmit,
  worksWith,
  categories,
}) => {
  let buttonType = 'Install Now'
  if (installed === 1) {
    buttonType = 'Uninstall'
  }
  return (
    <Modal
      visible={visible}
      footer={null}
      centered={true}
      className={styles.installationModal}
      onCancel={() => onCancel?.()}
    >
      <div className={styles.headerWeb}>
        <img alt={title + '- logo image'} src={logo} />
        <h1>{title}</h1>
      </div>
      <div className={styles.textWrapper}>
        <p>{description}</p>
        <Button type="primary" onClick={onSubmit}>
          {buttonType}
        </Button>
      </div>
      <div className={styles.serviceWrapper}>
        <div className={styles.head}>
          <h3>Works with</h3>
          <div className={styles.serviceBoxWrapper}>
            {worksWith?.map((value) => (
              <div className={styles.serviceBox} key={value.key}>
                <span className={styles.circle}>{value.logoImage}</span>
                <div className={styles.serviceText}>
                  <h4>{value.title}</h4>
                  <p>{value.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.categories}>
          <h2>Categories</h2>
          <div className={styles.catList}>
            {categories?.map((value, key) => (
              <p key={key}>{value}</p>
            ))}
          </div>
          <a
            href="https://prelive-crm.new.pabau.com/"
            target="_blank"
            rel="noreferrer"
          >
            Terms of service
          </a>
          <a
            href="https://prelive-crm.new.pabau.com/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        </div>
      </div>
      <div className={styles.testimonialText}>
        <div className={styles.para}>
          <p>{longDescription}</p>
          <a
            href="https://prelive-crm.new.pabau.com/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about the app here
          </a>
        </div>
      </div>
      <div className={styles.driveWrapper}>
        <div className={styles.conversationWrapper}>
          <div className={styles.imgWrap}>
            <img
              alt={title + ' - Mobile preview'}
              src={installationModalImage}
            />
          </div>
          <div className={styles.imgRightText}>
            <h2>Drive more webinar registration</h2>
            <p>{mobileViewDescription}</p>
          </div>
        </div>
        <div className={styles.conversationWrapper}>
          <div className={styles.imgWrap}>
            <img
              alt={title + ' - Window preview'}
              src={installationModalWindowImage}
            />
          </div>
          <div className={styles.imgRightText}>
            <h2>Include webinar details in a conversation</h2>
            <p>{webViewDescription}</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default InstallationModal
