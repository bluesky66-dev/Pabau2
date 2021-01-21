import { Table, useLiveQuery, Pagination, MobileHeader } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import { DocumentNode } from '@apollo/client'
import AddButton from './AddButton'
import { Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'
import pluralize from 'pluralize'
import styles from './CrudTable.module.less'
// import { isMobile, isTablet } from 'react-device-detect'
import Layout from './Layout/Layout'
import { LeftOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import Link from 'next/link'

const { Title } = Typography
// import DeleteButton from './DeleteButton'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  filterQuery?: DocumentNode
  searchQuery?: DocumentNode
}

const CrudTable: FC<P> = ({
  schema,
  addQuery,
  deleteQuery,
  listQuery,
  filterQuery,
  searchQuery,
}) => {
  const [sourceData, setSourceData] = useState(null)
  const [isFilterData, setFilterData] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const { data: marketingSourceData, error, loading } = useLiveQuery(listQuery, {
    skip: isFilterData,
  })
  const { data: marketingSourceFilterData } = useLiveQuery(filterQuery, { variables: { isActive } })
  const { data: marketingSourceSearchData } = useLiveQuery(searchQuery, {
    variables: { searchTerm: '%' + searchTerm + '%' },
  })

  useEffect(() => {
    if (isFilterData) {
      setSourceData(marketingSourceFilterData)
    } else if (searchTerm) {
      setSourceData(marketingSourceSearchData)
    } else {
      setSourceData(marketingSourceData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marketingSourceData, marketingSourceFilterData, marketingSourceSearchData])

  const onFilterMarketingSource = (isActive) => {
    setIsActive(isActive)
    setFilterData(true)
  }

  const onSearch = (val) => {
    if (val) {
      setFilterData(false)
    }
    setSearchTerm(val)
  }

  if (error) return <p>Error :( {error.message}</p>

  return (
    <>
      <div className={classNames(styles.marketingSourcePage, styles.desktopViewNone)}>
        <MobileHeader className={styles.marketingSourceHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.marketingTextStyle}>
              <Link href="/">
                <LeftOutlined />
              </Link>
              <p> Marketing sources </p>
            </div>
            {addQuery && (
              <AddButton
                addQuery={addQuery}
                listQuery={listQuery}
                schema={schema}
                onFilterSource={onFilterMarketingSource}
                onSearch={onSearch}
              />
            )}
          </div>
        </MobileHeader>
      </div>

      <Layout>
        <div className={classNames(styles.tableMainHeading, styles.mobileViewNone)}>
          <div style={{ background: '#FFF' }}>
            <Breadcrumb breadcrumbItems={['Setup', pluralize(schema.full || schema.short)]} />
            <Title>{pluralize(schema.full || schema.short)}</Title>
          </div>
          {addQuery && (
            <AddButton
              addQuery={addQuery}
              listQuery={listQuery}
              schema={schema}
              onFilterSource={onFilterMarketingSource}
              onSearch={onSearch}
            />
          )}
        </div>

        <Table
          loading={loading}
          style={{ height: '100%' }}
          sticky={{ offsetScroll: 80, offsetHeader: 80 }}
          pagination={sourceData?.length > 10 ? {} : false}
          scroll={{ x: 'max-content' }}
          draggable={true}
          columns={[
            ...Object.entries(schema.fields).map(([k, v]) => ({
              dataIndex: k,
              width: v.cssWidth,
              title: v.short || v.full,
            })),
            // {
            //   title: 'Actions',
            //   width: '10em',
            //   // eslint-disable-next-line react/display-name
            //   render: ({ id }) => {
            //     return (
            //       // eslint-disable-next-line react/jsx-no-useless-fragment
            //       <>
            //         {deleteQuery && (
            //           <DeleteButton
            //             id={id}
            //             listQuery={listQuery}
            //             deleteQuery={deleteQuery}
            //
            //             // onClick={() =>
            //
            //             // }
            //           >
            //             Delete
            //           </DeleteButton>
            //         )}
            //       </>
            //     )
            //   },
            // },
          ]}
          // eslint-disable-next-line
          dataSource={sourceData?.map((e: { id: any }) => ({ key: e.id, ...e }))}
          updateDataSource={({ newData, oldIndex, newIndex }) => {
            setSourceData(newData)
            console.log('newData, oldIndex, newIndex ', { newData, oldIndex, newIndex })
          }}
        />
        <Pagination total={50} defaultPageSize={10} defaultCurrent={1} />
      </Layout>
    </>
  )
}

export default CrudTable
