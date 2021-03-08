import { gql, useMutation } from '@apollo/client'
import React, { FC, useEffect, useState, useRef } from 'react'
import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import { NextPage } from 'next'
import CrudLayout from '../CrudLayout/CrudLayout'
import styles from './common.module.less'
import { LockOutlined, LoadingOutlined } from '@ant-design/icons'

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
      fullLower: 'odes',
      short: 'codes',
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
export const LIST_QUERY1 = gql`
  query ListCodeSet {
    diagnostic_codeset(order_by: { order: asc }) {
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

const LIST_AGGREGATE_QUERY1 = gql`
  query diagnostic_codeset_aggregate {
    diagnostic_codeset_aggregate {
      aggregate {
        count
      }
    }
  }
`
const LIST_AGGREGATE_QUERY = gql`
  query diagnostic_codeset_aggregate(
    $isActive: Boolean = true
    $searchTerm: String = ""
  ) {
    diagnostic_codeset_aggregate(
      where: {
        is_active: { _eq: $isActive }
        _or: [{ _and: [{ name: { _ilike: $searchTerm } }] }]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`
const CodeSet: FC<CodeSetProps> = ({ searchTerms }) => {
  const crudTableRef = useRef(null)
  const [isActive, setIsActive] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
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
        isActive,
        searchTerm: '%' + searchTerm + '%',
        offset: paginateData.offset,
        limit: paginateData.limit,
      },
    }

    return queryOptions
  }

  const getAggregateQueryVariables = () => {
    const queryOptions = {
      variables: {
        isActive,
        searchTerm: '%' + searchTerm + '%',
      },
    }

    // if (!tableSearch) {
    //   delete queryOptions.variables.searchTerm
    // }
    // if (!addFilter) {
    //   delete queryOptions.variables.isActive
    // }
    return queryOptions
  }

  const { data, loading } = useLiveQuery(LIST_QUERY, getQueryVariables())
  const { data: aggregateData } = useLiveQuery(
    LIST_AGGREGATE_QUERY,
    getAggregateQueryVariables()
  )

  useEffect(() => {
    if (crudTableRef.current) {
      crudTableRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [paginateData.currentPage])

  useEffect(() => {
    if (data) setSourceData(data)

    // if (aggregateData)
    setPaginateData({
      ...paginateData,
      // total: aggregateData?.aggregate.count,
      total: 8,
      showingRecords: data?.length,
    })

    if (!loading && data) setIsLoading(false)

    if (searchTerms) {
      const searchData = sourceData.filter(
        (data, i) =>
          data.name.toLowerCase().includes(searchTerms) ||
          data.codes.toLowerCase().includes(searchTerms)
      )
      setSourceData(searchData)
    } else {
      setSourceData(data)
    }
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

  const checkCustomColorIconExsist = (type) => {
    let isExist = false
    sourceData?.map((data) => {
      if (data['is_lock']) {
        isExist = true
      }
      return data
    })
    return isExist
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }

  return (
    <div ref={crudTableRef}>
      <div className={styles.codesetTableBlock}>
        {loading ? (
          <LoadingOutlined className={styles.loader} spin />
        ) : (
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
              isCustomIconExist={checkCustomColorIconExsist('icon')}
              pagination={sourceData?.length > 10 ? {} : false}
            />
            <Pagination
              total={paginateData.total}
              defaultPageSize={5}
              showSizeChanger={true}
              onChange={onPaginationChange}
              pageSize={paginateData.limit}
              current={paginateData.currentPage}
              showingRecords={paginateData.showingRecords}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeSet
