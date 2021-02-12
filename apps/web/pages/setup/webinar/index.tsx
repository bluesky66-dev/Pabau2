import React, { FC, useState } from 'react'
import {
  Webinar,
  Button,
  WebinarModal,
  WebinarModalProps,
  ViewScheduleModal,
} from '@pabau/ui'
import styles from '../Setup.module.less'

import { data, viewScheduleData } from '../../../assets/webinarMock'

const WebinarCard: FC = () => {
  const [isOpenModal, setIsOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState({})
  const [isOpenViewSchedule, setIsOpenViewSchedule] = useState<boolean>(false)

  const handleOpenModal = (buttonType: string, id?: string) => {
    const filterData = data.filter((thread) => thread.id === id)[0]
    const selectedData: WebinarModalProps = {
      ...filterData,
      buttonType: buttonType,
    }
    setModalData(selectedData)
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleOpenViewSchedule = () => {
    setIsOpenViewSchedule(true)
  }

  const handleCloseViewSchedule = () => {
    setIsOpenViewSchedule(false)
  }

  return (
    <>
      <div className={styles.rightSide}>
        <div className={styles.textTitle}>Live & Upcoming Webinars</div>
        <div className={styles.webinarWrapper}>
          {data?.map((value, index) => (
            <Webinar key={index} {...value} onClick={handleOpenModal} />
          ))}
        </div>
        <Button className={styles.btnView} onClick={handleOpenViewSchedule}>
          View Full Schedule
        </Button>
      </div>
      <WebinarModal
        visible={isOpenModal}
        {...modalData}
        onCancel={handleCloseModal}
      />
      <ViewScheduleModal
        {...viewScheduleData}
        visible={isOpenViewSchedule}
        onBackClick={handleCloseViewSchedule}
      />
    </>
  )
}

export default WebinarCard
