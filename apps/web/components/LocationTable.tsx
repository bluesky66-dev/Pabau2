import React, { FC } from 'react'
import styles from './LocationTable.module.less'
import Layout from './Layout/Layout'
import { Breadcrumb, Button, useLiveQuery, MobileHeader } from '@pabau/ui'
import { Col, Row, Typography, Avatar, Image } from 'antd'
import AddButton from './AddButton'
import classNames from 'classnames'
import { EditFilled, LeftOutlined } from '@ant-design/icons'
import carParkingImg from '../assets/images/parking.svg'
import moonStarImg from '../assets/images/moon-star.svg'
import sunImg from '../assets/images/sun.svg'
import timeImg from '../assets/images/time.svg'
import pharmacyImg from '../assets/images/pharmacy.svg'
import { DocumentNode } from '@apollo/client'
import LogoSvg from '../assets/images/logo.svg'
import Link from 'next/link'

const { Title } = Typography

interface P {
  schema: Schema
  listQuery: DocumentNode
}

const LocationTable: FC<P> = ({ schema, listQuery }) => {
  const { data } = useLiveQuery(listQuery, {
    variables: {
      isActive: true,
      searchTerm: '%',
      offset: 0,
      limit: 10,
    },
  })

  const createNew = () => {
    // do nothing
  }

  const onFilterLocations = () => {
    // do nothing
  }

  const onSearch = () => {
    // do nothing
  }

  return (
    <>
      <div className={classNames(styles.locationsPage, styles.desktopViewNone)}>
        <MobileHeader className={styles.locationsHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.locationsTextStyle}>
              <Link href="/">
                <LeftOutlined />
              </Link>
              <p> {schema.full || schema.short} </p>
            </div>
            <AddButton
              onClick={createNew}
              onFilterSource={onFilterLocations}
              onSearch={onSearch}
              schema={schema}
              tableSearch={true}
            />
          </div>
        </MobileHeader>
      </div>
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
            onFilterSource={onFilterLocations}
            onSearch={onSearch}
            schema={schema}
            tableSearch={true}
          />
        </div>
        <div className={styles.locationContainer}>
          {data?.map((location) => {
            return (
              <Row key={location.key} className={styles.locationRow}>
                <Col
                  md={4}
                  style={{ width: '100%' }}
                  className={styles.locationImg}
                >
                  <Image width="100%" fallback={LogoSvg} src={location.image} />
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
                        {location.is_parking && (
                          <img src={carParkingImg} alt="car-parking" />
                        )}
                        {location.is_time && <img src={timeImg} alt="time" />}
                        {location.is_night && (
                          <img src={moonStarImg} alt="night" />
                        )}
                        {location.is_day && <img src={sunImg} alt="day" />}
                        {location.is_pharmacy && (
                          <img src={pharmacyImg} alt="pharmacy" />
                        )}
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
    </>
  )
}

export default LocationTable
