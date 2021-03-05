import React, { FC } from 'react'
import { Switch, Row, Col } from 'antd'
import { Button } from '@pabau/ui'
import styles from './Permission.module.less'
import { QuestionCircleOutlined } from '@ant-design/icons'

/* eslint-disable-next-line */
export interface ContainerType {
  name: string
  value: boolean
  key: number
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
  onChange?: (index: number, ind: number) => void
  CheckAll?: () => void
  UnCheckAll?: () => void
}
export const Permission: FC<PermissionProps> = ({
  title,
  description,
  fields,
  onChange,
  CheckAll,
  UnCheckAll,
}) => {
  return (
    <div className={styles.PermissiononWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{description}</div>
      <Row>
        <Col span={24}>
          <div className={styles.CheckBtn}>
            <Button type="link" onClick={CheckAll}>
              CheckAll
            </Button>
            <Button type="link" onClick={UnCheckAll}>
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
                    <QuestionCircleOutlined />
                  </div>
                </div>
                <div>
                  <Switch
                    checked={data.value}
                    onClick={() => onChange?.(index, ind)}
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
