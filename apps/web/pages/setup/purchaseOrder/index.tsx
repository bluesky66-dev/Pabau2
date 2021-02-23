import React, { FC, useState, useEffect } from 'react'
import {
  Breadcrumb,
  WStepper,
  Accordion,
  TabbedTable,
  ProductImage as CateogryImg,
  Checkbox as CateogryCheckBox,
  Button,
  Table as ProductTable,
} from '@pabau/ui'
import { Card, Row, Col, Select, DatePicker, Input, Table } from 'antd'
import {
  UnorderedListOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  FileZipOutlined,
  SettingOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import className from 'classnames'
import Layout from '../../../components/Layout/Layout'
import styles from './index.module.less'

const { Option } = Select
const { TextArea } = Input

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
]
const tblData = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]

const PurchaseOrder: FC = ({ ...rest }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [categories, setCategories] = useState([])
  const [isNextDisable] = useState(false)

  const cardHeader = (
    <div className={styles.purchaseOrderHeader}>
      <div className={styles.breadcrumbDiv}>
        <Breadcrumb
          breadcrumbItems={[
            { breadcrumbName: 'Setup', path: 'setup' },
            { breadcrumbName: 'Feedback Surveys', path: '' },
          ]}
        />
      </div>
      <div className={styles.heading}>Purchase Order</div>
    </div>
  )

  const wizardSteps = [
    {
      step: 1,
      name: 'Order',
      img: <UnorderedListOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Processing',
      img: <FileSyncOutlined />,
      isActive: false,
      index: 1,
    },
    {
      step: 2,
      name: 'Received',
      img: <FileDoneOutlined />,
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Summary',
      img: <FileZipOutlined />,
      isActive: false,
      index: 2,
    },
  ]

  const onStepChange = (step) => {
    setActiveStep(step)
  }

  useEffect(() => {
    setCategories([
      {
        id: '1',
        name: 'category name 1',
        img: '',
      },
      {
        id: '2',
        name: 'category name 2',
        img: '',
      },
      {
        id: '3',
        name: 'category name 3',
        img: '',
      },
      {
        id: '4',
        name: 'category name 4',
        img: '',
      },
      {
        id: '5',
        name: 'category name 5',
        img: '',
      },
      {
        id: '6',
        name: 'category name 6',
        img: '',
      },
      {
        id: '7',
        name: 'category name 7',
        img: '',
      },
      {
        id: '8',
        name: 'category name 8',
        img: '',
      },
      {
        id: '9',
        name: 'category name 9',
        img: '',
      },
      {
        id: '10',
        name: 'category name 10',
        img: '',
      },
      {
        id: '11',
        name: 'category name 11',
        img: '',
      },
      {
        id: '12',
        name: 'category name 122323232',
        img: '',
      },
    ])
  }, [])

  const isSelected = (item = null) => {
    const isSelected = selectedCategories.find((el) => {
      return el.id === item.id
    })
    return isSelected
  }

  const categoryClick = (item) => {
    const selected = [...selectedCategories]
    const isExisted = selected.find((el) => {
      return el.id === item.id
    })
    if (isExisted) {
      const index = selected.indexOf(isExisted)
      selected.splice(index, 1)
      setSelectedCategories(selected)
    } else {
      selected.push(item)
      setSelectedCategories(selected)
    }
  }

  return (
    <Layout>
      <div className={styles.mainPurchaseOrder}>
        <Card title={cardHeader}>
          <Row>
            <Col md={24} className={styles.purchaseOrderBody}>
              <WStepper
                disableNextStep={isNextDisable}
                active={activeStep}
                data={wizardSteps}
                onActiveStepChange={onStepChange}
                smartOrderBtn={true}
              >
                {activeStep === 0 && (
                  <Row className={styles.orderBuilderSection}>
                    <Col
                      lg={8}
                      md={24}
                      sm={24}
                      xs={24}
                      className={styles.orderDetailsControls}
                    >
                      <div className={styles.heading}>
                        <span>Details</span>
                      </div>
                      <div className={styles.controls}>
                        <Accordion
                          headerLabel={
                            <div className={styles.orderHeading}>Order# 1</div>
                          }
                          folderIconShow={false}
                          dropDownIcon={<SettingOutlined />}
                          isDefaultOpen={true}
                        >
                          <div
                            className={className(
                              styles.orderRefDiv,
                              styles.marginBottom
                            )}
                          >
                            <label>Order Ref#</label>
                            <Input
                              size="large"
                              type="text"
                              placeholder="Order Ref#"
                              name="orderRef"
                            />
                          </div>
                          <div
                            className={className(
                              styles.orderRefDiv,
                              styles.marginBottom
                            )}
                          >
                            <label>Supplier</label>
                            <Select
                              size="large"
                              placeholder="Supplier"
                              style={{ width: '100%' }}
                            >
                              <Option value="jack">Jack</Option>
                              <Option value="lucy">Lucy</Option>
                            </Select>
                          </div>
                          <div
                            className={className(
                              styles.orderRefDiv,
                              styles.marginBottom
                            )}
                          >
                            <label>Expected Delivery Date</label>
                            <DatePicker
                              size="large"
                              placeholder="Select Delivery Date"
                              style={{ width: '100%' }}
                            />
                          </div>
                          <div
                            className={className(
                              styles.orderRefDiv,
                              styles.marginBottom
                            )}
                          >
                            <label>Notes</label>
                            <TextArea placeholder="Add Notes" rows={5} />
                          </div>
                        </Accordion>
                      </div>
                    </Col>
                    <Col
                      lg={16}
                      md={24}
                      sm={24}
                      xs={24}
                      className={styles.orderCategorySelection}
                    >
                      <div className={styles.heading}>
                        <span>Build Your Order</span>
                      </div>
                      <div className={styles.orderDetails}>
                        <TabbedTable
                          tabItems={[
                            'Category',
                            `Products (${selectedCategories.length})`,
                          ]}
                        >
                          <div
                            className={className(
                              styles.categorySelection,
                              styles.generalPadding
                            )}
                          >
                            <div className={className(styles.listingHead)}>
                              <div>Category Selector</div>
                              <div>
                                <Input
                                  suffix={<SearchOutlined color="#8C8C8C" />}
                                  type="text"
                                  placeholder="Search here"
                                />
                              </div>
                            </div>
                            <div className={styles.categoryListing}>
                              <Row>
                                {categories.length > 0 &&
                                  categories.map((product, key) => (
                                    <Col
                                      lg={4}
                                      md={6}
                                      xs={12}
                                      key={`key${23 * key}`}
                                    >
                                      <div
                                        onClick={() => {
                                          categoryClick(product)
                                        }}
                                        className={className(
                                          styles.category,
                                          isSelected(product) &&
                                            styles.checkedCateogry
                                        )}
                                      >
                                        <Button
                                          type="default"
                                          id="cateogry"
                                          className={styles.categoryCard}
                                        >
                                          <div
                                            className={styles.categoryCheckBox}
                                          >
                                            <CateogryCheckBox checked={true} />
                                          </div>
                                          <CateogryImg
                                            width="100%"
                                            height="100%"
                                          />
                                        </Button>
                                        <label
                                          htmlFor="cateogry"
                                          className={styles.categoryName}
                                        >
                                          {product.name}
                                        </label>
                                      </div>
                                    </Col>
                                  ))}
                              </Row>
                            </div>
                          </div>
                          <div
                            className={className(
                              styles.productSelection,
                              styles.generalPadding
                            )}
                          >
                            <div className={className(styles.listingHead)}>
                              <div>Product Selector</div>
                              <div>
                                <Input
                                  suffix={<SearchOutlined color="#8C8C8C" />}
                                  type="text"
                                  placeholder="Search here"
                                />
                              </div>
                            </div>
                            <div>
                              <ProductTable
                                pagination={false}
                                columns={columns}
                                dataSource={tblData}
                              />
                            </div>
                          </div>
                        </TabbedTable>
                      </div>
                    </Col>
                  </Row>
                )}
              </WStepper>
            </Col>
          </Row>
        </Card>
      </div>
    </Layout>
  )
}

export default PurchaseOrder
