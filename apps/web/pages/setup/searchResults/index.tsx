import React from 'react'
import { Card } from 'antd'
import Highlighter from 'react-highlight-words'

import { SetupEmptySearch } from '@pabau/ui'
import styles from '../Setup.module.less'

interface searchProps {
  subTitle: string
  title: string
}
interface p {
  data: searchProps[]
  searchTerm: string
}

const SearchResults = (props: p) => {
  const { data, searchTerm } = props

  return (
    <Card className={styles.searchResultsCard} bodyStyle={{ padding: '0' }}>
      {data && data.length > 0 && (
        <div className={styles.searchBody}>
          {data.map((thread, index) => {
            return (
              <div key={index} className={styles.searchList}>
                <span>
                  <Highlighter
                    highlightClassName={styles.highlight}
                    searchWords={[searchTerm]}
                    textToHighlight={thread.subTitle}
                  />
                  <span className={styles.searchTitle}> - {thread.title}</span>
                </span>
              </div>
            )
          })}
        </div>
      )}
      {data && data.length === 0 && <SetupEmptySearch />}
    </Card>
  )
}

export default SearchResults
