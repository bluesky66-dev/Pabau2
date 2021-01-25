import React, { FC } from 'react'
import { Tooltip, Image } from 'antd'
import plane from '../../assets/images/plane.svg'
import vacation from '../../assets/images/vacation1.png'
import styles from './Vacation.module.less'

/* eslint-disable-next-line */
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
              <Image src={plane} preview={false} width={16} />
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
        <Image src={vacation} preview={false} width={32} />
      </Tooltip>
    </div>
  )
}

export default Vacation
