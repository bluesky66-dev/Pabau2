import React, { FC, ReactElement, useEffect, useState } from 'react'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import { Button } from '@pabau/ui'
import styles from './Integration.module.less'

interface itemsSchema {
  title: string
  subTitle: string
  logoImage: ReactElement
  installed: number
  categories: Array<string>
}

interface P {
  heading?: string
  category?: string
  items: itemsSchema[]
  limit?: number
}

const AllCollectionsHeaderCollections = [
  {
    key: 0,
    title: 'Seamlessly schedule meetings',
    route: '/',
    backColor: '/',
  },
  {
    key: 1,
    title: 'Built by Intercom',
    route: '/',
    backColor: '/',
  },
  {
    key: 2,
    title: 'Supercharge customer data',
    route: '/',
    backColor: '/',
  },
]

const AllCollectionsHeader: FC = () => {
  return (
    <div>
      <div className={styles.tabMenuWrapper}>
        <div className={styles.collectionWrapper}>
          {AllCollectionsHeaderCollections.map((value, key) => (
            <div className={styles.collectionBox} key={key}>
              <h4>{value.title}</h4>
              <Button type="primary" className={styles.btnColl}>
                View collection &#x2192;{' '}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const AllCollectionsBody: FC<P> = ({
  heading,
  category = 'ALL',
  items,
  limit,
}) => {
  category = category.toUpperCase()
  const [data, setData] = useState([])
  const [tempLimit, setTempLimit] = useState(limit || 0)

  useEffect(() => {
    if (category !== 'ALL') {
      const mapArray = []
      for (const a of items) {
        if (a.categories.indexOf(category) === 0) {
          mapArray.push(a)
        }
      }
      setData([...mapArray])
      return
    } else {
      setData([...items])
      return
    }

    if (tempLimit) {
      setTempLimit(tempLimit)
    } else {
      setTempLimit(data.length)
    }
  }, [items, category, data.length, tempLimit])

  return (
    <>
      {heading && heading.length > 0 && <div>{heading}</div>}
      <div className={styles.itemWrapper}>
        {data.slice(0, limit).map((value, key) => (
          <div
            key={key}
            className={
              value.installed === 1
                ? classNames(styles.itemBox, styles.active)
                : classNames(styles.itemBox)
            }
          >
            <span className={styles.checkWrap}>
              <CheckOutlined />
            </span>
            <div className={styles.img}>
              <img src={value.logoImage} alt={value.title} />
            </div>
            <h5>{value.title}</h5>
            <p>{value.subTitle}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllCollectionsHeader
