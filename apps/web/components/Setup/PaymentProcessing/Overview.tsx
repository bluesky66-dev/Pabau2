import React, { FC, useState } from 'react'
import { Row, Col } from 'antd'
import classNames from 'classnames'
import styles from './index.module.less'
import SectionTitle from './SectionTitle'
import PaymentMethod from './PaymentMethod'
import { Checkbox, SimpleDropdown } from '@pabau/ui'
import paypal from '../../../assets/images/paypal.png'
import stripe from '../../../assets/images/stripe.png'
import pabauCard from '../../../assets/images/pabau-card.png'

const PaymentProcessingOverview: FC = () => {
  const [currency, setCurrency] = useState('GBP')
  const handleCurrency = (value) => {
    setCurrency(value)
  }
  return (
    <div>
      <div className={styles.sectionChecklist}>
        <SectionTitle
          title="Payment Processing Checklist"
          description="Get paid faster with online payment options."
        />
        <Row className={styles.marginTopMd}>
          <Checkbox>
            Allow clients to view their payment activity online.
          </Checkbox>
        </Row>
        <Row className={styles.marginTopSm}>
          <Checkbox>
            Allow clients to view their payment activity online.
          </Checkbox>
        </Row>
        <Row className={styles.marginTopSm}>
          <Checkbox>Allow payments for booking online.</Checkbox>
        </Row>
      </div>
      <div className={classNames(styles.sectionPadding, styles.sectionBorder)}>
        <SectionTitle
          subTitle="Select your currency"
          description="Choose the default currency for all your services, estimates & invoices."
        />
        <Row className={styles.selectCurrency}>
          <Col lg={12} sm={24} xs={24}>
            <SimpleDropdown
              label="Default currency *"
              value={currency}
              dropdownItems={['GBP', 'USD']}
              onSelected={handleCurrency}
            />
          </Col>
        </Row>
      </div>
      <div
        className={classNames(
          styles.sectionPaymentMethods,
          styles.sectionPadding
        )}
      >
        <SectionTitle
          subTitle="Choose your preferred payment methods"
          description="Clients can pay you via debit/credit card, PayPal, or both. "
        />
        <PaymentMethod
          method="Lorem ipsum"
          icon={stripe}
          iconClass={styles.stripeIcon}
          listItems={[
            'Virtual terminal: charge credit/debit cards',
            'Accept client payments online',
            'Funds deposited to bank account',
          ]}
        />
        <PaymentMethod
          method="Card Payments"
          icon={pabauCard}
          iconClass={styles.paypalIcon}
          listItems={[
            'Take payments directly into Pabau',
            'Funds directly to your bank account',
          ]}
          buttonText="Order"
        />
        <PaymentMethod
          method="Enable Self Pay"
          icon={paypal}
          iconClass={styles.paypalIcon}
          listItems={[
            'Enable clients to view their payment activity',
            'Enable clients to be able to pay their invoices online',
          ]}
        />
      </div>
    </div>
  )
}

export default PaymentProcessingOverview
