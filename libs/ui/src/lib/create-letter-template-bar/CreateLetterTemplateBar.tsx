import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons'
import { Input } from '@pabau/ui'
import { Tag } from 'antd'
import React, { FC } from 'react'
import FileUploder from '../file-uploder/FileUploder'
import FormType, { FormTypeProps } from '../form-type/FormType'

import styles from './CreateLetterTemplateBar.module.less'

const defaultFormTypes = {
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

const formTypeArgs: FormTypeProps = {
  isEditing: () => true,
  setting: defaultFormTypes,
  onChangeSetting: (val) => alert(),
}

interface InputTextProps {
  labelName?: string
  placeholder?: string
  onChange: (val: string) => void
}

export interface CreateLetterTemplateBarProps {
  title?: string
  inputTextProps?: InputTextProps
}

export const CreateLetterTemplateBar: FC<CreateLetterTemplateBarProps> = ({
  title,
  inputTextProps,
}) => {
  const defaultTitle = 'Components'
  return (
    <div className={styles.barContainer}>
      <div className={styles.title}>{title ?? defaultTitle}</div>
      <div className={styles.contentContainer}>
        <p>{inputTextProps ? inputTextProps.labelName : 'name'}</p>
        <Input
          placeholder={inputTextProps ? inputTextProps.placeholder : ''}
          onChange={(val: string) =>
            inputTextProps ? inputTextProps.onChange(val) : null
          }
        />
        <FormType {...formTypeArgs} />
        <FileUploder />
        <div className={styles.tagsContainer}>
          <div className={styles.tagTitle}>{'Merge tags'}</div>
          <div className={styles.tagList}>
            <Tag icon={<CheckCircleOutlined />} color="success">
              success
            </Tag>
            <Tag icon={<SyncOutlined spin />} color="processing">
              processing
            </Tag>
            <Tag icon={<SyncOutlined />} color="error">
              error
            </Tag>
            <Tag icon={<SyncOutlined />} color="warning">
              warning
            </Tag>
            <Tag icon={<SyncOutlined />} color="default">
              waiting
            </Tag>
            <Tag icon={<SyncOutlined />} color="default">
              stop
            </Tag>
          </div>
          <div className={styles.tagSubtitle}>{'We found 5 merge tags'}</div>
        </div>
        {/* <a
          href={linkProps ? linkProps.href : '/#'}
          onClick={() => (linkProps ? linkProps.onClick() : null)}
        >
          {linkProps ? linkProps.labelName : 'Learn More'}
        </a>
        <p>{'Message'}</p>
        <TextArea
          className={styles.contentText}
          rows={4}
          placeholder={
            inputAreaProps ? inputAreaProps.placeholder : 'e.g. Special Offer'
          }
          onChange={({ target: { value } }) =>
            inputAreaProps ? inputAreaProps.onChange({ target: { value } }) : null
          }
        />
        <div className={styles.tagContainer}>
          <a href="/*">{'+ Add Merge Tag'}</a>
        </div>
        <ChooseTypeGroup {...chooseTypeGroupProps} /> */}
      </div>
    </div>
  )
}

export default CreateLetterTemplateBar
