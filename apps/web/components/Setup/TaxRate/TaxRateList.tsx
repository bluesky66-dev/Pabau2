import React, { useState } from 'react'
import { Table, Notification, NotificationType } from '@pabau/ui'

import { taxRates } from '../../../mocks/TaxRates'
import CreateTaxRateModal from './CreateTaxRateModal'

const taxRateColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
    visible: true,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    className: 'drag-visible',
    visible: true,
    // eslint-disable-next-line react/display-name
    render: (_, { amount }) => <span>{amount}%</span>,
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    className: 'drag-visible',
    visible: true,
    width: '180px',
  },
]

/* eslint-disable-next-line */
export interface TaxRateProps {}

export function TaxRate(props: TaxRateProps) {
  const [showModal, setShowModal] = useState(false)
  const [editData, setEditData] = useState(null)

  const onRowClick = (data) => {
    setEditData(data)
    setShowModal(true)
  }

  const onTaxEdit = () => {
    Notification(
      NotificationType.success,
      'Success! You have successfully edited a tax rate'
    )
  }

  const onTaxDelete = () => {
    Notification(
      NotificationType.success,
      'Success! You have successfully deleted a tax rate'
    )
  }

  return (
    <>
      <Table
        draggable
        columns={taxRateColumns}
        dataSource={taxRates as never[]}
        onRowClick={onRowClick}
      />
      <CreateTaxRateModal
        isEdit={true}
        editData={editData}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onSave={onTaxEdit}
        onDelete={onTaxDelete}
      />
    </>
  )
}

export default TaxRate
