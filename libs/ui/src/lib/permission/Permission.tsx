import React, { FC } from 'react'
import { Switch, Row, Col, Tooltip } from 'antd'
import { Button } from '@pabau/ui'
import styles from './Permission.module.less'
import { QuestionCircleOutlined } from '@ant-design/icons'

export interface ContainerType {
  name: string
  value: boolean
  key: number
  tooltipMessage?: string
}
export interface PermissionFieldType {
  name: string
  description: string
  key: number
  container: ContainerType[]
}
export interface PermissionProps {
  title?: string
  description?: string
  fields?: PermissionFieldType[]
  onChange?: (index: number, ind: number, rowId?: string) => void
  onCheckAllClicked?: (rowId?: string) => void
  onUnCheckAllClicked?: (rowId?: string) => void
  rowId?: string
}
export const Permission: FC<PermissionProps> = ({
  title,
  description,
  fields,
  onChange,
  onCheckAllClicked,
  onUnCheckAllClicked,
  rowId,
}) => {
  return (
    <div className={styles.PermissiononWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{description}</div>
      <Row>
        <Col span={24}>
          <div className={styles.CheckBtn}>
            <Button type="link" onClick={() => onCheckAllClicked?.(rowId)}>
              CheckAll
            </Button>
            <Button type="link" onClick={() => onUnCheckAllClicked?.(rowId)}>
              UncheckAll
            </Button>
          </div>
        </Col>
      </Row>
      {fields?.map((field, index) => (
        <div className={styles.maintablbox} key={field.key}>
          <div className={styles.fildename}>
            <p>{field.name}</p>
            <div>{field.description}</div>
          </div>
          <div className={styles.manegercon}>
            {field.container.map((data, ind) => (
              <div className={styles.swichContact} key={data.key}>
                <div>
                  <div className={styles.dataname}>
                    <p>{data.name}</p>
                    <Tooltip title={data.tooltipMessage}>
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <Switch
                    checked={data.value}
                    onClick={() => onChange?.(index, ind, rowId)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Permission
