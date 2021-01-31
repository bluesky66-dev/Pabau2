import React, { FC, useState, useEffect } from 'react'
import { Select, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { languageMenu } from '../../assets/images/lang-logos'
import styles from './LanguageDropdown.module.less'

export interface LanguageDropdownProps extends FormProps {
  label?: string
  tooltip?: string
  value?: string
  size?: SizeType
  onSelected?(val): void
}

export const LanguageDropdown: FC<LanguageDropdownProps> = ({
  label,
  tooltip,
  value,
  size = 'middle',
  onSelected,
  ...props
}) => {
  const [form] = Form.useForm()
  const [selected, setSelected] = useState('English')
  const handleClickSelect = (e) => {
    const text = e.target.innerText.replaceAll(' ', '')
    setSelected(text)
    onSelected && onSelected(text)
  }
  useEffect(() => {
    if (value) {
      setSelected(value)
    } else {
      setSelected('English')
    }
  }, [value, label, tooltip])
  return (
    <div className={styles.languageDropdownContainer}>
      <Form form={form} layout="vertical" {...props}>
        <Form.Item label={label ? label : ''} tooltip={tooltip ? tooltip : ''}>
          <Select
            value={selected}
            onClick={(e) => handleClickSelect(e)}
            size={size}
          >
            {languageMenu.map((lang, index) => (
              <Select.Option key={index} value={lang.label}>
                <img
                  alt={lang.label}
                  src={lang.logo}
                  style={{ width: '18px', marginBottom: '2px' }}
                />{' '}
                {lang.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}
export default LanguageDropdown
