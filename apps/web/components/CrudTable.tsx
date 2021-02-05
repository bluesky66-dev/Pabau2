import {
  Table,
  useLiveQuery,
  Pagination,
  MobileHeader,
  Notification,
  NotificationType,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import { DocumentNode, useMutation } from '@apollo/client'
import AddButton from './AddButton'
import { Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'
// import pluralize from 'pluralize'
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
  aggregateQuery?: DocumentNode
  tableSearch?: boolean
}

const CrudTable: FC<P> = ({
  schema,
  addQuery,
  deleteQuery,
  listQuery,
  editQuery,
  aggregateQuery,
  tableSearch = true,
}) => {
  const [isActive, setIsActive] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  // eslint-disable-next-line graphql/template-strings
  const [editMutation] = useMutation(editQuery, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! ${schema.messages.update.success}`
      )
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! ${schema.messages.update.error}`
      )
    },
  })
  const [addMutation] = useMutation(addQuery, {
    onCompleted(data) {
      Notification(
        NotificationType.success,
        `Success! ${schema.messages.create.success}`
      )
    },
    onError(err) {
      Notification(
        NotificationType.error,
        `Error! ${schema.messages.create.error}`
      )
    },
  })
  const [sourceData, setSourceData] = useState(null)
  const [paginateData, setPaginateData] = useState({
    total: 0,
    offset: 0,
    limit: 10,
    currentPage: 1,
    showingRecords: 0,
  })
  const [modalShowing, setModalShowing] = useState<
    Record<string, string | boolean | number> | false
  >(false)
  const { data, error, loading } = useLiveQuery(listQuery, {
    variables: {
      isActive,
      searchTerm: '%' + searchTerm + '%',
      offset: paginateData.offset,
      limit: paginateData.limit,
    },
  })
  const { data: aggregateData } = useLiveQuery(aggregateQuery, {
    variables: {
      isActive,
      searchTerm: '%' + searchTerm + '%',
    },
  })

  useEffect(() => {
    setSourceData(data)
    setPaginateData({
      ...paginateData,
      total: aggregateData?.aggregate.count,
      showingRecords: data?.length,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData])

  const onFilterMarketingSource = () => {
    resetPagination()
    setIsActive((e) => !e)
  }

  const onSearch = async (val) => {
    if (val !== searchTerm) {
      resetPagination()
      setSearchTerm(val)
    }
  }

  const onPaginationChange = (currentPage) => {
    const offset = paginateData.limit * (currentPage - 1)
    setPaginateData({ ...paginateData, offset, currentPage: currentPage })
  }

  const resetPagination = () => {
    setPaginateData({
      total: 0,
      offset: 0,
      limit: 10,
      currentPage: 1,
      showingRecords: 0,
    })
  }

  if (error) return <p>Error :( {error.message}</p>

  const { fields } = schema

  const onSubmit = async (values, { resetForm }) => {
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
    resetForm()
    setModalShowing(false)
  }

  const formikFields = () => {
    let initialValues = { name: '' }
    Object.keys(fields).map((field) => {
      initialValues[field] = checkFieldType(
        fields[field]['type'],
        fields[field]['default']
      )
    })
    return initialValues
  }

  const checkFieldType = (type: string, defaultVal) => {
    switch (type) {
      case 'string':
      case 'color-picker':
      case 'radio-group':
        return defaultVal || ''
      case 'boolean':
      case 'checkbox':
        return defaultVal || true
      case 'number':
        return defaultVal || 0
      default:
        return ''
    }
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
              a[
                c[0]
              ] = `The value for ${c[1].shortLower} must be more than ${c[1].min} characters.`
            }
          }
          return a
          // eslint-disable-next-line
        }, {} as FormikErrors<any>)
      }
      onSubmit={(values, { resetForm }) => {
        console.log('formik onsubmit', values)
        onSubmit(values, { resetForm })
      }}
      //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
      initialValues={
        // eslint-disable-next-line
        typeof modalShowing === 'object' && (modalShowing as any)?.id
          ? modalShowing
          : formikFields() //TODO: remove this, it should come from schema.fields[].*
      }
    >
      <>
        <div
          className={classNames(
            styles.marketingSourcePage,
            styles.desktopViewNone
          )}
        >
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
                  tableSearch={tableSearch}
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
          <div
            className={classNames(
              styles.tableMainHeading,
              styles.mobileViewNone
            )}
          >
            <div style={{ background: '#FFF' }}>
              <Breadcrumb
                breadcrumbItems={['Setup', schema.full || schema.short]}
              />
              <Title>{schema.full || schema.short}</Title>
            </div>
            {addQuery && (
              <AddButton
                onClick={() => setModalShowing({ name: '', isCreate: true })}
                onFilterSource={onFilterMarketingSource}
                onSearch={onSearch}
                schema={schema}
                tableSearch={tableSearch}
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
                visible: Object.prototype.hasOwnProperty.call(v, 'visible')
                  ? v.visible
                  : true,
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
            dataSource={sourceData?.map((e: { id: any }) => ({
              key: e.id,
              ...e,
            }))}
            updateDataSource={({ newData, oldIndex, newIndex }) => {
              setSourceData(newData)
              console.log('newData, oldIndex, newIndex ', {
                newData,
                oldIndex,
                newIndex,
              })
            }}
            onRowClick={(e) => setModalShowing(e)}
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
        </Layout>
      </>
    </Formik>
  )
}

export default CrudTable
