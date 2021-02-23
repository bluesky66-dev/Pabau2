import React, { FC, useState } from 'react'
import {
  Layout,
  Breadcrumb,
  SetupEmptySearch,
  SetupSearchInput,
} from '@pabau/ui'
import { Card, Tabs, Typography } from 'antd'
import Highlighter from 'react-highlight-words'
import IntegrationHeader, {
  IntegrationTabBody,
} from '../../components/Integration/Integration'
import styles from './integration.module.less'
import { IntegrationBodyCollections } from '../../mocks/SetupIntegration'
const { Title } = Typography
const { TabPane } = Tabs

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IntegrationProps {}

interface searchProps {
  category: string[]
  title: string
}

interface SearchProps {
  data: searchProps[]
  searchString: string
}

const Search: FC<SearchProps> = ({ data, searchString }) => {
  return (
    <Card className={styles.searchResultsCard} bodyStyle={{ padding: '0' }}>
      {data && data.length > 0 && (
        <div className={styles.searchBody}>
          {data.map((thread, index) => (
              <div key={index} className={styles.searchList}>
                {console.log('thread', thread)}
                <span>
                  <Highlighter
                    highlightClassName={styles.highlight}
                    searchWords={[searchString]}
                    textToHighlight={thread.title}
                  />
                  <span className={styles.searchTitle}>
                    {thread.category.map((a) => (
                      <div>{a}</div>
                    ))}
                  </span>
                </span>
              </div>
            )
          )}
        </div>
      )}
      {data && data.length === 0 && <SetupEmptySearch />}
    </Card>
  )
}

export const Integration: FC<IntegrationProps> = (props) => {
  const [active, setActive] = useState<string>('4')
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchItemsArray, setSearchItemsArray] = useState<
    searchItemArrayType[]
  >([])

  const handleClick = (key: string) => {
    setActive(key)
  }

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
    const tempSearchItemsArray = []
    const tempIntegrationBodyCollections = [...IntegrationBodyCollections]
    if (searchTerm.length > 0) {
      for (const a of tempIntegrationBodyCollections) {
        if (a.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          tempSearchItemsArray.push({
            title: a.title,
            categories: a.categories,
          })
        }
      }
      setSearchItemsArray([...tempSearchItemsArray])
    }
  }

  return (
    <div>
      <Layout>
        <div style={{ backgroundColor: '#fff' }}>
          <div className={styles.headWrapper}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  { breadcrumbName: 'Integration', path: '/integration' },
                ]}
              />
              <Title>Integration</Title>
            </div>
            <div className={styles.searchWrapper}>
              <SetupSearchInput onChange={handleSearch} />
            </div>
          </div>
          {!searchValue ? (
            <div>
              <Tabs
                tabPosition="left"
                defaultActiveKey={active}
                activeKey={active}
                onTabClick={handleClick}
              >
                <TabPane
                  tab="Manage"
                  key="0"
                  disabled={true}
                  style={{ color: 'red', fontSize: '10px' }}
                />
                <TabPane tab="Your installed apps" key="1">
                  <IntegrationTabBody
                    category="ALL"
                    items={IntegrationBodyCollections}
                    limit={6}
                    installed={1}
                  />
                </TabPane>
                <TabPane tab="Features" key="2" disabled={true} />
                <TabPane tab="All Collections" key="4">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      heading="You recenly viewed"
                      category="ALL"
                      items={IntegrationBodyCollections}
                      limit={6}
                    />
                    <div className={styles.popularWrapper}>
                      <h5>Popular</h5>
                      <div
                        className={styles.seeAll}
                        onClick={(event) => handleClick('5')}
                      >
                        see all &#x2794;
                      </div>
                    </div>
                    <IntegrationTabBody
                      category="Popular"
                      items={IntegrationBodyCollections}
                      limit={6}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Popular" key="5">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="Popular"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Financial" key="6">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="FINANCIAL"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Bookings" key="7">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="Bookings"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Labs" key="8">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="Labs"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Marketing" key="9">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="Marketing"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Vaccination" key="10">
                  <div>
                    <IntegrationHeader />
                    <IntegrationTabBody
                      category="Vaccination"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          ) : (
            <div className={styles.errorWrapper}>
              <Search data={searchItemsArray} searchString={searchValue} />
            </div>
          )}
        </div>
        `
      </Layout>
    </div>
  )
}

export default Integration
