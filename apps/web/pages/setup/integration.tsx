import React, { FC, useState } from 'react'
import { Layout, Breadcrumb, Input, SetupEmptySearch } from '@pabau/ui'
import { Card, Tabs, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import AllCollectionsHeader, {
  AllCollectionsBody,
} from '../../components/Integration/Integration'
import styles from './integration.module.less'
import xero from '../../assets/images/xero.png'
import mailchimp from '../../assets/images/mailchimp-freddie-icon.png'
import july17 from '../../assets/images/july17.png'
import stripe from '../../assets/images/stripe-2 1.png'
import gocardless from '../../assets/images/gocardless.png'
import healthcode from '../../assets/images/healthcode.png'
import SAP from '../../assets/images/SAP-Logo.png'
import treatwell from '../../assets/images/treatwell.png'
import BNF from '../../assets/images/BNF.png'
import Doctolib from '../../assets/images/Doctolib.png'
import RingCenral from '../../assets/images/RingCenral.png'
import Ometria from '../../assets/images/Ometria.png'

const { Title } = Typography
const { TabPane } = Tabs
const IntegrationBodyCollections = [
  {
    key: 0,
    title: 'Xero',
    subTitle:
      'Software system that helps you see your cashflow in real-time with online accounts & banking',
    logoImage: xero,
    installed: 0,
    categories: ['POPULAR', 'FINANCIAL'],
  },
  {
    key: 1,
    title: 'Mailchimp',
    subTitle: 'Give your marketing efforts a boost',
    logoImage: mailchimp,
    installed: 1,
    categories: ['POPULAR', 'MARKETING'],
  },
  {
    key: 2,
    title: 'ICal Integration',
    subTitle:
      'Keep your life and schedules orginized by publishing dates from your sheets to your iCal',
    logoImage: july17,
    installed: 0,
    categories: ['POPULAR'],
  },
  {
    key: 3,
    title: 'Stripe Integration',
    subTitle:
      'Extend your Stripe account with tools to help your buisness with analytics, accounting, email, expenses, shipping...',
    logoImage: stripe,
    installed: 0,
    categories: ['POPULAR', 'FINANCIAL'],
  },
  {
    key: 4,
    title: 'GoCardless Integration',
    subTitle:
      'Medically-led laboratory with a reputation for excellence in  providing quality accredited pathology services...',
    logoImage: gocardless,
    installed: 0,
    categories: ['FINANCIAL'],
  },
  {
    key: 5,
    title: 'Healthcode',
    subTitle: 'Link up your insurance payments',
    logoImage: healthcode,
    installed: 0,
    categories: ['FINANCIAL'],
  },
  {
    key: 6,
    title: 'SAP',
    subTitle: 'Configure your Pabau system and SAP reports',
    logoImage: SAP,
    installed: 0,
    categories: [],
  },
  {
    key: 7,
    title: 'Treatwell',
    subTitle: 'Link your Pabau diary to trearwell',
    logoImage: treatwell,
    installed: 0,
    categories: ['BOOKINGS'],
  },
  {
    key: 8,
    title: 'BNF',
    subTitle:
      'BNF drug search while prescribing to lesan all the side effects of your drug',
    logoImage: BNF,
    installed: 0,
    categories: [],
  },
  {
    key: 9,
    title: 'Doctolib',
    subTitle: 'Imort online bookings only directly from Doctolib',
    logoImage: Doctolib,
    installed: 0,
    categories: ['BOOKINGS', 'LABS', 'POPULAR'],
  },
  {
    key: 10,
    title: 'RingCenral',
    subTitle: 'Link Pabau to RingCentral',
    logoImage: RingCenral,
    installed: 0,
    categories: [],
  },
  {
    key: 11,
    title: 'Ometria',
    subTitle: 'This will enable the Integration with Ometria',
    logoImage: Ometria,
    installed: 0,
    categories: ['MARKETING'],
  },
]

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
  console.log('searchString', searchString)
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
                    searchWords={[searchString]}
                    textToHighlight={thread.category}
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

export const Integration: FC<IntegrationProps> = (props) => {
  const [active, setActive] = useState('4')
  const [searchString, setSearchString] = useState('')
  const [searchItemsArray, setSearchItemsArray] = useState([])

  function handleClick(key: string) {
    setActive(key)
  }

  function search(e) {
    e = e.trim()
    setSearchString(e)
    const tempSearchItemsArray = []
    const tempIntegrationBodyCollections = IntegrationBodyCollections
    if (searchString.length > 0) {
      for (const a of tempIntegrationBodyCollections) {
        // delete a.subTitle, a.installed, a.logoImage
        tempSearchItemsArray.push({ title: a.title, categories: a.categories })
        console.log('12346')
      }
      setSearchItemsArray(tempSearchItemsArray)
      console.log('searchItemsArray', searchItemsArray.length)
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
              <Input
                name="searchString"
                type="text"
                placeholder="Search by integration name"
                onChange={search}
              />
              <span>
                <SearchOutlined />
              </span>
            </div>
          </div>
          {searchString.length === 0 ? (
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
                  <div>Your installed apps</div>
                </TabPane>
                <TabPane tab="Features" key="2" disabled={true} />
                <TabPane tab="All Collections" key="4">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
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
                    <AllCollectionsBody
                      category="Popular"
                      items={IntegrationBodyCollections}
                      limit={6}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Popular" key="5">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Popular"
                      category="Popular"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Payment Processing" key="6">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Payment Processing"
                      category="Payment"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Accountancy" key="7">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Accountancy"
                      category="Accountancy"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Labs" key="8">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Labs"
                      category="Labs"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Marketing" key="9">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Marketing"
                      category="Marketing"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Vaccination" key="10">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Vaccination"
                      category="Vaccination"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Bookings" key="11">
                  <div>
                    <AllCollectionsHeader />
                    <AllCollectionsBody
                      heading="Bookings"
                      category="Bookings"
                      items={IntegrationBodyCollections}
                    />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          ) : (
            <div className={styles.errorWrapper}>
              <Search data={setSearchItemsArray} searchString={searchString} />
            </div>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Integration
