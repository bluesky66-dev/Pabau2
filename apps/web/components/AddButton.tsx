import { DocumentNode, useMutation } from '@apollo/client'
import React, { FC, useState } from 'react'
import { BasicModal as Modal, Button } from '@pabau/ui'
import Form from './Form'
import { useKeyPressEvent } from 'react-use'
import styles from './CrudTable.module.less'
import { FilterOutlined, PlusSquareFilled, SearchOutlined } from '@ant-design/icons'
import { Input, Radio, Popover } from 'antd'
import { isMobile, isTablet } from 'react-device-detect'
interface P {
  schema: Schema
  addQuery: DocumentNode
  listQuery: DocumentNode
  newButtonText?: string
}
const AddButton: FC<P> = ({
  schema,
  addQuery,
  listQuery,
  newButtonText = 'Create ' + schema.short,
}) => {
  const [addMutation] = useMutation(addQuery)
  const [modalShowing, setModalShowing] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [marketingSourceSearch, setMarketingSourceSearch] = useState('')
  let formRef: { submitForm: () => void } | null = null
  useKeyPressEvent('n', () => {
    setModalShowing(true)
  })

  const filterContent = (
    <div className={styles.filterContent}>
      <div className={styles.filterHeader}>
        <h6>Filter by</h6>
        <p>Status</p>
      </div>
      <div className={styles.radioTextStyle}>
        <Radio.Group onChange={(e) => setIsActive(e.target.value)} value={isActive}>
          <Radio value={true}>
            <span>Active</span>
          </Radio>
          <Radio value={false}>
            <span>Inactive</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  )
  return (
    <>
      {!isTablet && isMobile ? (
        <div className={styles.marketingIcon}>
          <SearchOutlined className={styles.marketingIconStyle} />
          <FilterOutlined className={styles.marketingIconStyle} />
          <PlusSquareFilled
            className={styles.plusIconStyle}
            onClick={() => setModalShowing(true)}
          />
        </div>
      ) : (
        <div className={styles.marketingSource}>
          <Input
            className={styles.searchMarketingStyle}
            placeholder="Search"
            value={marketingSourceSearch}
            onChange={(e) => setMarketingSourceSearch(e.target.value)}
            suffix={<SearchOutlined style={{ color: '#8C8C8C' }} />}
            autoFocus
          />
          <Popover
            trigger="click"
            content={filterContent}
            placement="bottomRight"
            overlayClassName={styles.filterPopover}
          >
            <Button className={styles.filterBtn}>
              <FilterOutlined /> Filter
            </Button>
          </Popover>
          <Button
            className={styles.createSourceBtn}
            type="primary"
            onClick={() => setModalShowing(true)}
          >
            {newButtonText}
          </Button>
        </div>
      )}
      <Modal
        onCancel={() => setModalShowing(false)}
        onOk={() => formRef?.submitForm()}
        visible={modalShowing}
        title={`Create ${schema.full}`}
        newButtonText={`Create ${schema.short}`}
      >
        <Form
          onRef={(ref) => {
            formRef = ref
          }}
          schema={schema}
          onSubmit={async (form: Record<string, unknown>) => {
            await addMutation({
              variables: form,
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
                        [key]: [...existing[key], form],
                      },
                    })
                  }
                }
              },
            })
            setModalShowing(false)
          }}
        />
      </Modal>
    </>
  )
}

export default AddButton
