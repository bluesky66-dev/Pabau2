import React from 'react'
import { Row, Select } from 'antd'
import { ColorPicker, RegistrationFields, FieldType } from '@pabau/ui'
import styles from './Lead-forms.module.less'
import classNames from 'classnames'

const { Option } = Select

interface colors {
  fontColor: string
  buttonColor: string
}
interface LeadFormBuilderInterface {
  fields: FieldType[]
  colours: colors
  onChange?: (mainField: FieldType[]) => void
  onColorChange: (fontColor: string, buttonColor: string) => void
}

export const LeadFormBuilder: React.FC<LeadFormBuilderInterface> = ({
  fields,
  colours,
  onChange,
  onColorChange,
}) => {
  const onMainFieldCheckboxChange = (e, key: number, checkboxField: string) => {
    onChange?.(
      fields.map((record) => {
        if (record.key === key) {
          record[checkboxField] = e.target.checked
        }
        return record
      })
    )
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
            <h1> Font colour </h1>
          </div>
          <div className={styles.colorPickerDiv}>
            <ColorPicker
              selectedColor={colours.fontColor}
              onSelected={(val) => onColorChange(val, colours.buttonColor)}
              heading={''}
            />
          </div>
          <div className={styles.secFontColor}>
            <h1>Button colour</h1>
          </div>
          <div className={styles.colorPickerDiv}>
            <ColorPicker
              selectedColor={colours.buttonColor}
              onSelected={(val) => onColorChange(colours.fontColor, val)}
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
            fields={fields}
            description={
              'Your business name is displayed across many areas including on your online booking profile? sales invoices and messages to clients.'
            }
            requiredTitle={'Required'}
            fieldTitle={'Field Name'}
            visibleTitle={'Visible'}
            // onCustomFieldCheckboxChange={onCustomFieldCheckboxChange}
            onMainFieldCheckboxChange={onMainFieldCheckboxChange}
          />
        </div>
      </Row>
    </>
  )
}

export default LeadFormBuilder
