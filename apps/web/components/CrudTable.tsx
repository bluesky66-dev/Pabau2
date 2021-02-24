import {
  Table,
  useLiveQuery,
  Pagination,
  MobileHeader,
  Notification,
  NotificationType,
  SimpleDropdown,
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
import { useTranslationI18 } from '../hooks/useTranslationI18'

const { Title } = Typography

interface editFieldsTypes {
  id?: string
  name?: string
  phone?: string
  website?: string
  country?: string
  city?: string
  street?: string
  post_code?: string
  invoice_template?: string
  invoice_prefix?: string
  invoice_starting_number?: string
  vat_registered?: boolean
}

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
  aggregateQuery?: DocumentNode
  tableSearch?: boolean
  updateOrderQuery?: DocumentNode
  showNotificationBanner?: boolean
  createPage?: boolean
  notificationBanner?: React.ReactNode
  createPageOnClick?(): void
  addFilter?: boolean
  setEditPage?(e: editFieldsTypes): void
  needTranslation?: boolean
}

const languages = [
  {
    key: 'en',
    value: 'English(UK)',
  },
  {
    key: 'en-us',
    value: 'English(US)',
  },
  {
    key: 'de',
    value: 'German',
  },
  {
    key: 'fr',
    value: 'French',
  },
  {
    key: 'es',
    value: 'Spanish',
  },
  {
    key: 'ar',
    value: 'Arabic',
  },
  {
    key: 'bg',
    value: 'Bulgarian',
  },
  {
    key: 'cs',
    value: 'Czech',
  },
  {
    key: 'da',
    value: 'Danish',
  },
  {
    key: 'hu',
    value: 'Hungarian',
  },
  {
    key: 'lv',
    value: 'Latvian',
  },
  {
    key: 'no',
    value: 'Norwegian',
  },
  {
    key: 'pl',
    value: 'Polish',
  },
  {
    key: 'sv',
    value: 'Swedish',
  },
  {
    key: 'ro',
    value: 'Romanian',
  },
  {
    key: 'ru',
    value: 'Russian',
  },
]

