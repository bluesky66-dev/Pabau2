/* eslint-disable */
import React, { useState, useEffect, FC } from 'react'
import {
  Notification,
  NotificationType,
  Table,
  useLiveQuery,
  Pagination,
} from '@pabau/ui'

import styles from '../../../../../libs/ui/src/lib/table/Table.module.less'
import { Typography } from 'antd'

import { useMutation } from '@apollo/client'
import { columns, thirdPartySchema, Queries, Mutations } from './Schema'


interface ThirdPartyTableProps {
  searchTerm?: string
  isActive?: boolean
  openModal?(): void
}

const ThirdPartyTable: FC<ThirdPartyTableProps> = ({
  searchTerm,
  isActive,
  openModal,
}) => {
  const { Paragraph, Title } = Typography

  const [showModal, setShowModal] = useState(false)
  const [edit, setEdit] = useState(null)
  const [sourceData, setSourceData] = useState(null)
  const [paginateData, setPaginateData] = useState({
    currentPage: 0,
    total: 0,
    offset: 0,
    limit: 10,
    showingRecords: 0,
  })

  const { data, error, loading } = useLiveQuery(Queries.LIST_QUERY, {
    variables: {
      isActive,
      company: true,
      searchTerm: '%' + searchTerm + '%',
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })

  const { data: aggregateData } = useLiveQuery(Queries.LIST_AGGREGATE_QUERY, {
    variables: {
      isActive,
      company: true,
      searchTerm: '%' + searchTerm + '%',
    },
  })

  const [addMutation] = useMutation(Mutations.ADD_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully created a blockout option`
      )
    },
    onError() {
      Notification(
        NotificationType.error,
        `Error! While creating a blockout option`
      )
    },
  })

  const [editMutation] = useMutation(Mutations.EDIT_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully edited a blockout option`
      )
    },
    onError() {
      Notification(
        NotificationType.error,
        `Error! While editing a blockout option`
      )
    },
  })

  const [deleteMutation] = useMutation(Mutations.DELETE_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully deleted a blockout option`
      )
    },
    onError() {
      Notification(
        NotificationType.error,
        `Error! While deleting a blockout option`
      )
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData])

  const onRowClick = (data) => {
    setEdit(data)
    setShowModal(true)
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData((d) => ({ ...d, offset, currentPage }))
  }

  const createClick = () => {
    openModal()
    setShowModal(true)
    setEdit(null)
  }

  const onSave = async (values) => {
    setShowModal(false)
    setEdit(null)
    await (edit
      ? editMutation({
        variables: { ...edit, ...values },
        optimisticResponse: {},
        update: (proxy) => {
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
        },
      })
      : addMutation({
        variables: values,
        optimisticResponse: {},
        update: (proxy) => {
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
        },
      }))
  }

  const onDelete = async () => {
    await deleteMutation({
      variables: { id: edit?.id },
      optimisticResponse: {},
      update: (cache) => {
        const existing = cache.readQuery({
          query: Queries.LIST_QUERY,
        })
        if (existing) {
          // eslint-disable-next-line @typescript-eslint/ban-types
          const key = Object.keys(existing as object)[0]
          cache.writeQuery({
            query: Queries.LIST_QUERY,
            data: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              [key]: (existing[key] as Record<string, never>).filter(
                (e) => e.id !== edit?.id
              ),
            },
          })
        }
      },
    })
    setShowModal(false)
    setEdit(null)
  }
  return (
    <>
      <div className={styles.dragTable}>
        <Table
          pagination={sourceData?.length > 10 ? {} : false}
          style={{ height: '100%' }}
          scroll={{ x: 'max-content' }}
          // sticky={{ offsetScroll: 80, offsetHeader: 80 }}
          draggable={true}
          noDataBtnText={thirdPartySchema.full}
          noDataText={thirdPartySchema.fullLower}
          searchTerm={searchTerm}
          columns={columns}
          dataSource={data?.map((d) => ({ ...d, key: d.id }))}
          onRowClick={onRowClick}
          loading={loading}
          onAddTemplate={createClick}
          rowKey="id"
        />
      </div>
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

export default React.memo(ThirdPartyTable)
