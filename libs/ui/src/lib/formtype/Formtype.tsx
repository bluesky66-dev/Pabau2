import { Button, Col, Row, Tooltip } from 'antd'
import React, { FC } from 'react'
import consentIcon from '../../assets/images/consent.png'
import epaperIcon from '../../assets/images/epaper.png'
import labFormIcon from '../../assets/images/lab-form.png'
import medicalHistoryIcon from '../../assets/images/medical-history.png'
import presciptionIcon from '../../assets/images/presciption.png'
import treatmentIcon from '../../assets/images/treatment.png'
import styles from './Formtype.module.less'

/* eslint-disable-next-line */
interface FormtypeProps {}
const Formtype: FC<FormtypeProps> = () => {
  const formTypeInfos = [
    {
      index: 1,
      label: 'Medical History',
      desc:
        'A medical history form can be completed and updated multiple times, whilst retaining any previously completed information     ',
      icon: medicalHistoryIcon,
    },
    {
      index: 2,
      label: 'Consent',
      desc: 'A consent form requires a signature as part of the care pathway',
      icon: consentIcon,
    },
    {
      index: 3,
      label: 'Treatment Form',
      desc: 'A treatment form is usually completed at the end of a pathway',
      icon: treatmentIcon,
    },
    {
      index: 4,
      label: 'ePaper',
      desc:
        'ePaper allows you to either scan in a document or upload a PDF to draw directly onto the screen using a stylus or apple pencil',
      icon: epaperIcon,
    },
    {
      index: 5,
      label: 'Presciption',
      desc: 'Presciption',
      icon: presciptionIcon,
    },
    {
      index: 6,
      label: 'Lab Form',
      desc: 'Lab Form',
      icon: labFormIcon,
    },
  ]

  return (
    <Row>
      {formTypeInfos.map(({ label, desc, icon, index }) => (
        <Col key={index} span={8}>
          <div className={styles.formTypeDiv}>
            <Row>
              <Tooltip placement="topLeft" title={desc}>
                <Button className={styles.formTypeButton}>
                  <img src={icon} alt="" />
                </Button>
                <p className={styles.formTypeLabel}>{label}</p>
              </Tooltip>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Formtype
