import React, { FC, useState } from 'react'
import { Layout, Breadcrumb, MobileHeader, Input } from '@pabau/ui'
import AddButton from './addButton'
import Link from 'next/link'
import { Typography, Col, Row } from 'antd'
import { Form as AntForm } from 'antd'
import { gql } from '@apollo/client'
import { LeftOutlined } from '@ant-design/icons'
import { Formik, FormikErrors } from 'formik'
import classNames from 'classnames'
import styles from './index.module.less'
import FieldRow from './FieldRow'

const { Title } = Typography

interface LeadSchema extends Schema {
  input: SchemaItem
  fields: Record<string, LeadSchemaItem>
}

interface LeadSchemaItem extends SchemaItem {
  advance?: AdvanceField
  input?: SchemaItem
}

interface AdvanceField {
  selectOptions?: TypeValues[]
}

interface TypeValues {
  label: string
  value: string
}

const ADD_MUTATION = gql`
  mutation MyMutation {
    insert_lead_one(
      object: {
        email: "nido_i@hotmail.com"
        interest: "xyz"
        is_active: true
        age: 30
        name: "aysha"
        owner: "rulaa"
        source: "xyz"
        location: "gilgit"
        order: 2
        phone: "45455545454"
        status: "true"
        id: "123e4567-e89b-12d3-a456-426614174011"
      }
    ) {
      email
      id
      is_active
      order
      lead_age
      interest
      lead_name
      lead_owner
      lead_source
      lead_status
      location
      phone
      status
    }
  }
`

