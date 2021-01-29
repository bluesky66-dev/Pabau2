import React from 'react'
import { Webinar, Button } from '@pabau/ui'
import styles from '../Setup.module.less'

import backgroundImage from '../../../assets/images/user.png'

const data = [
  {
    title: 'Stock Management',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
    isJoin: true,
  },
  {
    title: 'Advanced Financials',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
  {
    title: 'Basic Start-Up Training',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
  {
    title: 'Advanced Financials',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
  {
    title: 'Basic Start-Up Training',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
  {
    title: 'Advanced Financials',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
  {
    title: 'Basic Start-Up Training',
    name: 'Alexander Turner',
    time: 'Tuesday, 15 10:00 AM',
    timeLeft: '18:28',
    backgroundImage,
  },
]

const WebinarCard = () => {
  return (
    <div className={styles.rightSide}>
      <div className={styles.textTitle}>Live & Upcoming Webinars</div>
      <div className={styles.webinarWrapper}>
        {data && data.map((value, index) => <Webinar key={index} {...value} />)}
      </div>
      <Button className={styles.btnView}>View Full Schedule</Button>
    </div>
  )
}

export default WebinarCard
