import React, { FC, useState } from 'react'
import { Card, Col, Divider, Row, Typography } from 'antd'
import {
  Breadcrumb,
  Notification,
  NotificationType,
  ReportsCard,
  SetupSearchInput,
} from '@pabau/ui'
import SearchResults from './../setup/searchResults'
import Layout from '../../components/Layout/Layout'
import styles from './reports.module.less'
import { reportCardsData } from '../../mocks/data'

const Reports: FC = (props) => {
  const { Title } = Typography

  const [searchData, setSearchData] = useState([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [reportsData, setReportsData] = useState(reportCardsData)

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
          <Col span={24} sm={10}>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Reports', path: '' },
              ]}
            />
            <div></div>
            <Title>{!searchValue ? 'Reports' : 'Search results'}</Title>
          </Col>
          <Col span={24} sm={14}>
            <div className={styles.search}>
              <SetupSearchInput onChange={handleSearch} />
            </div>
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
        {!searchValue ? (
          <Row className={styles.bodyContainer} gutter={24}>
            {reportsData.map((item, index) => {
              return (
                <Col
                  key={index}
                  className={styles.reportContainer}
                  xs={24}
                  md={12}
                  lg={8}
                  xxl={6}
                >
                  <ReportsCard
                    reports={item.reports}
                    graphData={item.graphData}
                    catHeading={item.catHeading}
                    graphDescription={item.graphDescription}
                    description={item.description}
                    chartLabel={item.chartLabel}
                    onReportFavorite={(reportId, isFav) => {
                      const report = item.reports.find((r) => r.id === reportId)
                      report.favorite = isFav
                      reportsData[index] = {
                        ...item,
                        reports: [...item.reports],
                      }
                      setReportsData([...reportsData])
                      Notification(
                        NotificationType.success,
                        `Success - this report was ${
                          isFav ? 'favourited' : 'unfavorited'
                        }`
                      )
                    }}
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
