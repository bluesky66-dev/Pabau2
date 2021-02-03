import React, { FC } from 'react'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import styles from './RegistrationFields.module.less'

export interface FieldType {
  fieldName: string
  visible: boolean
  required: boolean
  disabled: boolean
  key: number
}

/* eslint-disable-next-line */
export interface RegistrationFieldsProps {
  title?: string
  description?: string
  fieldTitle?: string
  customFieldTitle?: string
  visibleTitle?: string
  requiredTitle?: string
  fields?: FieldType[]
  customFields?: FieldType[]
  onCustomFieldCheckboxChange?: (
    e: CheckboxChangeEvent,
    key: number,
    checkboxField: string
  ) => void
  onMainFieldCheckboxChange?: (
    e: CheckboxChangeEvent,
    key: number,
    checkboxField: string
  ) => void
}

export const RegistrationFields: FC<RegistrationFieldsProps> = ({
  title,
  description,
  fields,
  fieldTitle,
  customFieldTitle,
  customFields,
  visibleTitle,
  requiredTitle,
  onCustomFieldCheckboxChange,
  onMainFieldCheckboxChange,
}) => {
  return (
    <div className={styles.registrationWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.fieldTitleWrap}>
        <div className={styles.headTitle}>{fieldTitle}</div>
        <div className={styles.headTitle}>{visibleTitle}</div>
        <div className={styles.headTitle}>{requiredTitle}</div>
      </div>
      <div>
        {fields?.map((field) => (
          <div key={field.key} className={styles.fieldItemWrap}>
            <p>{field.fieldName}</p>
            <Checkbox
              checked={field.visible}
              disabled={field.disabled ?? false}
              onChange={(e) =>
                onMainFieldCheckboxChange?.(e, field.key, 'visible')
              }
            />
            <Checkbox
              checked={field.required}
              disabled={field.disabled ?? false}
              onChange={(e) =>
                onMainFieldCheckboxChange?.(e, field.key, 'required')
              }
            />
          </div>
        ))}
      </div>
      <div className={styles.customFieldTitleWrap}>
        <div className={styles.headTitle}>{customFieldTitle}</div>
        <div className={styles.headTitle}>{visibleTitle}</div>
        <div className={styles.headTitle}>{requiredTitle}</div>
      </div>
      <div>
        {customFields?.map((field) => (
          <div key={field.key} className={styles.fieldItemWrap}>
            <p>{field.fieldName}</p>
            <Checkbox
              checked={field.visible}
              disabled={field.disabled ?? false}
              onChange={(e) =>
                onCustomFieldCheckboxChange?.(e, field.key, 'visible')
              }
            />
            <Checkbox
              checked={field.required}
              disabled={field.disabled ?? false}
              onChange={(e) =>
                onCustomFieldCheckboxChange?.(e, field.key, 'required')
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RegistrationFields
