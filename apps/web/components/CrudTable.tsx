import { Table, useLiveQuery } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import { DocumentNode } from '@apollo/client'
import AddButton from './AddButton'
// import DeleteButton from './DeleteButton'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
}

const CrudTable: FC<P> = ({ schema, addQuery, deleteQuery, listQuery }) => {
  const { data, error, loading } = useLiveQuery(listQuery)

  const [sourceData, setSourceData] = useState(null)

  useEffect(() => {
    setSourceData(data)
  }, [data])

  if (error) return <p>Error :( {error.message}</p>

  return (
    <>
      {addQuery && <AddButton addQuery={addQuery} listQuery={listQuery} schema={schema} />}

      <Table
        loading={loading}
        style={{ height: '100%' }}
        sticky={{ offsetScroll: 80, offsetHeader: 80 }}
        pagination={sourceData?.length > 10 ? {} : false}
        scroll={{ x: 'max-content' }}
        draggable={true}
        columns={[
          ...Object.entries(schema.fields).map(([k, v]) => ({
            dataIndex: k,
            width: v.cssWidth,
            title: v.short || v.full,
          })),
          // {
          //   title: 'Actions',
          //   width: '10em',
          //   // eslint-disable-next-line react/display-name
          //   render: ({ id }) => {
          //     return (
          //       // eslint-disable-next-line react/jsx-no-useless-fragment
          //       <>
          //         {deleteQuery && (
          //           <DeleteButton
          //             id={id}
          //             listQuery={listQuery}
          //             deleteQuery={deleteQuery}
          //
          //             // onClick={() =>
          //
          //             // }
          //           >
          //             Delete
          //           </DeleteButton>
          //         )}
          //       </>
          //     )
          //   },
          // },
        ]}
        // eslint-disable-next-line
        dataSource={sourceData?.map((e: { id: any }) => ({ key: e.id, ...e }))}
        updateDataSource={({ newData, oldIndex, newIndex }) => {
          setSourceData(newData)
          console.log('newData, oldIndex, newIndex ', { newData, oldIndex, newIndex })
        }}
      />
    </>
  )
}

export default CrudTable
