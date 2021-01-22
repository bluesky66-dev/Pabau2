import { Table, useLiveQuery, Pagination } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import { DocumentNode, useMutation } from '@apollo/client'
import AddButton from './AddButton'
import CrudModal from './CrudModal'
import { Formik, FormikErrors } from 'formik'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
}

const CrudTable: FC<P> = ({ schema, addQuery, deleteQuery, listQuery, editQuery }) => {
  const { data, error, loading } = useLiveQuery(listQuery)
  // eslint-disable-next-line graphql/template-strings
  const [editMutation] = useMutation(editQuery)
  const [addMutation] = useMutation(addQuery)
  const [sourceData, setSourceData] = useState(null)
  const [modalShowing, setModalShowing] = useState<
    Record<string, string | boolean | number> | false
  >(false)

  useEffect(() => {
    setSourceData(data)
  }, [data])

  if (error) return <p>Error :( {error.message}</p>

  const { fields } = schema

  const onSubmit = async (values) => {
    console.log('got submittal!', values)
    if (values.id)
      await editMutation({
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
    else
      await addMutation({
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
    setModalShowing(false)
  }

  return (
    <Formik
      enableReinitialize={true}
      validate={(e) =>
        Object.entries(fields).reduce((a, c) => {
          if (c[1].min) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (c[1].min > e[c[0]].length) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              a[c[0]] = `The value for ${c[1].shortLower} must be more than ${c[1].min} characters.`
            }
          }
          return a
          // eslint-disable-next-line
        }, {} as FormikErrors<any>)
      }
      onSubmit={(values) => {
        console.log('formik onsubmit', values)
        onSubmit(values)
      }}
      //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
      initialValues={
        // eslint-disable-next-line
        typeof modalShowing === 'object' && (modalShowing as any)?.id
          ? modalShowing
          : { name: 'ee', is_active: true } //TODO: remove this, it should come from schema.fields[].*
      }
    >
      <>
        {addQuery && (
          <AddButton onClick={() => setModalShowing({})}>Create {schema.short}</AddButton>
        )}

        <CrudModal
          schema={schema}
          editingRow={modalShowing}
          addQuery={addQuery}
          listQuery={listQuery}
          deleteQuery={deleteQuery}
          onClose={() => setModalShowing(false)}
        />

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
              render: (value) => {
                if (k === 'is_active') {
                  return value === true ? 'Active' : 'Deactive'
                }
                return value
              },
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
          onRowClick={(e) => setModalShowing(e)}
        />
        <Pagination total={50} defaultPageSize={10} defaultCurrent={1} />
      </>
    </Formik>
  )
}

export default CrudTable
