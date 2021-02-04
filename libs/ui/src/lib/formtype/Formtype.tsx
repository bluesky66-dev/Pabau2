import { CheckCircleFilled } from '@ant-design/icons'
import { Button, Col, Row, Tooltip } from 'antd'
import React, { FC, ReactNode, useState, useEffect } from 'react'
import { ReactComponent as MedicalHistory } from '../../assets/images/form-type/medical-history.svg'
import { ReactComponent as MedicalHistorySelected } from '../../assets/images/form-type/medical-history-selected.svg'
import { ReactComponent as Consent } from '../../assets/images/form-type/consent.svg'
import { ReactComponent as ConsentSelected } from '../../assets/images/form-type/consent-selected.svg'
import { ReactComponent as Treatment } from '../../assets/images/form-type/treatment.svg'
import { ReactComponent as TreatmentSelected } from '../../assets/images/form-type/treatment-selected.svg'
import { ReactComponent as EPaper } from '../../assets/images/form-type/file-pdf.svg'
import { ReactComponent as EPaperSelected } from '../../assets/images/form-type/file-pdf-selected.svg'
import { ReactComponent as Presciption } from '../../assets/images/form-type/presciption.svg'
import { ReactComponent as PresciptionSelected } from '../../assets/images/form-type/presciption-selected.svg'
import { ReactComponent as LabForm } from '../../assets/images/form-type/lab-form.svg'
import { ReactComponent as LabFormSelected } from '../../assets/images/form-type/lab-form-selected.svg'
import styles from './Formtype.module.less'

interface Setting {
  medicalHistory: boolean
  consent: boolean
  treatmentForm: boolean
  epaper: boolean
  presciption: boolean
  labForm: boolean
}
export interface FormtypeProps {
  setting: Setting
  onChangeSetting(val): void
}

interface FormTypeInfo {
  [key: string]: {
    label: string
    selected: boolean
    desc: string
    icon: ReactNode
    iconSelected: ReactNode
  }
}

const defaultTypeInfos: FormTypeInfo = {
  medicalHistory: {
    label: 'Medical History',
    selected: false,
    desc:
      'A medical history form can be completed and updated multiple times, whilst retaining any previously completed information     ',
    icon: <MedicalHistory />,
    iconSelected: <MedicalHistorySelected />,
  },
  consent: {
    label: 'Consent',
    selected: false,
    desc: 'A consent form requires a signature as part of the care pathway',
    icon: <Consent />,
    iconSelected: <ConsentSelected />,
  },
  treatmentForm: {
    label: 'Treatment Form',
    selected: false,
    desc: 'A treatment form is usually completed at the end of a pathway',
    icon: <Treatment />,
    iconSelected: <TreatmentSelected />,
  },
  epaper: {
    label: 'ePaper',
    selected: false,
    desc:
      'ePaper allows you to either scan in a document or upload a PDF to draw directly onto the screen using a stylus or apple pencil',
    icon: <EPaper />,
    iconSelected: <EPaperSelected />,
  },
  presciption: {
    label: 'Presciption',
    selected: false,
    desc: 'Presciption',
    icon: <Presciption />,
    iconSelected: <PresciptionSelected />,
  },
  labForm: {
    label: 'Lab Form',
    selected: false,
    desc: 'Lab Form',
    icon: <LabForm />,
    iconSelected: <LabFormSelected />,
  },
}

export const Formtype: FC<FormtypeProps> = ({ setting, onChangeSetting }) => {
  const aligns = [
    styles.formTypeStart,
    styles.formTypeCenter,
    styles.formTypeEnd,
  ]
  const [formTypeInfo, setFormTypesInfo] = useState<FormTypeInfo>(
    defaultTypeInfos
  )
  const handleClickItem = (name) => {
    const typeInfo = { ...formTypeInfo }
    typeInfo[name].selected = !typeInfo[name].selected
    setFormTypesInfo({ ...typeInfo })
    onChangeSetting({
      medicalHistory: typeInfo.medicalHistory.selected,
      consent: typeInfo.consent.selected,
      treatmentForm: typeInfo.treatmentForm.selected,
      epaper: typeInfo.epaper.selected,
      presciption: typeInfo.presciption.selected,
      labForm: typeInfo.labForm.selected,
    })
  }
  useEffect(() => {
    const typeInfo = { ...defaultTypeInfos }
    Object.keys(setting).forEach((key) => {
      typeInfo[key].selected = setting[key]
    })
    setFormTypesInfo({ ...typeInfo })
  }, [setting])
  return (
    <div className={styles.formTypeContainer}>
      <Row>
        {Object.keys(formTypeInfo).map((key, index) => (
          <Col key={key} span={8} className={aligns[index % 3]}>
            <div className={styles.formTypeDiv}>
              {formTypeInfo[key].selected && (
                <CheckCircleFilled className={styles.formTypeChecked} />
              )}
              <Tooltip placement="topLeft" title={formTypeInfo[key].desc}>
                <div
                  className={
                    formTypeInfo[key].selected ? styles.formTypeSelected : ''
                  }
                >
                  <Button
                    className={styles.formTypeButton}
                    onClick={() => handleClickItem(key)}
                  >
                    {formTypeInfo[key].selected
                      ? formTypeInfo[key].iconSelected
                      : formTypeInfo[key].icon}
                  </Button>
                  <p className={styles.formTypeLabel}>
                    {formTypeInfo[key].label}
                  </p>
                </div>
              </Tooltip>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Formtype
