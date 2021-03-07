import React, { FC } from 'react'

import styles from './CreateTemplateBar.module.less'
import TextArea from 'antd/lib/input/TextArea'
import { ChooseTypeGroup, ChooseTypeGroupProps, Input } from '@pabau/ui'

const defaultTitle =
  'This notification automatically sends to clients ahead of their upcoming appointment.'

interface InputTextProps {
  labelName?: string
  placeholder?: string
  onChange: (val: string) => void
}

interface InputAreaProps {
  labelName?: string
  placeholder?: string
  onChange: ({ target: { value } }) => void
}

interface LinkProps {
  labelName?: string
  href?: string
  onClick: () => void
}

export interface CreateTemplateBarProps {
  title?: string
  chooseTypeGroupProps?: ChooseTypeGroupProps
  inputTextProps?: InputTextProps
  linkProps?: LinkProps
  inputAreaProps?: InputAreaProps
}

export const CreateTemplateBar: FC<CreateTemplateBarProps> = ({
  title,
  inputTextProps,
  linkProps,
  inputAreaProps,
  chooseTypeGroupProps,
}) => {
  console.log(chooseTypeGroupProps, 'chooseTypeGroupProps')
  return (
    <div className={styles.barContainer}>
      <p>{title ?? defaultTitle}</p>
      <a
        href={linkProps ? linkProps.href : '/#'}
        onClick={() => (linkProps ? linkProps.onClick() : null)}
      >
        {linkProps ? linkProps.labelName : 'Learn More'}
      </a>
      <p>{inputTextProps ? inputTextProps.labelName : 'name'}</p>
      <Input
        placeholder={inputTextProps ? inputTextProps.placeholder : ''}
        onChange={(val: string) =>
          inputTextProps ? inputTextProps.onChange(val) : null
        }
      />
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
      <ChooseTypeGroup {...chooseTypeGroupProps} />
    </div>
  )
}

export default CreateTemplateBar
