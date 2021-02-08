import React, { FC, useState, MouseEvent } from 'react'
import { Input } from 'antd'
import { Button, BasicModal, Avatar } from '@pabau/ui'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import styles from './AddGroupModal.module.less'

interface Member {
  userName: string
  profileURL: string
}
interface groupData {
  general: Member[]
  design: Member[]
}

interface P {
  groupData?: groupData
  searchMember?: Member[]
  isGroupModalVisible?: boolean
  memberModalTitle?: string
  searchMemberText?: string
  selectedGroup?: string
  onClick?: () => void
  onOk?: () => void
  onCancel?: (e?: MouseEvent<HTMLElement>) => void
  onChange?: (e: MouseEvent<HTMLElement>) => void
}

export const AddGroupModal: FC<P> = ({ ...props }) => {
  const {
    groupData,
    selectedGroup,
    memberModalTitle,
    isGroupModalVisible,
    onOk,
    onCancel,
    onChange,
    onClick,
  } = props

  const [searchMember, setSearchMember] = useState<Member[]>([])
  const [searchMemberText, setSearchMemberText] = useState('')

  const searchGroupMember = (value) => {
    const results = Array<Member>()
    if (groupData && selectedGroup) {
      for (const key in groupData[selectedGroup]) {
        if (
          value !== '' &&
          groupData[selectedGroup][key].userName.indexOf(value) !== -1
        ) {
          results.push(groupData[selectedGroup][key])
        }
      }
      setSearchMember([...results])
    }
  }

  const handleChange = (e) => {
    setSearchMemberText(e.target.value)
    searchGroupMember(e.target.value)
    onChange?.(e)
  }

  return (
    <div>
      <BasicModal
        centered
        title={memberModalTitle}
        visible={isGroupModalVisible}
        onOk={onOk}
        onCancel={() => onCancel?.()}
        width={680}
        className={styles.memberModal}
        footer={false}
      >
        <Button
          className={styles.modalAddButton}
          type="default"
          icon={<PlusOutlined />}
          size="middle"
          onClick={() => onClick?.()}
        >
          Add People
        </Button>
        <Input
          className={styles.modalSearchInput}
          size="large"
          placeholder="Search members"
          prefix={<SearchOutlined />}
          onChange={handleChange}
        />
        {searchMemberText === '' &&
          selectedGroup &&
          groupData?.[selectedGroup].map((member, index) => (
            <div key={member.userName} className={styles.modalMember}>
              <div className={styles.memberInfo}>
                <Avatar
                  className={styles.memberAvatar}
                  size={32}
                  src={member.profileURL}
                />
                <span className={styles.memberName}>{member.userName}</span>
              </div>
              <Button type="default" size="middle">
                Remove
              </Button>
            </div>
          ))}
        {searchMemberText !== '' &&
          searchMember?.map((member, index) => (
            <div key={member.userName} className={styles.modalMember}>
              <div className={styles.memberInfo}>
                <Avatar
                  className={styles.memberAvatar}
                  size={32}
                  src={member.profileURL}
                />
                <span className={styles.memberName}>{member.userName}</span>
              </div>
              <Button type="default" size="middle">
                Remove
              </Button>
            </div>
          ))}
      </BasicModal>
    </div>
  )
}

export default AddGroupModal
