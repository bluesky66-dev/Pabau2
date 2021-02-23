import React, { FC, useState } from 'react'
import { Row, Col } from 'antd'
import {
  Layout,
  Breadcrumb,
  Button,
  PhoneNumberInput,
  Notification,
  NotificationType,
  MobileHeader,
} from '@pabau/ui'
import AddButton from './addButton';
import Link from 'next/link'
import { Typography } from 'antd'
import { useFormik } from 'formik'
import { Form as AntForm } from 'antd'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client'
import { useMedia } from 'react-use'
import { LeftOutlined, CloseOutlined } from '@ant-design/icons'
import { Formik, FormikErrors } from 'formik'
import { Checkbox } from 'formik-antd'
import classNames from 'classnames'
import styles from './index.module.less'


const { Title } = Typography

interface LeadSchema extends SchemaItem {
  items: LeadSchemaOperation[]
  showNotificationBanner?: boolean
  notificationBanner?: React.ReactNode
}
interface LeadSchemaOperation {
  operation: string
  type: string
}


const ADD_MUTATION = gql`
  mutation MyMutation {
    insert_leads_one(
      object: {
        email: "nido_i@hotmail.com"
        interest: "xyz"
        is_active: true
        lead_age: 30
        lead_name: "aysha"
        lead_owner: "rulaa"
        lead_source: "xyz"
        lead_status: "married"
        location: "gilgit"
        order: 2
        phone: "45455545454"
        status: true
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

const schema: Schema = {
  full: 'Lead View',
  fullLower: 'lead view',
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
    },
    location: {
      full: 'Location',
      type: 'checkbox',
      defaultvalue: false,
    },
    owner: {
      full: 'Lead owner',
      type: 'checkbox',
      defaultvalue: false,
    },
    status: {
      full: 'Lead status',
      type: 'checkbox',
      defaultvalue: false,
    },
    source: {
      full: 'Lead Source',
      type: 'checkbox',
      defaultvalue: false,
    },
    interest: {
      full: 'Interest',
      type: 'checkbox',
      defaultvalue: false,
    },
    is_active: {
      full: 'Active',
      type: 'checkbox',
      defaultvalue: false,
    },
  },
}
export const LeadCreateView: FC<LeadSchema> = ({

  showNotificationBanner = false,
  notificationBanner,
}) => {
  const [modalShowing, setModalShowing] = useState(false);
  const { fields } = schema;

  const createNew = () => {
    setModalShowing((e) => !e)
    // setEditingRow({ name: '', isCreate: true })
  }
  const onFilterMarketingSource = () => {
    // resetPagination()
    // setIsActive((e) => !e)
    console.log('hello')
  }

  const onSearch = async (val) => {
    // if (val !== searchTerm) {
    //   resetPagination()
    //   setSearchTerm(val)
    console.log('hello');
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
      <>
        <div
          className={classNames(
            styles.leadsViewCreatePage
          )}
        >
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
                    { breadcrumbName: schema.full || schema.short, path: '/setup/lead-view' },
                    { breadcrumbName: `Create ${schema.full}`, path: '/setup/lead-view/create' }
                  ]}
                />
                <Title>{schema.full || schema.short}</Title>
              </div>
              {ADD_MUTATION && (
                <AddButton
                  onClick={createNew}
                  schema={schema}
                />
              )}
            </div>
            <div
              className={styles.basicInfo}>
              <h6>Primary columns to display</h6>
              <AntForm
                layout={'vertical'}
                requiredMark={true}
                className={styles.leadCreateForm}
              >
                <div className={styles.formBox}>
                  {schema &&
                    Object.entries(schema.fields).map(
                      (
                        [
                          name,
                          {
                            short,
                            shortLower,
                            example,
                            description,
                            extra,
                            min,
                            type,
                            radio,
                            full,
                            selectOptions,
                            defaultvalue,
                            visible,
                            required,
                          },
                        ],
                        i
                      ) => (
                        <div key={name}>
                          {full !== 'Active' && type === 'checkbox' && (
                            <AntForm.Item key={name} name={name}>
                              <Checkbox name={name} defaultChecked={false}>
                                {full}
                              </Checkbox>
                            </AntForm.Item>
                          )}
                        </div>
                      )

                      //     full !== 'Active' && <Col
                      //       xs={24}
                      //       key={name}
                      //     >
                      //       <AntForm.Item
                      //         key={name}
                      //         // label={short}
                      //         label={
                      //           <span>
                      //             {short}
                      //           </span>
                      //         }
                      //         name={name}
                      //         required={required}
                      //         // extra={extra && <div>{extra}</div>}
                      //         className={styles.clinicLabelStyle}
                      //         rules={[
                      //           {
                      //             required: required,
                      //             message: `* required ${full}`,
                      //           },
                      //         ]}
                      //       >
                      //         <Input
                      //           name={name}
                      //           type={type}
                      //           placeholder={example}
                      //           autoFocus={i === 0}
                      //         />
                      //       </AntForm.Item>
                      //     </Col>
                    )}
                </div>
                {/* <h6>Primary Coloms to Display</h6> */}
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
      </>
    </Formik >
  )
}

export default LeadCreateView