export const LeadCreateView: FC<LeadSchema> = () => {
  const [schema, setSchema] = useState<LeadSchema>({
    full: 'Create Lead View',
    fullLower: 'create lead view',
    short: 'Lead',
    shortLower: 'lead',
    createButtonLabel: 'Create',
    messages: {
      create: {
        success: 'New leads created.',
        error: 'While creating leads',
      },
      update: {
        success: '',
        error: '',
      },
      delete: {
        success: '',
        error: '',
      },
    },
    input: {
      full: 'Name',
      type: 'string',
      example: 'eg. London View',
    },
    fields: {
      name: {
        full: 'Lead Name',
        type: 'checkbox',
        defaultvalue: false,
      },
      email: {
        full: 'Email',
        type: 'checkbox',
        defaultvalue: false,
      },
      phone: {
        full: 'Phone',
        type: 'checkbox',
        defaultvalue: false,
      },
      age: {
        full: 'Lead Age',
        type: 'checkbox',
        defaultvalue: false,
      },
      created_at: {
        full: 'Created Date',
        type: 'checkbox',
        defaultvalue: false,
        input: {
          full: 'Name',
          type: 'string',
          example: '',
        },
        advance: {
          selectOptions: [
            {
              label: 'is',
              value: 'is',
            },
          ],
        },
      },
      location: {
        full: 'Location',
        type: 'checkbox',
        defaultvalue: false,
        advance: {
          selectOptions: [
            {
              label: 'equal',
              value: 'equal',
            },
            {
              label: 'any',
              value: 'any',
            },
          ],
        },
      },
      owner: {
        full: 'Lead owner',
        type: 'checkbox',
        defaultvalue: false,
        advance: {
          selectOptions: [
            {
              label: 'equal',
              value: 'equal',
            },
            {
              label: 'any',
              value: 'any',
            },
          ],
        },
      },
      status: {
        full: 'Lead status',
        type: 'checkbox',
        defaultvalue: false,
        advance: {
          selectOptions: [
            {
              label: 'equal',
              value: 'equal',
            },
            {
              label: 'any',
              value: 'any',
            },
          ],
        },
      },
      source: {
        full: 'Lead Source',
        type: 'checkbox',
        defaultvalue: false,
        advance: {
          selectOptions: [
            {
              label: 'equal',
              value: 'equal',
            },
            {
              label: 'any',
              value: 'any',
            },
          ],
        },
      },
      interest: {
        full: 'Interest',
        type: 'checkbox',
        defaultvalue: false,
        advance: {
          selectOptions: [
            {
              label: 'equal',
              value: 'equal',
            },
            {
              label: 'any',
              value: 'any',
            },
          ],
        },
      },
      is_active: {
        full: 'Active',
        type: 'checkbox',
        defaultvalue: false,
      },
    },
  })

  const handleAddField = (selectedItem: any) => {
    Object.entries(schema.fields).map((field: any, i) => {
      if (field[1].full.toLowerCase() === selectedItem.full.toLowerCase()) {
        setSchema({
          ...schema,
          fields: {
            ...schema.fields,
            [field[0]]: {
              ...selectedItem,
              advance: {
                selectOptions: [
                  ...selectedItem.advance.selectOptions,
                  {
                    label: 'not equal',
                    value: 'not equal',
                  },
                ],
              },
            },
          },
        })
      }
    })
  }

  const createNew = () => {
    console.log('new')
  }

  const formikFields = () => {
    const initialValues = {}
    if (schema) {
      Object.keys(schema.fields).map((field, i) => {
        initialValues[field] = checkFieldType(
          schema.fields[field]['type'],
          schema.fields[field]['defaultvalue']
        )
        return field
      })
    }
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

  return (
    <Formik
      enableReinitialize={true}
      validate={(e) => {
        if (schema) {
          Object.entries(schema.fields).reduce((a, c) => {
            if (
              c[1].required &&
              c[1].min && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              c[1].min > e[c[0]].length
            ) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              a[c[0]] = `Required ${c[1].full}.`
            }
            return a
            // eslint-disable-next-line
          }, {} as FormikErrors<any>)
        }
      }}
      onSubmit={(values, { resetForm }) => {
        console.log('formik onsubmit', values)
        // onSubmit(values, { resetForm })
      }}
      //initialValues={typeof modalShowing === 'object' ? modalShowing : undefined}
      initialValues={formikFields()}
    // requiredMark={required}
    >
      <div className={styles.leadsViewCreatePage}>
        <MobileHeader className={styles.marketingSourceHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.marketingTextStyle}>
              <Link href="/">
                <LeftOutlined />
              </Link>
              {/* <p>
                  {' '}
                  {needTranslation
                    ? t('marketingsource-title.translation')
                    : schema.full || schema.short}{' '}
                </p> */}
            </div>
            {/* {addQuery && !createPage ? (
                <AddButton
                  onClick={createNew}
                  onFilterSource={onFilterMarketingSource}
                  onSearch={onSearch}
                  schema={schema}
                  tableSearch={tableSearch}
                  needTranslation={needTranslation}
                />
              ) : (
                <AddButton
                  onClick={createPageOnClick}
                  onFilterSource={onFilterMarketingSource}
                  onSearch={onSearch}
                  schema={schema}
                  tableSearch={tableSearch}
                  needTranslation={needTranslation}
                />
              )} */}
          </div>
        </MobileHeader>

        <Layout>
          {/* {showNotificationBanner && notificationBanner} */}
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
                  {
                    breadcrumbName: schema.full || schema.short,
                    path: '/setup/lead-view',
                  },
                  {
                    breadcrumbName: schema.full,
                    path: '/setup/lead-view/create',
                  },
                ]}
              />
              <Title>{schema.full || schema.short}</Title>
            </div>
            {ADD_MUTATION && <AddButton onClick={createNew} schema={schema} />}
          </div>
          <Row className={styles.headNameInput}>
            <Col xs={24} md={12}>
              <AntForm layout={'vertical'} requiredMark={true}>
                <AntForm.Item
                  label={schema?.input?.full}
                  name={schema?.input?.full}
                >
                  <Input
                    name={schema?.input?.full}
                    type={schema?.input?.type}
                    placeHolderText={schema?.input?.example}
                  />
                </AntForm.Item>
              </AntForm>
            </Col>
          </Row>
          <div className={styles.basicInfo}>
            <h6>Primary columns to display</h6>
            <AntForm
              layout={'vertical'}
              requiredMark={true}
              className={styles.leadCreateForm}
            >
              <div className={styles.formBox}>
                {Object.entries(schema.fields).map((item, i) => {
                  return (
                    <div key={i}>
                      <FieldRow field={item} handleAddField={handleAddField} />
                    </div>
                  )
                })}
              </div>
            </AntForm>
          </div>
          {/* <Pagination
            total={paginateData.total}
            defaultPageSize={10}
            showSizeChanger={false}
            onChange={onPaginationChange}
            pageSize={paginateData.limit}
            current={paginateData.currentPage}
            showingRecords={paginateData.showingRecords}
          /> */}
        </Layout>
      </div>
    </Formik>
  )
}

export default LeadCreateView
