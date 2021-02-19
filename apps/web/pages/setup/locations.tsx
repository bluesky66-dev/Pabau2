import React from 'react'

import styles from './locations.module.less'
import Layout from '../../components/Layout/Layout'
import { Breadcrumb, Button } from '@pabau/ui'
import { Col, Row, Typography } from 'antd'
import AddButton from '../../components/AddButton'
import classNames from 'classnames'
import { EditFilled, EditOutlined } from '@ant-design/icons'
import carParkingImg from '../../assets/images/parking.svg'
import moonStarImg from '../../assets/images/moon-star.svg'
import sunImg from '../../assets/images/sun.svg'
import timeImg from '../../assets/images/time.svg'
import pharmacyImg from '../../assets/images/pharmacy.svg'
import { Avatar } from 'antd'
import { locationList } from '../../mocks/locations'

const { Title } = Typography

/* eslint-disable-next-line */
export interface LocationsProps {}

const schema: Schema = {
  full: 'Locations',
  fullLower: 'locations',
  short: 'Location',
  shortLower: 'location',
  fields: {},
}

export function Locations(props: LocationsProps) {
  const createNew = () => {}
  const onFilterMarketingSource = () => {}
  const onSearch = async (val) => {}
  return (
    <Layout>
      <div
        className={classNames(styles.tableMainHeading, styles.mobileViewNone)}
      >
        <div style={{ background: '#FFF' }}>
          <Breadcrumb
            breadcrumbItems={[
              { breadcrumbName: 'Setup', path: 'setup' },
              { breadcrumbName: schema.full || schema.short, path: '' },
            ]}
          />
          <Title>{schema.full || schema.short}</Title>
        </div>

        <AddButton
          onClick={createNew}
          onFilterSource={onFilterMarketingSource}
          onSearch={onSearch}
          schema={schema}
          tableSearch={true}
        />
      </div>
      <div className={styles.locationContainer}>
        {locationList?.map((location) => {
          return (
            <Row key={location.key} className={styles.locationRow}>
              <Col md={4} className={styles.locationImg}>
                <img width="100%" src={location.img} />
              </Col>
              <Col md={20} className={styles.locationText}>
                <div className={styles.locationDetailBox}>
                  <div className={styles.locationTextStyle}>
                    <h1>{location.name}</h1>
                    <p>{location.address}</p>
                    {location.is_active && (
                      <div>
                        <Button className={styles.activeBtn}>Active</Button>
                      </div>
                    )}
                    <div className={styles.locationIcon}>
                      {location.parking && <img src={carParkingImg} />}
                      {location.time && <img src={timeImg} />}
                      {location.night && <img src={moonStarImg} />}
                      {location.day && <img src={sunImg} />}
                      {location.pharmacy && <img src={pharmacyImg} />}
                    </div>
                  </div>
                  <div className={styles.locationIconBox}>
                    <Avatar
                      className={styles.locationEditIcon}
                      size="large"
                      style={{ display: 'flex' }}
                      icon={
                        <EditFilled
                          style={{
                            color: '#fff',
                            fontSize: 18,
                          }}
                        />
                      }
                    />
                    <span>Edit</span>
                  </div>
                </div>
              </Col>
            </Row>
          )
        })}
      </div>
    </Layout>
  )
}

export default Locations
