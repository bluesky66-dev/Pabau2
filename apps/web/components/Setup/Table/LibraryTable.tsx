import React, { useState, useEffect, FC } from 'react'
import {
  Table,
  useLiveQuery,
  Pagination,
  Notification,
  NotificationType,
} from '@pabau/ui'
import { columns, thirdPartySchema, Queries, Mutations } from './Schema'
import { useMutation } from '@apollo/client'

interface LibraryTableProps {
  searchTerm?: string
  filterPreferences?: ThirdPartiesFilterPreferencetype
  openModal?(): void
  setEditPage?(data: ThirdPartiesEditFieldsType): void
}

const LibraryTable: FC<LibraryTableProps> = ({
  searchTerm,
  filterPreferences,
  openModal,
  setEditPage,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [sourceData, setSourceData] = useState(null)
  const [paginateData, setPaginateData] = useState({
    currentPage: 0,
    total: 0,
    offset: 0,
    limit: 10,
    showingRecords: 0,
  })

  const [updateOrderMutation] = useMutation(Mutations.UPDATE_ORDER_MUTATION, {
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! ${thirdPartySchema.messages.update.error}`
      )
    },
  })

  const { data, error, loading } = useLiveQuery(Queries.LIST_QUERY, {
    variables: {
      isActive: filterPreferences.isActive,
      type: filterPreferences.type,
      company: true,
      searchTerm: '%' + searchTerm + '%',
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })

  const { data: aggregateData } = useLiveQuery(Queries.LIST_AGGREGATE_QUERY, {
    variables: {
      isActive: filterPreferences.isActive,
      type: filterPreferences.type,
      company: true,
      searchTerm: '%' + searchTerm + '%',
    },
  })

  useEffect(() => {
    if (data) {
      setSourceData(data)
    }
    if (aggregateData) {
      setPaginateData({
        ...paginateData,
        total: aggregateData.aggregate?.count,
        showingRecords: data?.length,
      })
    }
    if (!loading && data) setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData, error, loading])

  const onRowClick = (data) => {
    setEditPage(data)
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData((d) => ({ ...d, offset, currentPage }))
  }

  const createClick = () => {
    openModal()
  }

  const updateOrder = async (values) => {
    if (values.id)
      await updateOrderMutation({
        variables: values,
        optimisticResponse: {},
        update: (proxy) => {
          if (Queries.LIST_QUERY) {
            const existing = proxy.readQuery({
              query: Queries.LIST_QUERY,
            })
            if (existing) {
              const key = Object.keys(existing)[0]
              proxy.writeQuery({
                query: Queries.LIST_QUERY,
                data: {
                  [key]: [...existing[key], values],
                },
              })
            }
          }
        },
      })
  }

  return (
    <>
      <Table
        pagination={sourceData?.length > 10 ? {} : false}
        // style={{ height: '100%' }}
        scroll={{ x: 'max-content' }}
        // sticky={{ offsetScroll: 80, offsetHeader: 80 }}
        draggable={true}
        noDataBtnText={thirdPartySchema.full}
        noDataText={thirdPartySchema.fullLower}
        searchTerm={searchTerm}
        columns={columns}
        dataSource={sourceData?.map((d) => ({ ...d, key: d.id }))}
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
          console.log('newData, oldIndex, newIndex', {
            newData,
            oldIndex,
            newIndex,
          })
        }}
        onRowClick={onRowClick}
        loading={isLoading}
        onAddTemplate={createClick}
        rowKey="id"
      />
      <Pagination
        total={paginateData.total}
        defaultPageSize={10}
        showSizeChanger={false}
        onChange={onPaginationChange}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        showingRecords={paginateData.showingRecords}
      />
    </>
  )
}

export default LibraryTable
