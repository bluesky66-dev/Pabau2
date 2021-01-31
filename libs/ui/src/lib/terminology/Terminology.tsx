import React, { FC, useState, useEffect } from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { Input } from '@pabau/ui'
import styles from './Terminology.module.less'

interface TerminologyConfigItem {
  key: string
  value: string
}

interface TerminologyConfig {
  title: string
  items: TerminologyConfigItem[]
}

export interface TerminologyProps {
  config?: TerminologyConfig[]
  optIns?: TerminologyConfig[]
  onSave?(val): void
}

const defaultConfig = [
  {
    title: 'What do you call people who attend appointments with you?',
    items: [
      {
        key: 'Singular',
        value: 'Patient',
      },
      {
        key: 'Plural',
        value: 'Patients',
      },
    ],
  },
  {
    title: 'What do you call bookings with multiple attendees?',
    items: [
      {
        key: 'Singular',
        value: 'Class',
      },
      {
        key: 'Plural',
        value: 'Classes',
      },
    ],
  },
  {
    title: 'What do you call employees who perform services?',
    items: [
      {
        key: 'Singular',
        value: 'Employee',
      },
      {
        key: 'Plural',
        value: 'Employees',
      },
    ],
  },
  {
    title: 'What do you call people who perform classes?',
    items: [
      {
        key: 'Singular',
        value: 'Teacher',
      },
      {
        key: 'Plural',
        value: 'Teachers',
      },
    ],
  },
  {
    title: 'What do you call TAX?',
    items: [
      {
        key: 'Singular',
        value: 'VAT',
      },
    ],
  },
]

const defaultOptIns = [
  {
    title: 'For Clients',
    items: [
      {
        key: 'Postal',
        value: 'Whould you like to receive postal communications?',
      },
      {
        key: 'SMS',
        value: 'Whould you like to receive SMS messages from us?',
      },
      {
        key: 'Email',
        value: 'Whould you like to receive email communications?',
      },
      {
        key: 'Phone',
        value: 'Whould you like to receive phone calls?',
      },
    ],
  },
  {
    title: 'For Leads',
    items: [
      {
        key: 'Postal',
        value: 'Whould you like to receive postal communications?',
      },
      {
        key: 'SMS',
        value: 'Whould you like to receive SMS messages from us?',
      },
      {
        key: 'Email',
        value: 'Whould you like to receive email communications?',
      },
      {
        key: 'Phone',
        value: 'Whould you like to receive phone calls?',
      },
    ],
  },
]

export const Terminology: FC<TerminologyProps> = ({
  config,
  optIns,
  onSave,
}) => {
  const [_config, setConfig] = useState(defaultConfig)
  const [_optIns, setOptIns] = useState(defaultOptIns)
  const handleConfigItemChange = ({ index, itemIndex, val }) => {
    const configItems = [..._config]
    configItems[index].items[itemIndex].value = val
    setConfig(configItems)
  }
  const handleOptInsItemChange = ({ index, itemIndex, val }) => {
    const OptInsItems = [..._optIns]
    OptInsItems[index].items[itemIndex].value = val
    setOptIns(OptInsItems)
  }
  const handleSaveChanges = () => {
    onSave &&
      onSave({
        config: _config,
        optIns: _optIns,
      })
  }

  useEffect(() => {
    setConfig(config ? config : defaultConfig)
    setOptIns(optIns ? optIns : defaultOptIns)
  }, [config, optIns])

  return (
    <div className={styles.terminologyContainer}>
      <div className={styles.terminologySubContainer}>
        <div className={styles.terminologyHeaderContainer}>
          <div>
            <p className={styles.tabTitle}>Terminology</p>
            <p className={styles.tabSubTitle} style={{ maxWidth: '420px' }}>
              Every business is different, and that`s why here we allow you to
              customize how you name certain features here within Pabau
            </p>
          </div>
          <Button type="primary" onClick={() => handleSaveChanges()}>
            Save Changes
          </Button>
        </div>
      </div>
      <Divider />
      {Array.isArray(_config) &&
        _config.length > 0 &&
        _config.map((configItem, index) => (
          <div className={styles.configItem} key={configItem.title}>
            <div className={styles.terminologySubContainer}>
              <p className={styles.configSubTitle}>{configItem.title}</p>
              <Row gutter={[32, 28]}>
                {configItem.items.map((item, itemIndex) => (
                  <Col className="gutter-row" xs={24} sm={12} key={item.key}>
                    <Input
                      text={item.value}
                      label={item.key}
                      onChange={(val) =>
                        handleConfigItemChange({ index, itemIndex, val })
                      }
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <Divider />
          </div>
        ))}
      <p className={styles.configTitle}>Opt Ins</p>
      {Array.isArray(_optIns) &&
        _optIns.length > 0 &&
        _optIns.map((optInsItem, index) => (
          <div className={styles.configItem} key={optInsItem.title}>
            <div className={styles.terminologySubContainer}>
              <p className={styles.configSubTitle}>{optInsItem.title}</p>
              <Row gutter={[32, 28]}>
                {optInsItem.items.map((item, itemIndex) => (
                  <Col className="gutter-row" xs={24} sm={12} key={item.key}>
                    <Input
                      text={item.value}
                      label={item.key}
                      onChange={(val) =>
                        handleOptInsItemChange({ index, itemIndex, val })
                      }
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <Divider />
          </div>
        ))}
    </div>
  )
}

export default Terminology
