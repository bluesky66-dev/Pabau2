import React, { FC, useState } from 'react'
import { useMedia } from 'react-use'

import { Button, Layout } from '@pabau/ui'
import { Row, Col, Card } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { LoyaltySettingsObj } from '../../../mocks/LoyaltySettings'
import General from '../../../components/Setup/Settings/LoyaltySettings/General'
import styles from './loyalty.module.less'

interface P {
  general: GeneralLoyaltyConfig
}

const LoyaltySettings: FC<P> = () => {
  const [loyaltyObj, setLoyaltyObj] = useState<P>(LoyaltySettingsObj)
  const isMobile = useMedia('(max-width: 768px)', false)

  const handleChange = (obj: GeneralLoyaltyConfig) => {
    setLoyaltyObj({ ...loyaltyObj, general: obj })
  }

  const handleSave = (): void => {
    console.log('Save Object', loyaltyObj)
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
                <p className={styles.titleTagLine}>
                  {'Setup'}
                  <span>
                    <RightOutlined /> {'Loyalty settings'}
                  </span>
                </p>
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
            generalObj={loyaltyObj.general}
            handleChange={handleChange}
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
