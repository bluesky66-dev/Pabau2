import { Table, useLiveQuery, Pagination, MobileHeader } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import { DocumentNode, useMutation } from '@apollo/client'
import AddButton from './AddButton'
import { Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'
import pluralize from 'pluralize'
import styles from './CrudTable.module.less'
// import DeleteButton from './DeleteButton'
import CrudModal from './CrudModal'
import { Formik, FormikErrors } from 'formik'
import Layout from './Layout/Layout'
import { LeftOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import Link from 'next/link'

const { Title } = Typography

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
  searchQuery?: DocumentNode
}

const CrudTable: FC<P> = ({ schema, addQuery, deleteQuery, listQuery, editQuery, searchQuery }) => {
  const [isActive, setIsActive] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  // eslint-disable-next-line graphql/template-strings
  const [editMutation] = useMutation(editQuery)
  const [addMutation] = useMutation(addQuery)
  const [sourceData, setSourceData] = useState(null)
  const [modalShowing, setModalShowing] = useState<
    Record<string, string | boolean | number> | false
  >(false)

  const { data, error, loading } = useLiveQuery(listQuery, { variables: { isActive } })
  const { data: searchData } = useLiveQuery(searchQuery, {
    variables: { isActive, searchTerm: '%' + searchTerm + '%' },
  })

  useEffect(() => {
    if (searchTerm) {
      setSourceData(searchData)
    } else {
      setSourceData(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchData])

  const onFilterMarketingSource = (isActive) => {
    setIsActive(isActive)
  }

  const onSearch = async (val) => {
    setSearchTerm(val)
  }

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

  console.log('initial values set are', modalShowing)

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
        typeof modalShowing === 'object' ? modalShowing : { name: '..', is_active: false }
      }
    >
      <>
        <div className={classNames(styles.marketingSourcePage, styles.desktopViewNone)}>
          <MobileHeader className={styles.marketingSourceHeader}>
            <div className={styles.allContentAlignMobile}>
              <div className={styles.marketingTextStyle}>
                <Link href="/">
                  <LeftOutlined />
                </Link>
                <p> Marketing sources </p>
              </div>
              {addQuery && (
                <AddButton
                  onClick={() => setModalShowing({ name: '' })}
                  onFilterSource={onFilterMarketingSource}
                  onSearch={onSearch}
                  schema={schema}
                />
              )}
            </div>
          </MobileHeader>
        </div>

        {modalShowing && (
          <CrudModal
            schema={schema}
            editingRow={modalShowing}
            addQuery={addQuery}
            listQuery={listQuery}
            deleteQuery={deleteQuery}
            onClose={() => setModalShowing(false)}
          />
        )}

        <Layout>
          <div className={classNames(styles.tableMainHeading, styles.mobileViewNone)}>
            <div style={{ background: '#FFF' }}>
              <Breadcrumb breadcrumbItems={['Setup', pluralize(schema.full || schema.short)]} />
              <Title>{pluralize(schema.full || schema.short)}</Title>
            </div>
            {addQuery && (
              <AddButton
                onClick={() => setModalShowing({ name: '', isCreate: true })}
                onFilterSource={onFilterMarketingSource}
                onSearch={onSearch}
                schema={schema}
              />
            )}
          </div>
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
            onRowClick={(e) => setModalShowing(e)}
          />
          <Pagination total={50} defaultPageSize={10} defaultCurrent={1} />
        </Layout>
      </>
    </Formik>
  )
}

export default CrudTable
