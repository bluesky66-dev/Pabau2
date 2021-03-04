import React from 'react'
import { Layout } from '@pabau/ui'
import './calendar.module.less'

/* eslint-disable-next-line */
export interface CalendarProps {}

export function Calendar(props: CalendarProps) {
  return (
    <div>
      <Layout active={'calendar'}>
        <h1>Welcome to calendar!</h1>
      </Layout>
    </div>
  )
}

export default Calendar
