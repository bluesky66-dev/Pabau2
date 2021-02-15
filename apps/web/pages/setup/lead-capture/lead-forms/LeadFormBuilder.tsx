import React, { useState } from 'react'
import { Row, Select } from 'antd'
import { ColorPicker, RegistrationFields, FieldType } from '@pabau/ui'
import styles from './Lead-forms.module.less'
import classNames from 'classnames'

const { Option } = Select

const fields: FieldType[] = [
  {
    key: 1,
    fieldName: 'First Name',
    visible: true,
    required: true,
    disabled: true,
  },
  {
    key: 2,
    fieldName: 'Last Name',
    visible: true,
    required: true,
    disabled: true,
  },
  {
    fieldName: 'Date of Birth',
    visible: false,
    required: false,
    disabled: false,
    key: 3,
  },
  {
    key: 4,
    fieldName: 'Telephone',
    visible: false,
    required: false,
    disabled: false,
  },
  {
    key: 5,
    fieldName: 'Email',
    visible: false,
    required: false,
    disabled: false,
  },
  {
    key: 6,
    fieldName: 'City',
    visible: false,
    required: false,
    disabled: false,
  },
  {
    key: 7,
    fieldName: 'I low did you hear about us',
    visible: false,
    required: false,
    disabled: false,
  },
  {
    key: 8,
    fieldName: 'Message',
    visible: false,
    required: false,
    disabled: false,
  },
]
export const LeadFormBuilder: React.FC = () => {
  const [mainFields, setMainFields] = useState<FieldType[]>(fields)
  const [customField, setCustomField] = useState<FieldType[]>([])

  const onChange = (mainField: FieldType[], customField: FieldType[]) => {
    console.log('changed', mainField, customField)
  }

  const onMainFieldCheckboxChange = (e, key: number, checkboxField: string) => {
    const records = [...mainFields]
    records.map((record) => {
      if (record.key === key) {
        record[checkboxField] = e.target.checked
      }
      return record
    })
    setMainFields([...records])
    onChange?.(mainFields, customField)
  }

  const onCustomFieldCheckboxChange = (
    e,
    key: number,
    checkboxField: string
  ) => {
    const records = [...customField]
    records.map((record) => {
      if (record.key === key) {
        record[checkboxField] = e.target.checked
      }
      return record
    })
    setCustomField([...records])
    onChange?.(mainFields, customField)
  }

  return (
    <>
      <Row className={classNames(styles.headerStyle, styles.mobileViewNone)}>
        <div>BUILDER</div>
      </Row>
      <Row>
        <div className={styles.builderBox}>
          <div className={styles.builderHeadingText}>
            <h1> Apperance</h1>
            <p>
              Your business name is displayed across many areas including on
              your online booking profile, sales invoices and massages to
              clients
            </p>
          </div>
          <div className={styles.builderHeadingText}>
            <h1> Fount colour </h1>
          </div>
          <div className={styles.colorPickerDiv}>
            <ColorPicker
              selectedColor={''}
              onSelected={(val) => val}
              heading={''}
            />
          </div>
          <div className={styles.secFontColor}>
            <h1>Fount colour</h1>
          </div>
          <div className={styles.colorPickerDiv}>
            <ColorPicker
              selectedColor={''}
              onSelected={(val) => val}
              heading={''}
            />
          </div>
          <div className={styles.photoUploadText}>
            <h1>Enable photo upload</h1>
          </div>
          <Select defaultValue="24" style={{ width: '100%' }}>
            <Option value="24">24 hours</Option>
            <Option value="12">12 hours</Option>
            <Option value="6">6 hours</Option>
          </Select>
        </div>
        <div className={styles.builderBorderBottom}></div>
        <div className={styles.builderBox}>
          <div className={styles.builderHeadingText}>
            <h1>Fields</h1>
            <p></p>
          </div>
          <RegistrationFields
            fields={mainFields}
            description={
              'Your business name is displayed across many areas including on your online booking profile? sales invoices and messages to clients.'
            }
            requiredTitle={'Required'}
            fieldTitle={'Field Name'}
            visibleTitle={'Visible'}
            onCustomFieldCheckboxChange={onCustomFieldCheckboxChange}
            onMainFieldCheckboxChange={onMainFieldCheckboxChange}
          />
        </div>
      </Row>
    </>
  )
}

export default LeadFormBuilder
