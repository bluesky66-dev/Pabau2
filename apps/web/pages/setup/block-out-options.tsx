import React, { useState } from 'react'
import {
  Breadcrumb,
  Button,
  Notification,
  NotificationType,
  Table,
} from '@pabau/ui'
import { Card, Col, Pagination, Row, Select, Typography } from 'antd'

import Layout from '../../components/Layout/Layout'
import NewBlockTypeModal from '../../components/Setup/BlockOutOptions/NewBlockTypeModal'
import { blockOutOptions } from '../../mocks/BlockOutOptions'
import styles from './block-out-options.module.less'

/* eslint-disable-next-line */
export interface BlockOutOptionsProps {}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '160px',
  },
]

export function BlockOutOptions(props: BlockOutOptionsProps) {
  const { Paragraph, Text, Title } = Typography
  const { Option } = Select

  const [pageSize, setPageSize] = useState(10)
  const [showModal, setShowModal] = useState(false)
  const [edit, setEdit] = useState(null)

  const onRowClick = (data) => {
    setEdit(data)
    setShowModal(true)
  }

  const createClick = () => {
    setShowModal(true)
    setEdit(null)
  }

  const onSave = () => {
    Notification(
      NotificationType.success,
      edit
        ? 'Success! You have successfully edited a blockout option'
        : 'Success! You have successfully created a blockout option'
    )
    setShowModal(false)
    setEdit(null)
  }

  const onDelete = () => {
    Notification(
      NotificationType.success,
      'Success! You have successfully deleted a blockout option'
    )
    setShowModal(false)
    setEdit(null)
  }

  return (
    <Layout>
      <Card bodyStyle={{ padding: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Block Out Options', path: '' },
              ]}
            />
            <Title>Block Out Options</Title>
          </Col>
          <Col>
            <Button type="primary" onClick={createClick}>
              New block type
            </Button>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={blockOutOptions as never[]}
          onRowClick={onRowClick}
        />
      </Card>
      <div style={{ margin: '24px 0' }} className={styles.row}>
        <Paragraph type="secondary" style={{ marginBottom: 0 }}>
          SHOWING <Text>4</Text> RESULTS FROM <Text>4</Text>
        </Paragraph>
        <div className={styles.row} style={{ marginLeft: 32 }}>
          <div>
            <Text type="secondary">ROWS PER PAGE:</Text>
            <Select
              value={pageSize}
              style={{ width: 65 }}
              bordered={false}
              onChange={(size) => setPageSize(size)}
            >
              <Option value={10}>10</Option>
              <Option value={25}>25</Option>
              <Option value={50}>50</Option>
              <Option value={100}>100</Option>
            </Select>
          </div>
          <Pagination defaultCurrent={1} total={4} pageSize={pageSize} />
        </div>
      </div>
      {showModal && (
        <NewBlockTypeModal
          visible={showModal}
          onCancel={() => setShowModal(false)}
          isEdit={!!edit}
          editData={edit}
          onSave={onSave}
          onDelete={onDelete}
        />
      )}
    </Layout>
  )
}

export default BlockOutOptions
