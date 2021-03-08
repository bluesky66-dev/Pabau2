import { gql, useMutation } from '@apollo/client'
import React, { FC, useEffect, useState, useRef } from 'react'
import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import styles from './common.module.less'

export interface CodeSetProps {
  searchTerms: string
}

export const schema: Schema = {
  full: 'diagnostic_code_set',
  fullLower: 'diagnostic_code_set',
  short: 'diagnostic_code_set',
  shortLower: 'diagnostic_code_set',
  createButtonLabel: 'Create Codeset',
  messages: {
    create: {
      success: 'You have successfully created a codeset',
      error: 'While creating a codeset',
    },
    update: {
      success: 'You have successfully updated a codeset',
      error: 'While updating a codeset',
    },
    delete: {
      success: 'You have successfully deleted a codeset',
      error: 'While deleting a codeset',
    },
  },
  fields: {
    name: {
      full: 'CodeSetName',
      fullLower: 'codesetname',
      short: 'Name',
      shortLower: 'name',
      min: 2,
      example: 'ICD10',
      cssWidth: 'max',
      type: 'string',
    },
    codes: {
      full: 'Codes',
      fullLower: 'codes',
      short: 'Codes',
      shortLower: 'codes',
      min: 2,
      example: '70,000',
      cssWidth: 'max',
      type: 'string',
    },
    is_active: {
      full: 'Status',
      type: 'boolean',
      defaultvalue: true,
    },
    is_lock: {
      full: '',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}
const LIST_QUERY = gql`
  query diagnostic_codeset(
    $searchTerm: String = ""
    $offset: Int
    $limit: Int
  ) {
    diagnostic_codeset(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: { name: { _ilike: $searchTerm } }
    ) {
      id
      name
      is_lock
      is_active
      codes
      order
    }
  }
`

export const UPDATE_CODESET_ORDER = gql`
  mutation update_diagnostic_codeset_order($id: uuid!, $order: Int) {
    update_diagnostic_codeset(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const LIST_AGGREGATE_QUERY = gql`
  query diagnostic_codeset_aggregate($searchTerm: String = "") {
    diagnostic_codeset_aggregate(where: { name: { _ilike: $searchTerm } }) {
      aggregate {
        count
      }
    }
  }
`

const CodeSet: FC<CodeSetProps> = ({ searchTerms }) => {
  const codesetRef = useRef(null)
  const [sourceData, setSourceData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [paginateData, setPaginateData] = useState({
    total: 0,
    offset: 0,
    limit: 5,
    currentPage: 1,
    showingRecords: 0,
  })
  const getQueryVariables = () => {
    const queryOptions = {
      variables: {
        searchTerm: '%' + searchTerms + '%',
        offset: paginateData.offset,
        limit: paginateData.limit,
      },
    }

    return queryOptions
  }

  const getAggregateQueryVariables = () => {
    const queryOptions = {
      variables: {
        searchTerm: '%' + searchTerms + '%',
      },
    }

    return queryOptions
  }

  const { data, loading } = useLiveQuery(LIST_QUERY, getQueryVariables())
  const { data: aggregateData } = useLiveQuery(
    LIST_AGGREGATE_QUERY,
    getAggregateQueryVariables()
  )

  useEffect(() => {
    if (codesetRef.current) {
      codesetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [paginateData.currentPage])

  useEffect(() => {
    if (data) setSourceData(data)

    if (aggregateData)
      setPaginateData({
        ...paginateData,
        total: aggregateData?.aggregate.count,
        showingRecords: data?.length,
      })

    if (!loading && data) setIsLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, searchTerms, aggregateData])

  const [updateOrderMutation] = useMutation(UPDATE_CODESET_ORDER, {
    onError(err) {
      console.log('error')
    },
  })

  const updateOrder = async (values) => {
    if (values.id)
      await updateOrderMutation({
        variables: values,
        optimisticResponse: {},
        update: (proxy) => {
          if (LIST_QUERY) {
            const existing = proxy.readQuery({
              query: LIST_QUERY,
            })
            if (existing?.diagnostic_codeset) {
              const key = Object.keys(existing.diagnostic_codeset)[0]
              proxy.writeQuery({
                query: LIST_QUERY,
                data: {
                  [key]: [...existing[key], values],
                },
              })
            }
          }
        },
      })
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }

  function onShowSizeChange(currentPage, pageSize) {
    const offset = pageSize * (currentPage - 1)
    setPaginateData({
      ...paginateData,
      limit: 20,
      offset,
      currentPage: currentPage,
    })
  }

  return (
    <div ref={codesetRef}>
      <div className={styles.codesetTableBlock}>
        <div className={styles.codesetTable}>
          <Table
            loading={isLoading}
            // eslint-disable-next-line
            dataSource={sourceData?.map((e: { id: any }) => ({
              key: e.id,
              ...e,
            }))}
            updateDataSource={({ newData, oldIndex, newIndex }) => {
              newData = newData.map((data, i) => {
                data.order = sourceData[i].order
                return data
              })
              if (oldIndex > newIndex) {
                for (let i = newIndex; i <= oldIndex; i++) {
                  updateOrder(newData[i])
                }
              } else {
                for (let i = oldIndex; i <= newIndex; i++) {
                  updateOrder(newData[i])
                }
              }
              setSourceData(newData)
            }}
            padlocked={[]}
            draggable={true}
            columns={[
              ...Object.entries(schema.fields).map(([k, v]) => ({
                dataIndex: k,
                width: v.cssWidth,
                title: v.short || v.full,
                visible: Object.prototype.hasOwnProperty.call(v, 'visible')
                  ? v.visible
                  : true,
              })),
            ]}
            searchTerm={searchTerms}
            pagination={sourceData?.length > 10 ? {} : false}
          />
          <Pagination
            total={paginateData.total}
            defaultPageSize={50}
            showSizeChanger={true}
            onChange={onPaginationChange}
            pageSize={paginateData.limit}
            current={paginateData.currentPage}
            showingRecords={paginateData.showingRecords}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeSet
