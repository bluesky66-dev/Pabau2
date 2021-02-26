import React, { useState, useEffect } from 'react'
import {
  Breadcrumb,
  Button,
  Notification,
  NotificationType,
  Table,
  useLiveQuery,
  Pagination,
  TabbedTable
} from '@pabau/ui'
import { Card, Col, Row, Typography } from 'antd'

import { gql, useMutation } from '@apollo/client'

export interface BlockOutOptionsProps {}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Provide No',
    dataIndex: 'provide_no',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    className: 'drag-visible',
    visible: true,
  },

  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '160px',
  },
]

const LIST_QUERY = gql`
  query Library($offset: Int, $limit: Int) {
    Library(
      offset: $offset
      limit: $limit
      order_by: { created_at: desc }
    ) {
      id
      name
      provider_no
      email
      phone
      is_active
      type
  
    }
  }
`

const ADD_MUTATION = gql`
  mutation insert_Library_one(
    $name: String
    $type: String
    $email:String
    $phone:Int
    $provider_no:String
    $isActive: Boolean
  ) {
    insert_Library_one(
      object: {
        name: $name
        type: $type
        email: $email
        provider_no: $provider_no
        phone: $phone
        is_active: $isActive
      }
    ) {
      id
      name
      email
      phone
      provider_no
      type
      
    }
  }
`

const EDIT_MUTATION = gql`
  mutation update_job_title_by_pk(
    $id: uuid!
    $name: String
    $type: String
    $paidBlockOut: Boolean = false
    $backgroundColor: String
    $defaultTime: Int
    $isActive: Boolean
  ) {
    update_Library_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        type: $type
        paidBlockOut: $paidBlockOut
        backgroundColor: $backgroundColor
        defaultTime: $defaultTime
        is_active: $isActive
      }
    ) {
      id
    }
  }
`

const DELETE_MUTATION = gql`
  mutation delete_Library_by_pk($id: uuid!) {
    delete_Library_by_pk(id: $id) {
      id
    }
  }
`

const LIST_AGGREGATE_QUERY = gql`
  query Library_aggregate {
    Library_aggregate {
      aggregate {
        count
      }
    }
  }
`

export function BlockOutOptions(props: BlockOutOptionsProps) {
  const { Paragraph, Title } = Typography

  const [showModal, setShowModal] = useState(false)
  const [edit, setEdit] = useState(null)
  const [paginateData, setPaginateData] = useState({
    currentPage: 0,
    total: 0,
    offset: 0,
    limit: 10,
    showingRecords: 0,
  })

  const { data, error, loading } = useLiveQuery(LIST_QUERY, {
    variables: {
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })

  const { data: aggregateData } = useLiveQuery(LIST_AGGREGATE_QUERY)

  const [addMutation] = useMutation(ADD_MUTATION, {
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

  const [editMutation] = useMutation(EDIT_MUTATION, {
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

  const [deleteMutation] = useMutation(DELETE_MUTATION, {
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
              query: LIST_QUERY,
            })
            if (existing) {
              const key = Object.keys(existing)[0]
              proxy.writeQuery({
                query: LIST_QUERY,
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
              query: LIST_QUERY,
            })
            if (existing) {
              const key = Object.keys(existing)[0]
              proxy.writeQuery({
                query: LIST_QUERY,
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
          query: LIST_QUERY,
        })
        if (existing) {
          // eslint-disable-next-line @typescript-eslint/ban-types
          const key = Object.keys(existing as object)[0]
          cache.writeQuery({
            query: LIST_QUERY,
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
   
        <div>
        <div>
        <Table
          columns={columns}
          dataSource={data?.map((d) => ({ ...d, key: d.id }))}
          onRowClick={onRowClick}
          loading={loading}
          noDataText="block type"
          noDataBtnText="block type"
          onAddTemplate={createClick}
          rowKey="id"
        />
        </div>
     
    <div>
      <Pagination
        showingRecords={paginateData.showingRecords}
        defaultCurrent={1}
        total={paginateData.total}
        pageSize={paginateData.limit}
        current={paginateData.currentPage}
        onChange={onPaginationChange}
      />
      </div>
      </div>
 
  )
}

export default BlockOutOptions
