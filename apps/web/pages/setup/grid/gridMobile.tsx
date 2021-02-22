import React from 'react'
import { SetupGridMobile, SubDataTitle } from '@pabau/ui'
import styles from '../Setup.module.less'

interface SetupGridMobileProps {
  image: string
  title: string
  subDataTitles: SubDataTitle[]
}

interface p {
  data: SetupGridMobileProps[]
  handleShowSubMenuMobile?: (title: string) => void
}
const Grid = (props: p) => {
  const { data } = props
  return (
    <div className={styles.gridMobileWrapper}>
      {data?.map((value, index) => (
        <SetupGridMobile
          key={index}
          {...value}
          onClick={props.handleShowSubMenuMobile}
        />
      ))}
    </div>
  )
}

export default Grid
