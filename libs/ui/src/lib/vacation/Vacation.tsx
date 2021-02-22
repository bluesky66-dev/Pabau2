import React, { FC } from 'react'
import { Tooltip } from 'antd'
import { ReactComponent as Plane } from '../../assets/images/plane.svg'
import styles from './Vacation.module.less'

export interface VacationProps {
  from: string
  to: string
}

const Vacation: FC<VacationProps> = (props) => {
  const { from, to } = props
  const parseDate = (value: string) => {
    const date = new Date(value)
    const parsedDate = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    }
    return `${parsedDate.day}/${parsedDate.month}/${parsedDate.year}`
  }

  return (
    <div>
      <Tooltip
        title={
          <div className={styles.vacationTooltipContainer}>
            <div className={styles.vacationTooltipDesc}>
              <Plane />
              <p>On vacation:</p>
            </div>
            <div className={styles.vacationTooltipContent}>
              <p>{parseDate(from)}</p>
              <p>{parseDate(to)}</p>
            </div>
          </div>
        }
        color="white"
        placement="bottomLeft"
      >
        <div className={styles.vacation}>
          <Plane />
        </div>
      </Tooltip>
    </div>
  )
}

export default Vacation
