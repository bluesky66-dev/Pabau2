import React from 'react'
import styles from './SetupChip.module.less'

import emptyImage from '../../assets/images/empty.png'

export function SetupEmptySearch(): JSX.Element {
  return (
    <div className={styles.emptyWrapper}>
      <img src={emptyImage} alt={'empty'} />
      <div>
        <p className={styles.emptyTitle}>No results found</p>
        <span className={styles.emptyDesc}>
          Try adjusting your search to find what you’re looking for
        </span>
      </div>
    </div>
  )
}

export default SetupEmptySearch
