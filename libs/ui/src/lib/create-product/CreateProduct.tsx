import React, { FC, useState, useEffect } from 'react'
import { Button, Switch, TabMenu, Input } from '@pabau/ui'
import { Modal, Form, Select, InputNumber } from 'antd'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './CreateProduct.module.less'

const { Option } = Select

export interface CreateProductProps {
  supplierNames: Array<string>
  categories: Array<string>
  taxNames: Array<string>
  visible: boolean
  onClose: () => void
  onSaveChanges?: () => void
}

export const CreateProduct: FC<CreateProductProps> = ({
  supplierNames,
  categories,
  taxNames,
  visible,
  onClose,
  onSaveChanges,
}) => {
  const [form] = Form.useForm()
  const [showModal, setShowModal] = useState(false)
  const [sku, setSku] = useState('')
  const [barcode, setBarcode] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [name, setName] = useState('')
  const [supplierName, setSupplierName] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [retailPrice, setRetailPrice] = useState('')
  const [taxName, setTaxName] = useState('')
  useEffect(() => {
    setShowModal(visible)
  }, [visible])
  return (
    <Modal
      visible={showModal}
      width="100%"
      wrapClassName={styles.createProduct}
      footer={null}
    >
      <React.Fragment>
        <div className={styles.createProductHeader}>
          <div>
            <LeftOutlined
              style={{
                color: 'var(--light-grey-color)',
                marginRight: '24px',
                fontSize: '24px',
              }}
            />
            Create Product
          </div>
          <div className={styles.createProductOps}>
            <div className={styles.createProductActive}>
              Active{' '}
              <Switch
                size="small"
                defaultChecked={true}
                style={{ marginLeft: '12px' }}
              />
            </div>
            <Button
              style={{
                marginRight: '1rem',
              }}
            >
              Reset to defaults
            </Button>
            <Button
              onClick={() => setShowModal(false)}
              style={{
                marginRight: '1rem',
              }}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={() => onSaveChanges?.()}>
              Save changes
            </Button>
          </div>
        </div>
        <div className={styles.createProductBody}>
          <TabMenu
            menuItems={['General', 'Pricing', 'Inventory levels', 'Advanced']}
            tabPosition="top"
            minHeight="1px"
          >
            <div className={styles.createProductGeneral}>
              <div className={styles.createProductSection}>
                <h2 className={styles.createProductSectionTitle}>General</h2>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Name"
                    placeHolderText="Enter name"
                    text={name}
                    onChange={(val) => setName(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Form form={form} layout="vertical">
                    <Form.Item label="Category">
                      <Select
                        placeholder="Select category"
                        onSelect={(val) => setCategory(val)}
                        defaultValue={category}
                      >
                        {categories.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Barcode"
                    placeHolderText="Enter barcode"
                    text={barcode}
                    onChange={(val) => setBarcode(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="SKU"
                    placeHolderText="Enter SKU"
                    text={sku}
                    onChange={(val) => setSku(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Size"
                    placeHolderText="e.g. 600 ml"
                    text={size}
                    onChange={(val) => setSize(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Form form={form} layout="vertical">
                    <Form.Item label="Supplier Name">
                      <Select
                        placeholder="Select supplier name"
                        onSelect={(val) => setSupplierName(val)}
                        defaultValue={supplierName}
                      >
                        {supplierNames.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
                <div
                  className={styles.createProductSectionItem}
                  style={{ margin: 0 }}
                >
                  <Form form={form} layout="vertical">
                    <Form.Item label="Image">
                      <Button icon={<PlusOutlined />}>Select file</Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className={styles.createProductPricing}>
              <div className={styles.createProductSection}>
                <h2 className={styles.createProductSectionTitle}>Pricing</h2>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Cost price"
                    text={costPrice}
                    onChange={(val) => setCostPrice(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Retail price"
                    text={retailPrice}
                    onChange={(val) => setRetailPrice(val)}
                  />
                </div>
                <div
                  className={styles.createProductSectionItem}
                  style={{ margin: 0 }}
                >
                  <Form form={form} layout="vertical">
                    <Form.Item label="Tax name">
                      <Select
                        placeholder="Select tax name"
                        onSelect={(val) => setTaxName(val)}
                        defaultValue={taxName}
                      >
                        {taxNames.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className={styles.createProductInventoryLevels}>
              <div className={styles.createProductSection}>
                <h2 className={styles.createProductSectionTitle}>
                  Inventory Levels
                </h2>
                <div className={styles.createProductSectionDoubleItems}>
                  <div>
                    <Form form={form} layout="vertical">
                      <Form.Item label="Minimum stock level">
                        <InputNumber />
                      </Form.Item>
                    </Form>
                  </div>
                  <div>
                    <Form form={form} layout="vertical">
                      <Form.Item label="Maximum stock level">
                        <InputNumber />
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Cost price"
                    text={costPrice}
                    onChange={(val) => setCostPrice(val)}
                  />
                </div>
                <div className={styles.createProductSectionItem}>
                  <Input
                    label="Retail price"
                    text={retailPrice}
                    onChange={(val) => setRetailPrice(val)}
                  />
                </div>
                <div
                  className={styles.createProductSectionItem}
                  style={{ margin: 0 }}
                >
                  <Form form={form} layout="vertical">
                    <Form.Item label="Tax name">
                      <Select
                        placeholder="Select tax name"
                        onSelect={(val) => setTaxName(val)}
                        defaultValue={taxName}
                      >
                        {taxNames.map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className={styles.createProductAdvanced}></div>
          </TabMenu>
        </div>
      </React.Fragment>
    </Modal>
  )
}

export default CreateProduct
