import React, { FC, useEffect, useState } from 'react'
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
import { DocumentNode, useMutation } from '@apollo/client'
import LogoSvg from '../assets/images/logo.svg'
import Link from 'next/link'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const { Title } = Typography

interface P {
  schema: Schema
  listQuery: DocumentNode
  updateOrderQuery: DocumentNode
}

const LocationTable: FC<P> = ({ schema, listQuery, updateOrderQuery }) => {
  const { data } = useLiveQuery(listQuery, {
    variables: {
      isActive: true,
      searchTerm: '%',
      offset: 0,
      limit: 10,
    },
  })

  const [locationData, setLocationData] = useState(data)

  useEffect(() => {
    setLocationData(data)
  }, [data])

  const [updateOrderMutation] = useMutation(updateOrderQuery)

  const createNew = () => {
    // do nothing
  }

  const onFilterLocations = () => {
    // do nothing
  }

  const onSearch = () => {
    // do nothing
  }

  const onDragEnd = (result) => {
    const { destination, source } = result

    // do nothing
    let items = reorder(locationData, source.index, destination.index)
    let newData = items.map((locItem: any, i) => {
      locItem.order = locationData[i].order
      return locItem
    })
    if (source.index > destination.index) {
      for (let i = destination.index; i <= source.index; i++) {
        updateOrder(newData[i])
      }
    } else {
      for (let i = source.index; i <= destination.index; i++) {
        updateOrder(newData[i])
      }
    }
    setLocationData(newData)
  }

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    let result = Array.from(list)
    const startArrayId = result.findIndex((l: any) => l.order === startIndex)
    const endArrayId = result.findIndex((l: any) => l.order === endIndex)

    const [removed] = result.splice(startArrayId, 1)
    result.splice(endArrayId, 0, removed)
    return JSON.parse(JSON.stringify(result))
  }

  const updateOrder = async (values) => {
    if (values?.id)
      await updateOrderMutation({
        variables: values,
        optimisticResponse: {},
        update: (proxy) => {
          if (listQuery) {
            const existing = proxy.readQuery({
              query: listQuery,
            })
            if (existing) {
              const key = Object.keys(existing)[0]
              proxy.writeQuery({
                query: listQuery,
                data: {
                  [key]: [...existing[key], values],
                },
              })
            }
          }
        },
      })
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    // // some basic styles to make the items look a bit nicer
    // userSelect: "none",
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    // padding: grid,
    // width: 250
  })

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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {locationData?.map((location, index) => {
                    return (
                      <Draggable
                        className={styles.locationRow}
                        key={location.name}
                        index={location.order}
                        draggableId={location.id}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <Row
                              key={location.key}
                              className={styles.locationRow}
                            >
                              <Col
                                md={4}
                                style={{ width: '100%' }}
                                className={styles.locationImg}
                              >
                                <Image
                                  width="100%"
                                  fallback={LogoSvg}
                                  src={location.image}
                                />
                              </Col>
                              <Col md={20} className={styles.locationText}>
                                <div className={styles.locationDetailBox}>
                                  <div className={styles.locationTextStyle}>
                                    <h1>{location.name}</h1>
                                    <p>{location.address}</p>
                                    {location.is_active && (
                                      <div>
                                        <Button className={styles.activeBtn}>
                                          Active
                                        </Button>
                                      </div>
                                    )}
                                    <div className={styles.locationIcon}>
                                      {location.is_parking && (
                                        <img
                                          src={carParkingImg}
                                          alt="car-parking"
                                        />
                                      )}
                                      {location.is_time && (
                                        <img src={timeImg} alt="time" />
                                      )}
                                      {location.is_night && (
                                        <img src={moonStarImg} alt="night" />
                                      )}
                                      {location.is_day && (
                                        <img src={sunImg} alt="day" />
                                      )}
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
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                </div>
              )}

              {/* {data?.map((location) => {
                return (
                  
                )
              })} */}
            </Droppable>
          </DragDropContext>
        </div>
      </Layout>
    </>
  )
}

export default LocationTable
