import React, { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './Preloader.module.less'

export interface PreloaderProps {
  isLoaderVisible?: boolean
}

export const Preloader: FC<PreloaderProps> = ({ isLoaderVisible }) => {
  return (
    <div>
      {isLoaderVisible && <LoadingOutlined className={styles.loader} spin />}
    </div>
  )
}

export default Preloader
