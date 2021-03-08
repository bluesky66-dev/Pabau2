import { gql, useMutation } from '@apollo/client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { Pagination, Table, useLiveQuery } from '@pabau/ui'
import styles from './common.module.less'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CodeProps {
  searchTerms: string
}

const schema: Schema = {
  full: 'diagnostic_code',
  fullLower: 'diagnostic_code',
  short: 'diagnostic_code',
  shortLower: 'diagnostic_code',
  createButtonLabel: 'Create Code',
  messages: {
    create: {
      success: 'You have successfully created a code',
      error: 'While creating a code',
    },
    update: {
      success: 'You have successfully updated a code',
      error: 'While updating a code',
    },
    delete: {
      success: 'You have successfully deleted a code',
      error: 'While deleting a code',
    },
  },
  fields: {
    code: {
      full: 'Code',
      fullLower: 'code',
      short: 'Code',
      shortLower: 'code',
      min: 2,
      example: '7282',
      cssWidth: 'max',
      type: 'string',
    },
    layer1: {
      full: 'Layer 1',
      fullLower: 'layer1',
      short: 'Layer 1',
      shortLower: 'layer1',
      min: 2,
      example: 'Test',
      cssWidth: 'max',
      type: 'string',
    },
    layer2: {
      full: 'Layer 2',
      fullLower: 'layer2',
      short: 'Layer 2',
      shortLower: 'layer2',
      min: 2,
      example: 'Test',
      cssWidth: 'max',
      type: 'string',
    },
    layer3: {
      full: 'Layer 3',
      fullLower: 'layer3',
      short: 'Layer 3',
      shortLower: 'layer3',
      min: 2,
      example: 'Test',
      cssWidth: 'max',
      type: 'string',
    },
    description: {
      full: 'Description',
      fullLower: 'description',
      short: 'Description',
      shortLower: 'description',
      min: 2,
      example: 'Test',
      cssWidth: 'max',
      type: 'string',
    },
  },
}

export const LIST_QUERY = gql`
  query diagnostic_codes($searchTerm: String = "", $offset: Int, $limit: Int) {
    diagnostic_codes(
      offset: $offset
      limit: $limit
      order_by: { order: desc }
      where: {
        layer1: { _ilike: $searchTerm }
        _or: {
          layer2: { _ilike: $searchTerm }
          _or: {
            layer3: { _ilike: $searchTerm }
            _or: {
              layer4: { _ilike: $searchTerm }
              _or: { description: { _ilike: $searchTerm } }
            }
          }
        }
      }
    ) {
      id
      code
      layer1
      layer2
      layer3
      description
      order
    }
  }
`

export const UPDATE_CODE_ORDER = gql`
  mutation update_diagnostic_code_order($id: uuid!, $order: Int) {
    update_diagnostic_codes(
      where: { id: { _eq: $id } }
      _set: { order: $order }
    ) {
      affected_rows
    }
  }
`

const LIST_AGGREGATE_QUERY = gql`
  query diagnostic_codes_aggregate($searchTerm: String = "") {
    diagnostic_codes_aggregate(
      where: { description: { _ilike: $searchTerm } }
    ) {
      aggregate {
        count
      }
    }
  }
`
const Code: FC<CodeProps> = ({ searchTerms }) => {
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

  const [updateOrderMutation] = useMutation(UPDATE_CODE_ORDER, {
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
            if (existing?.diagnostic_codes) {
              const key = Object.keys(existing.diagnostic_codes)[0]
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
    <div ref={codesetRef} className={styles.codesetTableBlock}>
      <div className={styles.codesTable}>
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
  )
}

export default Code
