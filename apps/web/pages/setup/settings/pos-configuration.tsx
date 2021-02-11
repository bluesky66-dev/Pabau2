import React, { FC, useState } from 'react'
import { useMedia } from 'react-use'

import { Button, TabMenu } from '@pabau/ui'
import { Row, Col, Card } from 'antd'
import { Layout } from '@pabau/ui'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { PosConfigObj } from '../../../mocks/PosConfiguration'

import General from '../../../components/Setup/Settings/PosConfiguration/General'
import Appearance from '../../../components/Setup/Settings/PosConfiguration/Appearance'

import styles from './pos-configuration.module.less'

interface P {
  general: GeneralPosConfig
  appearance: AppearancePosConfig
}

const PosConfiguration: FC<P> = () => {
  const [posConfigObj, setPosConfigObj] = useState<P>(PosConfigObj)
  const isMobile = useMedia('(max-width: 768px)', false)

  const handleChange = (
    key: string,
    obj: GeneralPosConfig | AppearancePosConfig
  ) => {
    console.log(obj)
    setPosConfigObj({ ...posConfigObj, [key]: obj })
  }

  const handleSave = (): void => {
    console.log('Save Object', posConfigObj)
  }

  const tabItems = ['General', 'Appearance']

  return (
    <div className={styles.mainWrapper}>
      <Layout>
        <Card className={styles.posConfigurationContainer}>
          {isMobile ? (
            <Row className={styles.mobDevice}>
              <Col>
                <div className={styles.mobTopHead}>
                  <div className={styles.mobTopHeadRow}>
                    <LeftOutlined /> <h6> {'Point Of Sale Settings'}</h6>
                  </div>
                  <p>
                    {
                      'Take control over which features are enabled on your point of sale screen.'
                    }
                  </p>
                </div>
              </Col>
            </Row>
          ) : (
            <Row className={styles.mainWrapper}>
              <Col span={20} className={styles.titleWrapper}>
                <p className={styles.titleTagLine}>
                  {'Setup'}
                  <span>
                    <RightOutlined /> {'Point Of Sale Settings'}
                  </span>
                </p>
                <h4>{'POS Configuration'}</h4>
                <p className={styles.description}>
                  {
                    'Take control over which features are enabled on your point of sale screen.'
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
          <TabMenu tabPosition={isMobile ? 'top' : 'left'} menuItems={tabItems}>
            <General
              generalObj={posConfigObj.general}
              handleChange={handleChange}
            />
            <Appearance
              appearanceObj={posConfigObj.appearance}
              handleChange={handleChange}
            />
          </TabMenu>
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

export default PosConfiguration
