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
  Table as ProcessingProducts,
  Table as ReceivingProducts,
  OrderDiscrepancy,
  BasicModal,
  Input as PabauInput,
} from '@pabau/ui'
import { Card, Row, Col, Select, DatePicker, Input } from 'antd'
import {
  UnorderedListOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  FileZipOutlined,
  FileOutlined,
  SettingOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import Artifact from './assets/artifact.png'
import className from 'classnames'
import Layout from '../../../components/Layout/Layout'
import StatusLabel from './components/StatusLabel'
import styles from './index.module.less'

const { Option } = Select
const { TextArea } = Input

const productsColumns = [
  {
    title: 'Oxy',
    dataIndex: 'oxy',
    key: 'oxy',
    width: '35%',
    className: 'highlighted',
    visible: true,
    sorter: (a, b) => a.oxy.length - b.oxy.length,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    visible: true,
    width: '10%',
    sorter: (a, b) => a.status.length - b.status.length,
    render: (text) => {
      return <OrderDiscrepancy number={text} word={1} />
    },
  },
  {
    title: 'Supply Price',
    dataIndex: 'supply_price',
    key: 'supply_price',
    width: '15%',
    visible: true,
    sorter: (a, b) => a.supply_price.length - b.supply_price.length,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    visible: true,
    width: '25%',
    render: () => {
      return (
        <Select
          size="large"
          placeholder="Quantity"
          defaultActiveFirstOption={true}
          style={{ width: '100%' }}
        >
          <Option value="0">0</Option>
          <Option value="10">10</Option>
        </Select>
      )
    },
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    width: '15%',
    visible: true,
    sorter: (a, b) => a.total.length - b.total.length,
  },
]
const processingProductsColumns = [
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
    visible: true,
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
    visible: true,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    visible: true,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    visible: true,
  },
]
const receivingProductsColumns = [
  {
    title: 'Product Name',
    dataIndex: 'product_name',
    key: 'product_name',
    visible: true,
    width: '35%',
  },
  {
    title: 'Remaining',
    dataIndex: 'remaining',
    key: 'remaining',
    visible: true,
  },
  {
    title: 'Quantity Ordered',
    dataIndex: 'quant_ordered',
    key: 'quant_ordered',
    visible: true,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    visible: true,
  },
  {
    title: 'Unit Price',
    dataIndex: 'price',
    key: 'price',
    visible: true,
    width: '12.5%',
    render: () => {
      return <Input size="middle" type="text" value={0} />
    },
  },
  {
    title: 'Quantity Received',
    dataIndex: 'quant_received',
    key: 'quant_received',
    visible: true,
    width: '12.5%',
    render: () => {
      return <Input size="middle" type="text" value={0} />
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    visible: true,
    width: '10%',
    render: () => {
      return <StatusLabel label="All" type="good" block={true} />
    },
  },
]

const tblData = [
  {
    key: 1,
    oxy: 'John Brown sr.',
    status: 60,
    quantity: 'New York No. 1 Lake Park',
    supply_price: '£45.00',
    total: '£0.00',
    children: [
      {
        key: 11,
        oxy: 'John Brown',
        status: 42,
        supply_price: '£45.00',
        total: '£0.00',
        quantity: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        oxy: 'John Brown jr.',
        status: 30,
        supply_price: '£45.00',
        total: '£0.00',
        quantity: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            oxy: 'Jimmy Brown',
            status: 16,
            supply_price: '£45.00',
            total: '£0.00',
            quantity: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        oxy: 'Jim Green sr.',
        status: 72,
        supply_price: '£45.00',
        total: '£0.00',
        quantity: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            oxy: 'Jim Green',
            status: 42,
            supply_price: '£45.00',
            total: '£0.00',
            quantity: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                oxy: 'Jim Green jr.',
                supply_price: '£45.00',
                total: '£0.00',
                status: 25,
                quantity: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                oxy: 'Jimmy Green sr.',
                status: 18,
                supply_price: '£45.00',
                total: '£0.00',
                quantity: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    oxy: 'Joe Black',
    status: 32,
    supply_price: '£45.00',
    total: '£0.00',
    quantity: 'Sidney No. 1 Lake Park',
  },
]

const PurchaseOrder: FC = ({ ...rest }) => {
  const extraBtnStates = ['Smart Order', 'Clear List', 'Create Batch']
  const nextBtnStates = ['Place Order', 'Receive Stock', 'Create Batch']
  const headerBtnStates = ['Email Order', 'Email Sent']
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

  const [activeStep, setActiveStep] = useState(0)
  const [showNextBtn, setShowNextBtn] = useState(true)
  const [showExtraBtn, setShowExtraBtn] = useState(true)
  const [extraBtnLabel, setExtraBtnLabel] = useState(extraBtnStates[0])
  const [nextBtnLabel, setNextBtnLabel] = useState(nextBtnStates[0])
  const [headerBtnLabel, setHeaderBtnLabel] = useState(headerBtnStates[0])
  const [selectedCategories, setSelectedCategories] = useState(null)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState(null)
  const [isNextDisable, setIsNextDisable] = useState(true)
  const [cancelOrderModal, setCancelOrderModal] = useState(false)
  const [sendEmailModal, setSendEmailModal] = useState(false)
  const [createBatchModal, setCreateBatchModal] = useState(false)

  const cardHeader = (
    <div className={styles.purchaseOrderHeader}>
      <div className={styles.leftCardHeading}>
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
      <div className={styles.rightCardHeadBtns}>
        {activeStep === 1 && (
          <div>
            <Button type="default" onClick={() => headerBtnClick()}>
              {headerBtnLabel}
            </Button>
            <Button type="default" style={{ marginLeft: '10px' }}>
              Download PDF
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  const tableFooter = () => {
    return (
      <div className={styles.tblFooter}>
        <div>Sub Total: R£ 00.00</div>
        <div>Total Cost: R£ 00.00</div>
      </div>
    )
  }

  const onStepChange = (step) => {
    setActiveStep(step)
    setShowNextBtn(true)
    switch (step) {
      case 0:
        setNextBtnLabel(nextBtnStates[0])
        if (selectedCategories?.length > 0) {
          setExtraBtnLabel(extraBtnStates[1])
        } else {
          setExtraBtnLabel(extraBtnStates[0])
        }
        setShowExtraBtn(true)
        break

      case 1:
        setNextBtnLabel(nextBtnStates[1])
        setShowExtraBtn(false)
        break

      case 2:
        setShowExtraBtn(true)
        setExtraBtnLabel(nextBtnStates[2])
        break

      case 3:
        setShowExtraBtn(false)
        setShowNextBtn((showNextBtn) => !showNextBtn)
        break

      default:
        return
    }
  }

  useEffect(() => {
    setCategories([
      {
        id: '1',
        name: 'category name 1',
        cost: '£40.00',
        price: '£100.00',
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
    setProducts(tblData)
  }, [])

  const isSelected = (item = null) => {
    const isSelected = false
    if (selectedCategories?.length) {
      return selectedCategories.find((el) => {
        return el.id === item.id
      })
    }
    return isSelected
  }

  const categoryClick = async (item) => {
    const selected = selectedCategories ? [...selectedCategories] : []
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
    if (selected.length > 0) {
      setIsNextDisable(false)
      setExtraBtnLabel(extraBtnStates[1])
    } else {
      setIsNextDisable(true)
      setExtraBtnLabel(extraBtnStates[0])
    }
  }

  const extraBtnClick = () => {
    switch (extraBtnLabel) {
      case extraBtnStates[0]:
        break

      case extraBtnStates[1]:
        setIsNextDisable(true)
        setSelectedCategories([])
        setExtraBtnLabel(extraBtnStates[0])
        break

      case extraBtnStates[2]:
        setCreateBatchModal((createBatchModal) => !createBatchModal)
        break

      default:
        return
    }
  }

  const headerBtnClick = () => {
    switch (headerBtnLabel) {
      case headerBtnStates[0]:
        setSendEmailModal((sendEmailModal) => !sendEmailModal)
        break
      default:
        return
    }
  }

  const sendEmail = () => {
    setHeaderBtnLabel(headerBtnStates[1])
    setSendEmailModal((sendEmailModal) => !sendEmailModal)
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows:',
        selectedRows
      )
    },
  }

  return (
    <Layout>
      <div className={styles.mainPurchaseOrder}>
        <Card title={cardHeader}>
          <Row>
            <Col md={24} className={styles.purchaseOrderBody}>
              <WStepper
                disableNextStep={isNextDisable}
                disablePrevStep={false}
                showNextBtn={showNextBtn}
                nextBtnLabel={nextBtnLabel}
                active={activeStep}
                data={wizardSteps}
                onActiveStepChange={onStepChange}
                extraBtn={showExtraBtn}
                extraBtnLabel={extraBtnLabel}
                extraBtnClick={extraBtnClick}
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
                            `Products (${selectedCategories?.length || 0})`,
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
                                  size="large"
                                  suffix={<SearchOutlined color="#8C8C8C" />}
                                  type="text"
                                  placeholder="Search here"
                                />
                              </div>
                            </div>
                            <div className={styles.productListing}>
                              <ProductTable
                                pagination={false}
                                columns={productsColumns}
                                dataSource={products}
                                defaultExpandAllRows={true}
                                scroll={{ x: 'max-content', y: 400 }}
                                footer={tableFooter}
                              />
                            </div>
                          </div>
                        </TabbedTable>
                      </div>
                    </Col>
                  </Row>
                )}
                {activeStep === 1 && (
                  <Row className={styles.orderProcessingSection}>
                    <Col
                      lg={8}
                      md={24}
                      sm={24}
                      xs={24}
                      className={styles.orderProcessingControls}
                    >
                      <Card className={className(styles.processingCard)}>
                        <div className={styles.cardHeader}>
                          <div>
                            <FileOutlined color="#54B2D3" />
                          </div>
                          <div>
                            <div>Elemis</div>
                            <div>PO88778</div>
                          </div>
                        </div>
                        <div className={styles.cardBody}>
                          <div>
                            <span>Deliver to</span>
                            <div>M-A Hair Dressing & Spa</div>
                            <p>574 Beverley Road, Hull, HU 6 7LG, England </p>
                          </div>
                          <div>
                            <span>Order total:</span>
                            <span>£1</span>
                          </div>
                        </div>
                        <div className={styles.cardFooter}>
                          <Button
                            type="default"
                            size="large"
                            block={true}
                            onClick={() => {
                              setCancelOrderModal(
                                (cancelOrderModal) => !cancelOrderModal
                              )
                            }}
                          >
                            Cancel Order
                          </Button>
                        </div>
                      </Card>
                    </Col>
                    <Col
                      lg={16}
                      md={24}
                      sm={24}
                      xs={24}
                      className={styles.orderProcessingDetails}
                    >
                      <Card className={className(styles.processingCard)}>
                        <div className={styles.artifactLogisticsImg}>
                          <img src={Artifact} alt="Logistics" width="20%" />
                        </div>
                        <div className={styles.processingTable}>
                          <div className={styles.processingProductsListing}>
                            <ProcessingProducts
                              pagination={false}
                              columns={processingProductsColumns}
                              dataSource={selectedCategories?.map(
                                (e: { id; name }) => ({
                                  key: e.id,
                                  product_name: e.name,
                                  cost: '£80.00',
                                  price: '£100.00',
                                  quantity: '10',
                                  ...e,
                                })
                              )}
                              scroll={{ x: 'max-content', y: 250 }}
                            />
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                )}
                {activeStep === 2 && (
                  <Row className={styles.orderReceivingSection}>
                    <Col xs={24} className={styles.orderReceivingTable}>
                      <div>
                        <ReceivingProducts
                          pagination={false}
                          columns={receivingProductsColumns}
                          dataSource={products}
                          rowSelection={{
                            ...rowSelection,
                          }}
                          scroll={{ x: 'max-content', y: 400 }}
                        />
                      </div>
                    </Col>
                  </Row>
                )}
                {activeStep === 3 && (
                  <Row className={styles.orderSummarySection}>
                    <Col xs={24}>
                      <div className={styles.summaryHeader}>
                        <div>Order Name #2983 - 20/02/2020</div>
                        <div>
                          <Button type="default" size="large">
                            Delete
                          </Button>
                        </div>
                      </div>
                      <div className={styles.summaryTableDiv}>
                        <Row>
                          <Col
                            lg={18}
                            md={18}
                            sm={14}
                            xs={24}
                            className={styles.summaryTable}
                          >
                            <ProcessingProducts
                              pagination={false}
                              columns={processingProductsColumns}
                              dataSource={selectedCategories?.map(
                                (e: { id; name }) => ({
                                  key: e.id,
                                  product_name: e.name,
                                  cost: '£80.00',
                                  price: '£100.00',
                                  quantity: '10',
                                  ...e,
                                })
                              )}
                              scroll={{ x: 'max-content', y: 300 }}
                              footer={() => {
                                return (
                                  <div className={styles.tblFooter}>
                                    <div>Total Cost: R£ 00.00</div>
                                  </div>
                                )
                              }}
                            />
                          </Col>
                          <Col
                            lg={6}
                            md={6}
                            sm={10}
                            xs={24}
                            className={styles.summaryStatus}
                          >
                            <div>
                              <span>132</span>
                              <span>Orders</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                )}
              </WStepper>
            </Col>
          </Row>
        </Card>
        <BasicModal
          visible={cancelOrderModal}
          modalWidth={800}
          title="Cancel Order"
          onCancel={() => {
            setCancelOrderModal((cancelOrderModal) => !cancelOrderModal)
          }}
        ></BasicModal>
        <BasicModal
          visible={sendEmailModal}
          modalWidth={600}
          title="Send Email"
          onCancel={() => {
            setSendEmailModal((sendEmailModal) => !sendEmailModal)
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <PabauInput
              type="email"
              reqiredMsg="Email is required"
              placeHolderText="Enter Email"
              label="Send Email"
            />
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={() => sendEmail()}>
              Send
            </Button>
          </div>
        </BasicModal>
        <BasicModal
          visible={createBatchModal}
          modalWidth={600}
          title="Create Batch"
          className="batchModal"
          onCancel={() => {
            setCreateBatchModal((createBatchModal) => !createBatchModal)
          }}
        >
          <div>
            <div style={{ marginBottom: '25px' }}>
              <label>Batch No</label>
              <Input type="text" placeholder="Batch No" size="large" />
            </div>
            <div style={{ marginBottom: '35px' }}>
              <label>Expiry Date</label>
              <DatePicker
                placeholder="Expiry Date"
                size="large"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              type="default"
              onClick={() =>
                setCreateBatchModal((createBatchModal) => !createBatchModal)
              }
            >
              Cancel
            </Button>
            <Button type="primary" style={{ marginLeft: '10px' }}>
              Submit
            </Button>
          </div>
        </BasicModal>
      </div>
    </Layout>
  )
}

export default PurchaseOrder
