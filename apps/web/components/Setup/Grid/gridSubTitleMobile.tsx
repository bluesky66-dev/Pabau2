import React, { useState, useEffect, FC } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { SetupGridSubMenuMobile, SetupGridProps } from '@pabau/ui'
import styles from '../../../pages/setup/Setup.module.less'

interface P {
  data: SetupGridProps[]
  handleBack: () => void
}

const GridSubMenuMobile: FC<P> = ({ handleBack, data }) => {
  const [subTitle, setSubTitle] = useState([])

  useEffect(() => {
    if (data && data.length > 0) {
      setSubTitle(data[0].expandTitle ?? data[0].subDataTitles)
    }
  }, [data])

  return (
    <div className={styles.gridMobileWrapper}>
      <div className={styles.listIcon}>
        <LeftOutlined onClick={handleBack} />
        <div className={styles.textContent}>
          {data && data.length > 0 ? data[0].title : ''}
        </div>
      </div>
      {subTitle &&
        subTitle.length > 0 &&
        subTitle.map((value, index) => (
          <SetupGridSubMenuMobile key={index} subTitleData={value} />
        ))}
    </div>
  )
}

export default GridSubMenuMobile
