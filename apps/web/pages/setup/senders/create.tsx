import React, { useState } from 'react'
import classNames from 'classnames'
import {
  FullScreenReportModal,
  OperationType,
  Button,
  Input,
  Switch,
  SimpleDropdown,
} from '@pabau/ui'
import { useRouter } from 'next/router'
import styles from './create.module.less'
import {
  CheckCircleFilled,
  MailOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Collapse, Space, Tag, Tooltip } from 'antd'

import {
  SenderItem,
  MergeTagItem,
  senderItems,
  masterCriteriaOptions,
  subCriteriaOptions,
  mergeTagTypeOptions,
} from '../senders'

const { Panel } = Collapse

export const CreateSender: React.FC = () => {
  const router = useRouter()
  const [itemInfo, setItemInfo] = useState<SenderItem>({
    type: 'email',
    fromName: '',
    isDefaultSender: true,
    masterCriteria: '',
    subCriteria: '',
    mergeTags: [
      {
        type: '',
        value: '',
      },
    ],
  })
  const { type } = itemInfo

  const handleUpdateMergeTag = (index, tagInfo: MergeTagItem) => {
    if (itemInfo.mergeTags[index]) {
      itemInfo.mergeTags[index] = tagInfo
      setItemInfo({ ...itemInfo })
    }
  }

  const handleAddMergeTag = () => {
    itemInfo.mergeTags.push({ type: '', value: '' })
    setItemInfo({ ...itemInfo })
  }

  return (
    <FullScreenReportModal
      title="Create a Sender"
      visible={true}
      operations={[
        OperationType.active,
        OperationType.cancel,
        OperationType.create,
      ]}
      cancelBtnText="Cancel"
      createBtnText="Create"
      enableCreateBtn={
        !!(
          itemInfo.type &&
          itemInfo.fromName &&
          (itemInfo.type !== 'email' || itemInfo.fromEmail) &&
          (!itemInfo.isUseComapnyEmail || itemInfo.fromCompanyEmail) &&
          (!itemInfo.isEnterpriseEmail || itemInfo.replyTo)
        )
      }
      activated={true}
      onBackClick={() => router.push('/setup/senders')}
      onCancel={() => router.push('/setup/senders')}
      onCreate={() => {
        // Remove last tag element
        const lastTag =
          itemInfo.mergeTags.length > 0
            ? itemInfo.mergeTags[itemInfo.mergeTags.length - 1]
            : null
        if (!lastTag?.type && !lastTag?.value) {
          itemInfo.mergeTags.splice(-1, 1)
        }

        senderItems.push({ ...itemInfo, id: String(senderItems.length + 1) })
        router.push('/setup/senders')
      }}
    >
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>Type</div>
          <div className={styles.typesWrapper}>
            <Button
              className={classNames(
                styles.typeItem,
                type === 'email' && styles.selected
              )}
              onClick={() => setItemInfo({ ...itemInfo, type: 'email' })}
            >
              {type === 'email' && (
                <CheckCircleFilled
                  color="primary"
                  className={styles.checkIcon}
                />
              )}
              <MailOutlined className={styles.typeIcon} />
              <div className={styles.title}>Email</div>
            </Button>
            <Button
              className={classNames(
                styles.typeItem,
                type === 'sms' && styles.selected
              )}
              onClick={() => setItemInfo({ ...itemInfo, type: 'sms' })}
            >
              {type === 'sms' && (
                <CheckCircleFilled
                  color="primary"
                  className={styles.checkIcon}
                />
              )}
              <MessageOutlined className={styles.typeIcon} />
              <div className={styles.title}>SMS</div>
            </Button>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>Sender</div>
          <div className={styles.formElement}>
            <Input
              label="From name"
              placeholder="Enter name"
              text={itemInfo.fromName}
              onChange={(fromName) => setItemInfo({ ...itemInfo, fromName })}
            />
          </div>
          <div className={styles.formElement}>
            <Space size={16}>
              <Space className={styles.switchItem} size={8}>
                <Switch
                  checked={itemInfo.isDefaultSender}
                  onChange={(checked) =>
                    setItemInfo({ ...itemInfo, isDefaultSender: checked })
                  }
                />
                <span>Default Sender</span>
              </Space>
              {type === 'sms' && (
                <Space className={styles.switchItem} size={8}>
                  <Switch
                    checked={itemInfo.isEnableReplies}
                    onChange={(checked) =>
                      setItemInfo({ ...itemInfo, isEnableReplies: checked })
                    }
                  />
                  <span>Enable Replies</span>
                  <Tooltip
                    title="In order to receive replies, we have changed your senders name to your inbox number"
                    placement="right"
                  >
                    <QuestionCircleOutlined />
                  </Tooltip>
                </Space>
              )}
            </Space>
          </div>
          {type === 'email' && (
            <>
              <div className={styles.formElement}>
                <Input
                  label="From email"
                  placeholder="e.g. bookings@clinic.com"
                  text={itemInfo.fromEmail}
                  onChange={(fromEmail) =>
                    setItemInfo({ ...itemInfo, fromEmail })
                  }
                />
              </div>
              <div className={styles.formElement}>
                <Space className={styles.switchItem} size={8}>
                  <Switch
                    checked={itemInfo.isUseComapnyEmail}
                    onChange={(checked) =>
                      setItemInfo({ ...itemInfo, isUseComapnyEmail: checked })
                    }
                  />
                  <div>Use a company email</div>
                  <QuestionCircleOutlined />
                  <Tag className={styles.plus}>Plus</Tag>
                </Space>
              </div>
              {itemInfo.isUseComapnyEmail && (
                <div className={styles.formElement}>
                  <Input
                    label="From email"
                    placeholder="e.g. bookings@clinic.com"
                    text={itemInfo.fromCompanyEmail}
                    onChange={(fromCompanyEmail) =>
                      setItemInfo({ ...itemInfo, fromName: fromCompanyEmail })
                    }
                  />
                </div>
              )}
              <div className={styles.formElement}>
                <Space className={styles.switchItem} size={8}>
                  <Switch
                    checked={itemInfo.isAutoUploadReplies}
                    onChange={(checked) =>
                      setItemInfo({ ...itemInfo, isAutoUploadReplies: checked })
                    }
                  />
                  <div>Automatically upload client replies to record</div>
                  <Tag className={styles.plus}>Plus</Tag>
                </Space>
              </div>
            </>
          )}
        </div>

        <div className={styles.advancedSettings}>
          <Collapse ghost>
            <Panel header="Advanced settings" key="advanced-settings">
              <div className={styles.cardWrapper}>
                <div className={styles.cardHeader}>Sending criteria</div>
                <div
                  className={classNames(
                    styles.formElement,
                    styles.criteriaWrapper
                  )}
                >
                  <SimpleDropdown
                    label="Sending criteria"
                    className={styles.criteriaItem}
                    value={itemInfo.masterCriteria}
                    dropdownItems={masterCriteriaOptions}
                    onSelected={(val) =>
                      setItemInfo({ ...itemInfo, masterCriteria: val })
                    }
                    placeholder="Select sending criteria"
                  />
                  <div className={styles.criteriaDivider}>IS</div>
                  <SimpleDropdown
                    label="Sending criteria"
                    className={styles.criteriaItem}
                    value={itemInfo.subCriteria}
                    dropdownItems={subCriteriaOptions}
                    onSelected={(val) =>
                      setItemInfo({ ...itemInfo, subCriteria: val })
                    }
                    placeholder="Select sending criteria"
                  />
                </div>
              </div>

              <div className={styles.cardWrapper}>
                <div className={styles.cardHeader}>Custom merge tags</div>
                {itemInfo.mergeTags.map((tag, index) => (
                  <div className={styles.mergeTag} key={index}>
                    <SimpleDropdown
                      label="Tag text"
                      className={styles.formElement}
                      value={tag.type}
                      dropdownItems={mergeTagTypeOptions}
                      onSelected={(val) =>
                        handleUpdateMergeTag(index, { ...tag, type: val })
                      }
                      placeholder="Merge tag text"
                    />
                    <Input
                      label="Tag value"
                      className={styles.formElement}
                      text={tag.value}
                      onChange={(val) =>
                        handleUpdateMergeTag(index, { ...tag, value: val })
                      }
                      placeholder="Merge tag value"
                    />
                  </div>
                ))}
                <Button
                  size="small"
                  onClick={() => handleAddMergeTag()}
                  style={{ marginTop: 16 }}
                >
                  Add new
                </Button>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </FullScreenReportModal>
  )
}

export default CreateSender
