import { MoreOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Dropdown, Menu } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

const menu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)">Edit Form</a>
    </Menu.Item>
    <Menu.Item>
      <a href="javascript:void(0)">Delete Form</a>
    </Menu.Item>
  </Menu>
)

const MedicalFormSetting: FC = () => {
  return (
    <div className={styles.medicalFormSettingPanel}>
      <Button type={ButtonTypes.primary} className={styles.createButton}>
        Create From
      </Button>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Button type={ButtonTypes.default} className={styles.moreButton}>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </div>
  )
}

export default MedicalFormSetting
