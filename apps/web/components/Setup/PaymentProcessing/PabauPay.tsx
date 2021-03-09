import React, { FC, useState } from 'react'
import { Row, Col } from 'antd'
import classNames from 'classnames'
import SectionTitle from './SectionTitle'
import { Button, ButtonTypes } from '@pabau/ui'
import styles from './index.module.less'
import pabauCard from '../../../assets/images/card-pabau.svg'
import { PayOutModal } from './index'

const PabauPay: FC = () => {
  const [visibleModal, setVisibleModal] = useState(false)

  const onCloseModal = () => {
    setVisibleModal(false)
  }

  const onPayOut = () => {
    setVisibleModal(true)
  }

  return (
    <div>
      <div className={classNames(styles.sectionPadding, styles.sectionBorder)}>
        <SectionTitle
          title="Pabau Card Processing"
          description="On this account you’ll receive funds from clients paying online with integrated card processing."
          showButton
          buttonText="Pay out to bank"
          onClick={onPayOut}
        />
        <div className={styles.balanceCard}>
          <h4>Your current balance is £0</h4>
          <p>You do not have upcoming payouts.</p>
          <Button type={ButtonTypes.link}>See detailed billing activity</Button>
        </div>
      </div>
      <div
        className={classNames(
          styles.payStatus,
          styles.sectionPadding,
          styles.sectionBorder
        )}
      >
        <h4>Status</h4>
        <Row wrap={false}>
          <Col className={styles.payStatusIcon}>
            <img src={pabauCard} alt="Pabau Card Icon" />
          </Col>
          <Col className={styles.payStatusBody}>
            <h4>Pabau Pay Card Processing is Enabled</h4>
            <p>
              You can collect cards from online booking and process payments at
              checkout.
            </p>
          </Col>
        </Row>
      </div>
      <div
        className={classNames(
          styles.bankAccount,
          styles.sectionPadding,
          styles.sectionBorder
        )}
      >
        <h4>Bank Account Holder</h4>
        <h6>Holder name</h6>
        <p>Michael Barnes</p>
      </div>
      <div className={classNames(styles.bankAccount, styles.sectionPadding)}>
        <h4>Bank Account</h4>
        <h6>Account number</h6>
        <p>**** 2002</p>
      </div>
      <PayOutModal visible={visibleModal} onCloseModal={onCloseModal} />
    </div>
  )
}

export default PabauPay
