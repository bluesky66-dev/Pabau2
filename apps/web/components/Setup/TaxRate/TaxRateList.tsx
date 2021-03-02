import React, { useState, useEffect } from 'react'
import { Card, Typography } from 'antd'
import {
  Table,
  Notification,
  NotificationType,
  useLiveQuery,
  Pagination,
} from '@pabau/ui'
import { DocumentNode, gql, useMutation } from '@apollo/client'
import CreateTaxRateModal from './CreateTaxRateModal'

const taxRateColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { value }) => <span>{value}%</span>,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '180px',
  },
]

export interface TaxRateProps {
  listQuery: DocumentNode
  onCreateTaxRate: () => void
}

const EDIT_MUTATION = gql`
  mutation update_tax_rates_by_pk(
    $id: uuid!
    $name: String
    $value: Float
    $isActive: Boolean = true
    $glCode: String
  ) {
    update_tax_rates_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        value: $value
        is_active: $isActive
        glCode: $glCode
      }
    ) {
      id
    }
  }
`

const DELETE_MUTATION = gql`
  mutation delete_tax_rates_by_pk($id: uuid!) {
    delete_tax_rates_by_pk(id: $id) {
      id
    }
  }
`

const UPDATE_ORDER_MUTATION = gql`
  mutation update_tax_order($id: uuid!, $order: Int) {
    update_tax_rates(where: { id: { _eq: $id } }, _set: { order: $order }) {
      affected_rows
    }
  }
`

const LIST_AGGREGATE_QUERY = gql`
  query tax_aggregate {
    tax_rates_aggregate {
      aggregate {
        count
      }
    }
  }
`

export function TaxRate({ listQuery, onCreateTaxRate }: TaxRateProps) {
  const [showModal, setShowModal] = useState(false)
  const [editData, setEditData] = useState(null)

  const [paginateData, setPaginateData] = useState({
    currentPage: 0,
    total: 0,
    offset: 0,
    limit: 10,
    showingRecords: 0,
  })

  const { data, error, loading } = useLiveQuery(listQuery, {
    variables: {
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })

  const { data: aggregateData } = useLiveQuery(LIST_AGGREGATE_QUERY)

  const [editMutation] = useMutation(EDIT_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully edited a tax rate`
      )
    },
    onError() {
      Notification(NotificationType.error, `Error! While editing a  tax rate`)
    },
  })

  const [deleteMutation] = useMutation(DELETE_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully deleted a tax rate`
      )
    },
    onError() {
      Notification(NotificationType.error, `Error! While deleting a tax rate`)
    },
  })

  const [updateOrderMutation] = useMutation(UPDATE_ORDER_MUTATION, {
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! While updating a tax rate order`
      )
    },
  })

  useEffect(() => {
    if (aggregateData)
      setPaginateData({
        ...paginateData,
        total: aggregateData?.aggregate.count,
        showingRecords: data?.length,
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData])

  const onRowClick = (data) => {
    setEditData(data)
    setShowModal(true)
  }

  const onTaxEdit = async (values) => {
    await editMutation({
      variables: {
        ...editData,
        ...values,
        value: Number.parseFloat(values.value),
      },
      optimisticResponse: {},
      update: (proxy) => {
        const existing = proxy.readQuery({
          query: listQuery,
        })
        if (existing) {
          const key = Object.keys(existing)[0]
          proxy.writeQuery({
            query: listQuery,
            data: {
              [key]: [...existing[key], values],
            },
          })
        }
      },
    })
  }

  const onTaxDelete = async () => {
    await deleteMutation({
      variables: { id: editData?.id },
      optimisticResponse: {},
      update: (cache) => {
        const existing = cache.readQuery({
          query: listQuery,
        })
        if (existing) {
          // eslint-disable-next-line @typescript-eslint/ban-types
          const key = Object.keys(existing as object)[0]
          cache.writeQuery({
            query: listQuery,
            data: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              [key]: (existing[key] as Record<string, never>).filter(
                (e) => e.id !== editData?.id
              ),
            },
          })
        }
      },
    })
    setShowModal(false)
    setEditData(null)
  }

  const updateOrder = async (values) => {
    await updateOrderMutation({
      variables: values,
      optimisticResponse: {},
      update: (proxy) => {
        if (listQuery) {
          const existing = proxy.readQuery({
            query: listQuery,
          })
          if (existing) {
            const key = Object.keys(existing)[0]
            proxy.writeQuery({
              query: listQuery,
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

  const onReorder = ({ newData, oldIndex, newIndex }) => {
    newData = newData.map((d, i) => {
      d.order = data[i].order
      return d
    })
    if (oldIndex > newIndex) {
      for (let i = newIndex; i <= oldIndex; i++) updateOrder(newData[i])
    } else {
      for (let i = oldIndex; i <= newIndex; i++) updateOrder(newData[i])
    }
  }

  if (error) {
    return (
      <Typography.Paragraph type="danger">{error.message}</Typography.Paragraph>
    )
  }

  return (
    <>
      <Card bodyStyle={{ padding: 0 }} style={{ borderTopWidth: 0 }}>
        <Table
          draggable={true}
          columns={taxRateColumns}
          loading={loading}
          dataSource={data?.map((e: { id: string }) => ({ key: e.id, ...e }))}
          onRowClick={onRowClick}
          onAddTemplate={onCreateTaxRate}
          noDataText="block type"
          noDataBtnText="block type"
          rowKey="key"
          style={{ height: '100%' }}
          sticky={{ offsetScroll: 80, offsetHeader: 80 }}
          pagination={data?.length > 10 ? {} : false}
          scroll={{ x: 'max-content' }}
          updateDataSource={onReorder}
        />
      </Card>
      <Pagination
        total={paginateData.total}
        defaultPageSize={10}
        showSizeChanger={false}
        onChange={onPaginationChange}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        showingRecords={paginateData.showingRecords}
      />
      {showModal && (
        <CreateTaxRateModal
          isEdit={true}
          editData={editData}
          visible={showModal}
          onCancel={() => setShowModal(false)}
          onSave={onTaxEdit}
          onDelete={onTaxDelete}
        />
      )}
    </>
  )
}

export default TaxRate
