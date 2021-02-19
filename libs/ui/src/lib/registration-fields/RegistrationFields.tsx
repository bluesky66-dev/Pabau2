import React, { FC, ReactNode } from 'react'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import styles from './RegistrationFields.module.less'

export interface FieldType {
  fieldName: string
  label: string
  visible: boolean
  required: boolean
  disabled?: boolean
  key: number
}
export interface RegistrationFieldsProps {
  icon?: ReactNode
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
  icon,
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
      <div className={styles.title}>
        <div>{icon && icon}</div>
        <span>{title}</span>
      </div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.fieldTitleWrap}>
        <div className={styles.headTitle}>{fieldTitle}</div>
        <div className={styles.headTitle}>{visibleTitle}</div>
        <div className={styles.headTitle}>{requiredTitle}</div>
      </div>
      <div>
        {fields?.map((field) => (
          <div key={field.key} className={styles.fieldItemWrap}>
            <p>{field.label}</p>
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
      {customFields?.length && (
        <div className={styles.customFieldTitleWrap}>
          <div className={styles.headTitle}>{customFieldTitle}</div>
          <div className={styles.headTitle}>{visibleTitle}</div>
          <div className={styles.headTitle}>{requiredTitle}</div>
        </div>
      )}
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
