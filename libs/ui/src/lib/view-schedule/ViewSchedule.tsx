import React, { FC, useEffect, useState } from 'react'
import {
  FullScreenReportModal,
  FullScreenReportModalProps,
  Webinar,
  WebinarProps,
} from '@pabau/ui'

import { Filter } from './Filter'

import styles from './ViewSchedule.module.less'
import classNames from 'classnames'

export interface discoverAndLearnProps {
  key: string
  day: string
  webinar: WebinarProps[]
}

export interface ViewScheduleProps extends FullScreenReportModalProps {
  schedule: discoverAndLearnProps[]
  discoverAndLearn: discoverAndLearnProps[]
}

export const ViewScheduleModal: FC<ViewScheduleProps> = ({
  title,
  visible,
  onBackClick,
  schedule,
  discoverAndLearn,
}) => {
  const [scheduleData, setSchedule] = useState(schedule)
  const [filteredWebinars, setFilteredWebinars] = useState<
    discoverAndLearnProps[] | undefined
  >([])

  useEffect(() => {
    setFilteredWebinars(discoverAndLearn)
  }, [discoverAndLearn])

  const handleClear = (): void => {
    setFilteredWebinars(discoverAndLearn)
  }

  const onFilter = (webinar: discoverAndLearnProps[] | undefined): void => {
    setFilteredWebinars(webinar)
  }

  const onCancelSchedule = (type: string, id?: string) => {
    if (type === 'cancel') {
      let scheduleArray = scheduleData
      scheduleArray.map((thread) => {
        if (thread.webinar.length > 0) {
          thread.webinar = thread.webinar.filter((webinar) => webinar.id !== id)
        }
        return scheduleArray
      })
      scheduleArray = scheduleArray.filter(
        (thread) => thread.webinar.length > 0
      )
      setSchedule(scheduleArray)
    }
  }

  const webinarContent = (webinar: discoverAndLearnProps[] | undefined) => {
    return (
      <div>
        {webinar?.map((thread, index) => {
          return (
            <div
              className={classNames(
                styles.discoverWrap,
                index !== 0 && styles.discoverBorder
              )}
              key={thread.key}
            >
              <h4>{thread.day}</h4>
              <div className={styles.webinarWrapperModal}>
                {thread.webinar.length > 0 &&
                  thread.webinar.map((data) => {
                    return (
                      <div className={styles.webBox} key={data.id}>
                        <Webinar {...data} onClick={onCancelSchedule} />
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const viewScheduleContent = () => {
    return (
      <div className={styles.viewScheduleWrapper}>
        <div className={styles.scheduleContent}>
          <h2>Your schedule</h2>
          {scheduleData?.length === 0 ? (
            <div className={styles.upcomingWrap}>
              You don’t have any upcoming webinars
            </div>
          ) : (
            webinarContent(scheduleData)
          )}
        </div>
        <div className={styles.scheduleContent}>
          <div className={styles.filterWrap}>
            <h2>Discover & Learn</h2>
            <Filter
              webinarList={discoverAndLearn}
              handleShowResult={onFilter}
              onClear={handleClear}
            />
          </div>
          {filteredWebinars &&
            filteredWebinars?.length > 0 &&
            webinarContent(filteredWebinars)}
        </div>
      </div>
    )
  }

  return (
    <FullScreenReportModal
      visible={visible}
      title={title}
      content={viewScheduleContent}
      onBackClick={onBackClick}
    />
  )
}

export default ViewScheduleModal
