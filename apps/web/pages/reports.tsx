import React, { FC, useState } from 'react'
import { Card, Typography, Divider, Row, Col } from 'antd'
import { Breadcrumb } from '@pabau/ui'
import { SetupSearchInput, ReportsCard } from '@pabau/ui'
import SearchResults from './setup/searchResults'
import Layout from '../components/Layout/Layout'
import styles from './reports.module.less'
import { reportCardsData } from './data'

const Reports: FC = (props) => {
  const { Title } = Typography

  const [searchData, setSearchData] = useState([])
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm)
    if (searchTerm) {
      const searchDataArray = []

      reportCardsData.map((data) => {
        const titles = data.reports
        if (titles.length > 0) {
          titles.map((subTitle) => {
            if (
              subTitle.reportName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              searchDataArray.push({
                subTitle: subTitle.reportCode,
                title: subTitle.reportName,
              })
            }
            return searchDataArray
          })
        }
        return data
      })

      setSearchData(searchDataArray)
    } else {
      // setTitle('Setup')
    }
  }
  return (
    <Layout>
      <Card bodyStyle={{ padding: 0 }}>
        <Row className={styles.headerContainer}>
          <Col className={styles.nml24}>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Reports', path: '' },
              ]}
            />
            <div></div>
            <Title>{!searchValue ? 'Reports' : 'Search results'}</Title>
          </Col>
          <Col span={18}>
            <div className={styles.search}>
              <SetupSearchInput onChange={handleSearch} />
            </div>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        {!searchValue ? (
          <Row className={styles.bodyContainer} gutter={24}>
            {reportCardsData.map((item, index) => {
              return (
                <Col key={index} className={styles.reportContainer}>
                  <ReportsCard
                    reports={item.reports}
                    graphData={item.graphData}
                    catHeading={item.catHeading}
                    graphDescription={item.graphDescription}
                    description={item.description}
                    chartLabel={item.chartLabel}
                  />
                </Col>
              )
            })}
          </Row>
        ) : (
          <SearchResults data={searchData} searchTerm={searchValue} />
        )}
      </Card>
    </Layout>
  )
}

export default Reports
