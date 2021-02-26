import React, { FC, useState, HTMLAttributes } from 'react'
import { Table as AntTable } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import {
  TableProps,
  ColumnsType,
  ColumnGroupType,
  ColumnType,
} from 'antd/es/table'
import { DownOutlined } from '@ant-design/icons'
import classNames from 'classnames'

import { Checkbox } from '@pabau/ui'

import styles from './ReportsPermissionTable.module.less'

export type PermissionColumnType = {
  key: string
  title: string
}

export type PermissionsType = {
  key: string
  name: string
  permissions: {
    [key: string]: boolean
  }
}

export type PermissionsGroupType = {
  key: string
  name: string
  children?: PermissionsType[]
}

export type ReportsPermissionTableProps = TableProps<PermissionsGroupType> & {
  pageTitle?: string
  subTitle?: string
  columns: PermissionColumnType[]
  onUpdatePermission?: (
    record: PermissionsGroupType | PermissionsType,
    permission: string
  ) => void
}

export const ReportsPermissionTable: FC<ReportsPermissionTableProps> = ({
  pageTitle: title,
  subTitle: subtitle,
  columns: permissionColumns,
  dataSource,
  onUpdatePermission,
  ...props
}) => {
  const [data, setData] = useState<PermissionsGroupType[]>(dataSource || [])
  const [
    expandedRecord,
    setExpandedRecord,
  ] = useState<PermissionsGroupType | null>(null)

  const columns: ColumnsType<PermissionsGroupType> = [
    {
      title: 'Reports Name',
      dataIndex: 'name',
      key: 'name',
    },
    ...(permissionColumns ?? []).map((column: PermissionColumnType):
      | ColumnGroupType<PermissionsGroupType>
      | ColumnType<PermissionsType> => ({
      title: column.title,
      key: column.key,
      dataIndex: `permissions.${column.key}`,
      align: 'center',
      render: function RenderPermission(
        _value,
        record: PermissionsGroupType | PermissionsType
      ) {
        const permissions = (record as PermissionsType).permissions
        const children = (record as PermissionsGroupType).children

        return (
          <Checkbox
            value={`${record.key}_${column.key}`}
            checked={
              permissions?.[column.key] ??
              !!children?.find((item) => item.permissions?.[column.key])
            }
            onClick={(e) => e.stopPropagation()}
            onChange={(e: CheckboxChangeEvent) => {
              if (children) {
                children.map(
                  (item) => (item.permissions[column.key] = e.target.checked)
                )
              } else {
                permissions[column.key] = e.target.checked
              }

              onUpdatePermission?.(record, column.key)

              setData([...data])
            }}
          />
        )
      },
    })),
  ]

  return (
    <div className={styles.tableWrapper}>
      <h3 className={styles.tableWrapperTitle}>{title}</h3>
      <div className={styles.tableWrapperSubtitle}>
        <p>{subtitle}</p>
      </div>

      <AntTable
        className={styles.permissionTable}
        dataSource={data}
        columns={columns}
        expandRowByClick
        expandIcon={({ expanded, record }) =>
          record.children ? (
            <DownOutlined
              className={classNames(
                styles.expandIcon,
                expanded && styles.expanded
              )}
            />
          ) : (
            <span className={styles.expandIconPlaceholder} />
          )
        }
        onExpand={(expanded, record) => {
          if (record.children) {
            setExpandedRecord(expanded ? record : null)
          }
        }}
        expandedRowKeys={expandedRecord ? [expandedRecord.key] : []}
        onRow={({ key }): HTMLAttributes<HTMLElement> =>
          expandedRecord
            ? expandedRecord.key === key
              ? { className: styles.expandedRow }
              : expandedRecord.children?.find((item) => item.key === key)
              ? {
                  className: styles.expandedRowChild,
                }
              : {}
            : {}
        }
        pagination={false}
        {...props}
      />
    </div>
  )
}

export default ReportsPermissionTable
