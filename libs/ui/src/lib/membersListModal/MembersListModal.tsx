import React, { FC, MouseEvent, useState } from 'react'
import styles from './MembersListModal.module.less'
import { Avatar, BasicModal, Search } from '@pabau/ui'

interface Member {
  id: string
  firstName: string
  lastName: string
  avatarURL: string
}

interface P {
  memberData: Member[]
  onOk?: () => void
  isMemberModal: boolean
  memberModalTitle?: string
  subTitle?: string
  onCancel?: (e?: MouseEvent<HTMLElement>) => void
  onChange?: (e: MouseEvent<HTMLElement>) => void
}

export const MembersListModal: FC<P> = ({
  memberData,
  onChange,
  onCancel,
  onOk,
  isMemberModal,
  memberModalTitle,
  subTitle,
}) => {
  const [searchMember, setSearchMember] = useState<Member[]>([])
  const [searchMemberText, setSearchMemberText] = useState('')

  const searchGroupMember = (value) => {
    const results = new Array<Member>()
    for (const key in memberData) {
      const name = memberData[key].firstName + ' ' + memberData[key].lastName
      if (
        value !== '' &&
        name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        results.push(memberData[key])
      }
    }
    setSearchMember([...results])
  }

  const handleChange = (e) => {
    setSearchMemberText(e)
    searchGroupMember(e)
    onChange?.(e)
  }
  return (
    <div>
      <BasicModal
        centered
        title={memberModalTitle}
        visible={isMemberModal}
        onOk={onOk}
        onCancel={() => onCancel?.()}
        width={672}
        className={styles.memberModal}
        footer={false}
      >
        {subTitle && <h5>{subTitle}</h5>}
        <Search
          placeHolder="Search members"
          onChange={handleChange}
          searchResults={searchMember}
        >
          <div className={styles.memberWrapper}>
            {searchMemberText === '' &&
              memberData?.map((member) => (
                <div key={member.id} className={styles.modalMember}>
                  <div className={styles.memberInfo}>
                    <Avatar
                      className={styles.memberAvatar}
                      size={32}
                      src={member.avatarURL}
                    />
                    <span className={styles.memberName}>
                      {member.firstName} {member.lastName}
                    </span>
                  </div>
                </div>
              ))}
            {searchMemberText !== '' &&
              searchMember?.map((member) => (
                <div key={member.id} className={styles.modalMember}>
                  <div className={styles.memberInfo}>
                    <Avatar
                      className={styles.memberAvatar}
                      size={32}
                      src={member.avatarURL}
                    />
                    <span className={styles.memberName}>
                      {member.firstName} {member.lastName}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </Search>
      </BasicModal>
    </div>
  )
}

export default MembersListModal
