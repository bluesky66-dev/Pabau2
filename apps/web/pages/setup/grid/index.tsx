import React from 'react'
import { SetupGrid, SetupGridProps } from '@pabau/ui'
import styles from '../Setup.module.less'

interface p {
  data: SetupGridProps[]
}
const Grid = (props: p) => {
  const { data } = props
  return (
    <div className={styles.gridWrapper}>
      {data && data.map((value, index) => <SetupGrid key={index} {...value} />)}
    </div>
  )
}

export default Grid
