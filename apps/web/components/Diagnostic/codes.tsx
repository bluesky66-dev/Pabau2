import { gql, useMutation } from '@apollo/client'

import React, { FC, useEffect, useState } from 'react'
import { Table, useLiveQuery } from '@pabau/ui'
import styles from './common.module.less'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CodeProps {}

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
  query ListCode {
    diagnostic_codes(order_by: { order: asc }) {
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

const Code: FC = (props: CodeProps) => {
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
      />
    </div>
  )
}

export default Code
