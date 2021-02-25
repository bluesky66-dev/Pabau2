import React, { FC } from 'react'
import { useMedia } from 'react-use'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Breadcrumb } from '@pabau/ui'
import { Row, Col, Card } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { LoyaltySettingsObj } from '../../../mocks/LoyaltySettings'
import General from '../../../components/Setup/Settings/LoyaltySettings/General'
import styles from './loyalty.module.less'
import Layout from '../../../components/Layout/Layout'

interface P {
  general: GeneralLoyaltyConfig
}

const LoyaltySettings: FC<P> = () => {
  const isMobile = useMedia('(max-width: 768px)', false)

  const loyaltyFormik = useFormik({
    initialValues: {
      showOnReceipt: LoyaltySettingsObj.general.dropdownList.value,
      inputPoint: LoyaltySettingsObj.general.inputPoint.value,
    },
    validationSchema: Yup.object({
      showOnReceipt: Yup.string().required('Show on receipt Value is required'),
      inputPoint: Yup.number()
        .typeError('You must specify a currency amount')
        .required('Points Value is required'),
    }),
    onSubmit: (value) => {
      console.log(value)
    },
  })

  const handleSave = (): void => {
    loyaltyFormik.handleSubmit()
  }

  return (
    <div className={styles.loyaltyMainWrapper}>
      <Layout>
        <Card className={styles.loyaltyContainer}>
          {isMobile ? (
            <Row className={styles.mobDevice}>
              <Col>
                <div className={styles.mobTopHead}>
                  <div className={styles.mobTopHeadRow}>
                    <LeftOutlined /> <h6> {'Loyalty settings'}</h6>
                  </div>
                  <p>
                    {
                      'Configure how much each of your loyalty points are worth to your clients, as well as deciding if they are to be displayed on the receipt.'
                    }
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <Row className={styles.loyaltyMainWrapper}>
              <Col span={20} className={styles.titleWrapper}>
                <Breadcrumb
                  breadcrumbItems={[
                    { breadcrumbName: 'Setup', path: 'setup' },
                    { breadcrumbName: 'Loyalty settings', path: '' },
                  ]}
                />
                <h4>{'Loyalty settings'}</h4>
                <p className={styles.description}>
                  {
                    'Configure how much each of your loyalty points are worth to your clients, as well as deciding if they are to be displayed on the receipt.'
                  }
                </p>
              </Col>
              <Col span={'auto'} className={styles.titleSaveBtn}>
                <Button
                  type="primary"
                  className={styles.saveBtn}
                  onClick={handleSave}
                >
                  {'Save Changes'}
                </Button>
              </Col>
            </Row>
          )}
          <General
            generalObj={LoyaltySettingsObj.general}
            values={loyaltyFormik.values}
            setFieldValue={loyaltyFormik.setFieldValue}
            errors={loyaltyFormik.errors}
          />
          {isMobile && (
            <div className={styles.mobSaveBtn} onClick={handleSave}>
              <Button type={'primary'}>{'Save Changes'}</Button>
            </div>
          )}
        </Card>
      </Layout>
    </div>
  )
}

export default LoyaltySettings
