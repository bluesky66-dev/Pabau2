import React from 'react'
import { Layout } from '@pabau/ui'
import './schedule.module.less'

/* eslint-disable-next-line */
export interface ScheduleProps {}

export function Schedule(props: ScheduleProps) {
  return (
    <div>
      <Layout active={'/team/schedule'}>
        <h1>Welcome to schedule!</h1>
      </Layout>
    </div>
  )
}

export default Schedule
