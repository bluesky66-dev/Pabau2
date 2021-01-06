import { Table } from 'antd'
import React from 'react'
import { useLiveQuery } from '@pabau/ui'
import { DocumentNode } from '@apollo/client'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
}

function CrudTable({ schema, addQuery, deleteQuery, listQuery }: P): JSX.Element {
  const { data, error, loading } = useLiveQuery(listQuery)
  //const [deleteMutation] = useMutation(deleteQuery)

  if (error) return <p>Error :((</p>

  return (
    <>
      {addQuery && <AddButton addQuery={addQuery} listQuery={listQuery} schema={schema} />}

      <Table
        loading={loading}
        style={{ height: '100%' }}
        sticky={true}
        pagination={data?.length > 10 ? {} : false}
        scroll={{ x: 'max-content' }}
        columns={[
          ...Object.entries(schema.fields).map(([k, v]) => ({
            dataIndex: k,
            width: v.cssWidth,
            title: v.short,
          })),
          {
            title: 'Actions',
            width: '10em',
            // eslint-disable-next-line react/display-name
            render: ({ id }) => {
              return (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {deleteQuery && (
                    <DeleteButton
                      id={id}
                      listQuery={listQuery}
                      deleteQuery={deleteQuery}

                      // onClick={() =>

                      // }
                    >
                      Delete
                    </DeleteButton>
                  )}
                </>
              )
            },
          },
        ]}
        // eslint-disable-next-line
        dataSource={data?.map((e: { id: any }) => ({ key: e.id, ...e }))}
      />
    </>
  )
}

export default CrudTable
