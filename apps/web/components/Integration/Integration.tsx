import React, { FC, ReactElement, useEffect, useState } from 'react'
import classNames from 'classnames'
import { CheckOutlined } from '@ant-design/icons'
import { Button, InstallationModal } from '@pabau/ui'
import styles from './Integration.module.less'
import logo from './../../assets/images/pabau-badge-1.png'
import { WorksWith } from '../../mocks/SetupIntegration'
import {
  longDescription,
  mobileViewDescription,
  webViewDescription,
} from '../../mocks/SetupIntegration'

interface ItemsSchema {
  title: string
  subTitle: string
  logoImage: ReactElement
  installed: number
  categories: Array<string>
}

interface ModalSchema {
  title: string
  subTitle: string
  logoImage: string
  installed: number
  categories: Array<string>
}

interface P {
  heading?: string
  category?: string
  items: ItemsSchema[]
  limit?: number
  installed?: number
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

const IntegrationHeader: FC = () => {
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

export const IntegrationTabBody: FC<P> = ({
  heading,
  category = 'ALL',
  items,
  limit,
  installed = -1,
}) => {
  category = category.toUpperCase()
  const [data, setData] = useState([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [modalData, setModalData] = useState<ModalSchema>({
    title: '',
    subTitle: '',
    installed: 0,
    logoImage: logo,
    categories: [],
  })

  useEffect(() => {
    if (category !== 'ALL') {
      const mapArray = []
      for (const a of items) {
        if (a.categories.indexOf(category) !== -1) {
          mapArray.push(a)
        }
      }
      setData([...mapArray])
      return
    } else if (installed === 1) {
      const mapArray = []
      for (const a of items) {
        if (a.installed === 1) {
          mapArray.push(a)
        }
      }
      setData([...mapArray])
      return
    } else {
      setData([...items])
      return
    }
  }, [items, category, data.length, installed])

  const modalOpen = (key) => {
    setIsModalVisible(true)
    setModalData(key)
  }

  return (
    <>
      {heading && heading.length > 0 && (
        <div className={styles.popularWrapper}>
          <h5>{heading}</h5>
        </div>
      )}
      <div className={styles.itemWrapper}>
        {data.slice(0, limit).map((value, key) => (
          <div
            key={key}
            className={
              value.installed === 1
                ? classNames(styles.itemBox, styles.active)
                : classNames(styles.itemBox)
            }
            onClick={() => modalOpen(value)}
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
      <InstallationModal
        visible={isModalVisible}
        logo={modalData.logoImage}
        title={modalData.title}
        description={modalData.subTitle}
        installed={modalData.installed}
        categories={modalData.categories}
        onCancel={() => setIsModalVisible(false)}
        worksWith={WorksWith}
        longDescription={longDescription}
        mobileViewDescription={mobileViewDescription}
        webViewDescription={webViewDescription}
      />
    </>
  )
}

export default IntegrationHeader