const CrudTable: FC<P> = ({
  schema,
  addQuery,
  deleteQuery,
  listQuery,
  editQuery,
  aggregateQuery,
  tableSearch = true,
  updateOrderQuery,
  showNotificationBanner = false,
  notificationBanner,
  createPage = false,
  createPageOnClick,
  addFilter,
  setEditPage,
  needTranslation = false,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentLanguage, setCurrentLanguage] = useState<string>('English(UK)')
  const { t, i18n } = useTranslationI18()

  useEffect(() => {
    const data = languages.find(({ value }) => value === currentLanguage)
    i18n.changeLanguage(data.key)
  }, [currentLanguage, i18n])
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
  const [updateOrderMutation] = useMutation(updateOrderQuery, {
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
  const [modalShowing, setModalShowing] = useState(false)
  const [editingRow, setEditingRow] = useState<
    Record<string, string | boolean | number>
  >({})

  const getQueryVariables = () => {
    const queryOptions = {
      variables: {
        isActive,
        searchTerm: '%' + searchTerm + '%',
        offset: paginateData.offset,
        limit: paginateData.limit,
      },
    }

    if (!tableSearch) {
      delete queryOptions.variables.searchTerm
    }
    if (!addFilter) {
      delete queryOptions.variables.isActive
    }
    return queryOptions
  }

  const getAggregateQueryVariables = () => {
    const queryOptions = {
      variables: {
        isActive,
        searchTerm: '%' + searchTerm + '%',
      },
    }

    if (!tableSearch) {
      delete queryOptions.variables.searchTerm
    }
    if (!addFilter) {
      delete queryOptions.variables.isActive
    }
    return queryOptions
  }

  const { data, error, loading } = useLiveQuery(listQuery, getQueryVariables())

  const { data: aggregateData } = useLiveQuery(
    aggregateQuery,
    getAggregateQueryVariables()
  )

  const getAddress = (data) => {
    const { country, city, street, post_code } = data
    let address
    if (country || city || street || post_code) {
      address = `${country ? country : ''}${city ? ', ' + city : ''}${
        street ? ', ' + street : ''
      }${post_code ? ', ' + post_code : ''}`
    } else if (!country && !city && !street && !post_code) {
      address = 'No address found'
    }
    return address
  }

  useEffect(() => {
    if (data) {
      if (data[0]?.__typename === 'issuing_company') {
        const newData = data.map((d) => {
          return {
            ...d,
            address: getAddress(d),
          }
        })
        setSourceData(newData)
      } else {
        setSourceData(data)
      }
    }
    if (aggregateData)
      setPaginateData({
        ...paginateData,
        total: aggregateData?.aggregate.count,
        showingRecords: data?.length,
      })
    if (!loading && data) setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, aggregateData, loading])

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
    await (values.id
      ? editMutation({
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
      : addMutation({
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
        }))
    resetForm()
    setModalShowing(false)
  }

  const formikFields = () => {
    const initialValues = { name: '' }
    Object.keys(fields).map((field) => {
      initialValues[field] = checkFieldType(
        fields[field]['type'],
        fields[field]['defaultvalue']
      )
      return field
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
        return defaultVal || ''
    }
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

  const updateOrder = async (values) => {
    if (values.id)
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

  const createNew = () => {
    if (!createPage) {
      setModalShowing((e) => !e)
      setEditingRow({ name: '', isCreate: true })
    } else {
      createPageOnClick()
    }
  }

  const handleLanguageChange = (language: string): void => {
    setCurrentLanguage(language)
  }

  return (
    <Formik
      enableReinitialize={true}
      validate={(e) =>
        Object.entries(fields).reduce((a, c) => {
          if (
            c[1].min && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            c[1].min > e[c[0]].length
          ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            a[
              c[0]
            ] = `The value for ${c[1].shortLower} must be more than ${c[1].min} characters.`
          } else if (
            c[1].required && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e[c[0]].length === 0 &&
            c[1].validateMsg
          ) {
            a[c[0]] = c[1].validateMsg
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
        editingRow?.id ? editingRow : formikFields() //TODO: remove this, it should come from schema.fields[].*
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
                <p>
                  {' '}
                  {needTranslation
                    ? t('marketingsource-title.translation')
                    : schema.full || schema.short}{' '}
                </p>
              </div>
              {addQuery && !createPage ? (
                <AddButton
                  onClick={createNew}
                  onFilterSource={onFilterMarketingSource}
                  onSearch={onSearch}
                  schema={schema}
                  tableSearch={tableSearch}
                  needTranslation={needTranslation}
                  addFilter={addFilter}
                />
              ) : (
                <AddButton
                  onClick={createPageOnClick}
                  onFilterSource={onFilterMarketingSource}
                  onSearch={onSearch}
                  schema={schema}
                  tableSearch={tableSearch}
                  addFilter={addFilter}
                  needTranslation={needTranslation}
                />
              )}
            </div>
          </MobileHeader>
        </div>

        {modalShowing && (
          <CrudModal
            schema={schema}
            editingRow={editingRow}
            addQuery={addQuery}
            listQuery={listQuery}
            deleteQuery={deleteQuery}
            onClose={() => setModalShowing(false)}
          />
        )}

        <Layout>
          {showNotificationBanner && notificationBanner}
          <div
            className={classNames(
              styles.tableMainHeading,
              styles.mobileViewNone
            )}
          >
            <div style={{ background: '#FFF' }}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  { breadcrumbName: schema.full || schema.short, path: '' },
                ]}
              />
              <Title>{schema.full || schema.short}</Title>
            </div>
            {needTranslation && (
              <div className={styles.btn}>
                <SimpleDropdown
                  label={'Change Language'}
                  dropdownItems={prepareLanguages(languages)}
                  value={currentLanguage}
                  onSelected={handleLanguageChange}
                />
              </div>
            )}
            {addQuery && !createPage ? (
              <AddButton
                onClick={createNew}
                onFilterSource={onFilterMarketingSource}
                onSearch={onSearch}
                schema={schema}
                tableSearch={tableSearch}
                needTranslation={needTranslation}
                addFilter={addFilter}
              />
            ) : (
              <AddButton
                onClick={createPageOnClick}
                onFilterSource={onFilterMarketingSource}
                onSearch={onSearch}
                schema={schema}
                tableSearch={tableSearch}
                addFilter={addFilter}
                needTranslation={needTranslation}
              />
            )}
          </div>
          <Table
            loading={isLoading}
            style={{ height: '100%' }}
            sticky={{ offsetScroll: 80, offsetHeader: 80 }}
            pagination={sourceData?.length > 10 ? {} : false}
            draggable={true}
            isCustomColorExist={checkCustomColorIconExsist('color')}
            isCustomIconExist={checkCustomColorIconExsist('icon')}
            noDataBtnText={schema.full}
            noDataText={schema.fullLower}
            onAddTemplate={() => createNew()}
            searchTerm={searchTerm}
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
              console.log('newData, oldIndex, newIndex', {
                newData,
                oldIndex,
                newIndex,
              })
            }}
            onRowClick={(e) => {
              if (!createPage) {
                setEditingRow(e)
                setModalShowing((e) => !e)
              } else {
                setEditPage(e)
                // createPageOnClick()
              }
            }}
            needTranslation={needTranslation}
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

function prepareLanguages(languages): Array<string> {
  const array = languages?.map(({ value }) => {
    return value
  })
  return array
}

export default CrudTable
