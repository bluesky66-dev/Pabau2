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

const tabMenuItems = [
  {
    tabTitle: 'Manage',
    key: '0',
    disable: true,
  },
  {
    tabTitle: 'Your installed apps',
    key: '1',
    disable: false,
    category: 'ALL',
    installed: 1,
  },
  {
    tabTitle: 'Features',
    key: '2',
    disable: true,
  },
  {
    tabTitle: 'All Collections',
    key: '3',
    disable: false,
    category: 'ALL',
    limit: 6,
  },
  {
    tabTitle: 'Popular',
    key: '4',
    disable: false,
    category: 'Popular',
  },
  {
    tabTitle: 'Financial',
    key: '5',
    disable: false,
    category: 'FINANCIAL',
  },
  {
    tabTitle: 'Bookings',
    key: '6',
    disable: false,
    category: 'Bookings',
  },
  {
    tabTitle: 'Labs',
    key: '7',
    disable: false,
    category: 'Labs',
  },
  {
    tabTitle: 'Marketing',
    key: '8',
    disable: false,
    category: 'Marketing',
  },
  {
    tabTitle: 'Vaccination',
    key: '9',
    disable: false,
    category: 'Vaccination',
  },
]
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IntegrationProps {}

interface SearchItemProps {
  categories: string
  title: string
}

interface SearchProps {
  data: SearchItemProps[]
  searchString: string
}

const Search: FC<SearchProps> = ({ data, searchString }) => {
  return (
    <Card className={styles.searchResultsCard} bodyStyle={{ padding: '0' }}>
      {data && data.length > 0 && (
        <div className={styles.searchBody}>
          {data.map((thread, index) => (
            <div key={index} className={styles.searchList}>
              <div className={styles.searchElement}>
                <Highlighter
                  highlightClassName={styles.highlight}
                  searchWords={[searchString]}
                  textToHighlight={thread.title}
                />
                <div className={styles.searchTitle}> - {thread.categories}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!(data?.length > 0) && <SetupEmptySearch />}
    </Card>
  )
}

export const Integration: FC<IntegrationProps> = (props) => {
  const [active, setActive] = useState<string>('3')
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchItemsArray, setSearchItemsArray] = useState<SearchItemProps[]>(
    []
  )

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
    const tempSearchItemsArray = []
    const tempIntegrationBodyCollections = [...IntegrationBodyCollections]
    if (searchTerm.length > 0) {
      for (const a of tempIntegrationBodyCollections) {
        if (a.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          tempSearchItemsArray.push({
            title: a.title,
            categories: a.categories.join(' - '),
          })
        }
      }
      setSearchItemsArray([...tempSearchItemsArray])
    }
  }

  return (
    <div>
      <Layout>
        <div className={styles.mainDiv}>
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
              <SetupSearchInput
                onChange={handleSearch}
                placeholder="Search by integration name"
              />
            </div>
          </div>
          {!searchValue ? (
            <div className={styles.manageWrapper}>
              <Tabs
                tabPosition="left"
                defaultActiveKey={active}
                activeKey={active}
                onTabClick={(value) => setActive(value)}
              >
                {tabMenuItems.map((tabMenuItem) =>
                  tabMenuItem.disable ? (
                    <TabPane
                      tab={tabMenuItem.tabTitle}
                      key={tabMenuItem.key}
                      disabled={tabMenuItem.disable}
                    />
                  ) : (
                    <TabPane tab={tabMenuItem.tabTitle} key={tabMenuItem.key}>
                      {tabMenuItem.tabTitle === 'All Collections' ? (
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
                              onClick={() => setActive('4')}
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
                      ) : (
                        <div>
                          <IntegrationHeader />
                          <IntegrationTabBody
                            category={tabMenuItem.category}
                            items={IntegrationBodyCollections}
                            installed={tabMenuItem.installed}
                            limit={tabMenuItem.limit}
                          />
                        </div>
                      )}
                    </TabPane>
                  )
                )}
              </Tabs>
            </div>
          ) : (
            <div className={styles.errorWrapper}>
              <Search data={searchItemsArray} searchString={searchValue} />
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Integration
