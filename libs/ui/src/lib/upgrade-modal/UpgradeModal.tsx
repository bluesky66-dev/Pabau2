import React, { FC, ReactNode } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { BasicModal, Button } from '@pabau/ui'
import styles from './UpgradeModal.module.less'
export interface SectionDataProps {
  icon: ReactNode
  title: string
  description: string
}
export interface UpgradeModalProps {
  title?: string
  visible?: boolean
  modalWidth?: number
  onCancel: () => void
  plan?: string
  description?: string
  btnText?: string
  sectionTitle?: string
  sectionData?: SectionDataProps[]
  sectionUpgradeTitle?: string
  sectionUpgradeData?: string[]
  linkText?: string
}

export const UpgradeModal: FC<UpgradeModalProps> = ({
  title,
  visible,
  modalWidth,
  onCancel,
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
    <BasicModal
      width={modalWidth}
      visible={visible}
      title={title}
      footer={false}
      centered={true}
      className={styles.upgradeModal}
      onCancel={() => onCancel()}
    >
      <div className={styles.upgradeModalWrapper}>
        <div className={styles.upgradePlan}>
          <span className={styles.upgradeTitle}>{plan}</span>
          <div className={styles.descWrapper}>
            <span className={styles.descTxt}>{description}</span>
            <Button className={styles.btnTxt} type={'primary'}>
              {btnText}
            </Button>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionHead}>{sectionTitle}</div>
          <div className={styles.sectionMainWrap}>
            {sectionData?.map((thread, index) => {
              return (
                <div key={thread.title} className={styles.sectionDataWrapper}>
                  <div className={styles.iconWrap}>{thread.icon}</div>
                  <div className={styles.descWrap}>
                    <p>{thread.title}</p>
                    <span>{thread.description}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.sectionUpgrade}>
          <div className={styles.headTitle}>{sectionUpgradeTitle}</div>
          <Row>
            {sectionUpgradeData &&
              sectionUpgradeData?.length > 0 &&
              sectionUpgradeData.map((data, index) => {
                return (
                  <Col className={styles.listItem} key={index} span={12}>
                    <CheckOutlined className={styles.outlineIcon} />
                    <span className={styles.listTitle}>{data}</span>
                  </Col>
                )
              })}
          </Row>
        </div>
        <div className={styles.footerText}>
          <span>{linkText}</span>
        </div>
      </div>
    </BasicModal>
  )
}

export default UpgradeModal
