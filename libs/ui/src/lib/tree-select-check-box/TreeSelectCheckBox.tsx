import React, { FC, useState, useEffect } from 'react'
import { Tree, Input } from 'antd'
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { BasicModal, Button } from '@pabau/ui'
import styles from './TreeSelectCheckBox.module.less'

export interface SingleCheckBoxDropDown {
  title: string | number | JSX.Element
  key: string | number
  children?: SingleCheckBoxDropDown[]
}

export interface TreeSelectCheckBoxProps {
  modalTitle: string
  visible: boolean
  onClose: () => void
  inputPlaceholder: string
  data: SingleCheckBoxDropDown[]
  defaultChecked?: []
  defaultExpandedAll?: boolean
  modalWidth?: number
  onSave?: (selected) => void
}

const arrangeTitle = (
  title: string | number | JSX.Element = '',
  subTitle: string | number | JSX.Element = ''
) => {
  return (
    <span className="title">
      <span className="main">{title}</span>
      {subTitle && (
        <span className="sub" style={{ marginTop: '2.5px' }}>
          {subTitle}
        </span>
      )}
    </span>
  )
}

export const TreeSelectCheckBox: FC<TreeSelectCheckBoxProps> = ({
  modalTitle,
  visible,
  onClose,
  inputPlaceholder = 'Search',
  data,
  defaultChecked = [],
  defaultExpandedAll = false,
  modalWidth = 800,
  onSave,
  ...rest
}) => {
  const [treeData, setTreeData] = useState<SingleCheckBoxDropDown[]>([])
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(defaultChecked)

  const onCheck = (checkedKeysValue: React.Key[]) => {
    setCheckedKeys(checkedKeysValue)
  }

  useEffect(() => {
    const firsObj: SingleCheckBoxDropDown = {
      title: arrangeTitle('Select All'),
      key: 'all',
      children: data,
    }
    setTreeData([firsObj])
  }, [data])

  const save = () => {
    const keys = [...checkedKeys]
    if (checkedKeys.includes('all')) {
      const index = keys.indexOf('all')
      keys.splice(index, 1)
    }
    onSave?.(keys)
  }

  return (
    <BasicModal
      visible={visible}
      title={modalTitle}
      className="servicesModal"
      width={modalWidth}
      onCancel={() => onClose?.()}
    >
      <div className={styles.serviceInputSearch}>
        <Input
          type="text"
          size="large"
          placeholder={inputPlaceholder}
          suffix={<SearchOutlined />}
        />
      </div>
      <div className={styles.serviceInputSearch}>
        <Tree
          checkable
          defaultExpandAll={defaultExpandedAll}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          treeData={treeData}
          showIcon={true}
          blockNode={true}
          showLine={false}
          switcherIcon={<DownOutlined />}
        />
      </div>
      <div className={styles.saveBtn}>
        <Button type="primary" size="large" onClick={save}>
          Save{' '}
          {checkedKeys?.length > 0
            ? checkedKeys.includes('all')
              ? checkedKeys.length - 1
              : checkedKeys.length
            : ''}{' '}
          Services
        </Button>
      </div>
    </BasicModal>
  )
}

export default TreeSelectCheckBox
