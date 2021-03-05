import { gql, useMutation } from '@apollo/client'
import React, { FC, useEffect, useState } from 'react'
import { Table, useLiveQuery } from '@pabau/ui'
import styles from './common.module.less'
import { LockOutlined } from '@ant-design/icons'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CodeSetProps {}

const schema: Schema = {
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
      full: 'isLock',
      type: 'boolean',
      defaultvalue: true,
    },
  },
}

export const LIST_QUERY = gql`
  query ListCodeSet {
    diagnostic_codeset(order_by: { order: asc }) {
      id
      name
      is_lock
      is_active
      codes
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

const CodeSet: FC = (props: CodeSetProps) => {
  const getQueryVariables = () => {
    const queryOptions = {
      variables: {},
    }

    return queryOptions
  }

  const { data, loading } = useLiveQuery(LIST_QUERY, getQueryVariables())

  const [sourceData, setSourceData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setSourceData(data)
    }
    if (!loading && data) {
      setIsLoading(false)
    }
  }, [data, loading])

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
            if (existing) {
              const key = Object.keys(existing)[0]
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
      if (data[type]) {
        isExist = true
      }
      return data
    })
    return isExist
  }

  return (
    <div>
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
      />
    </div>
  )
}

export default CodeSet
