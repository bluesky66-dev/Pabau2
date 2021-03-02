import React, { FC, useState, useEffect, ReactNode } from 'react'
import { Row, Col } from 'antd'
import { Button, BasicModal as LibraryInstallerModal } from '@pabau/ui'
import { CheckCircleFilled } from '@ant-design/icons'
import { ReactComponent as Consent } from '../../assets/images/form-type/consent.svg'
import { ReactComponent as EPaper } from '../../assets/images/form-type/file-pdf.svg'
import { ReactComponent as LabForm } from '../../assets/images/form-type/lab-form.svg'
import { ReactComponent as MedicalHistory } from '../../assets/images/form-type/medical-history.svg'
import { ReactComponent as Presciption } from '../../assets/images/form-type/presciption.svg'
import { ReactComponent as Treatment } from '../../assets/images/form-type/treatment.svg'
import styles from './LibraryModal.module.less'

interface DefaultBundleType {
  [key: string]: {
    selected: boolean
    title: string
    icon: ReactNode
  }
}

const defaultBundleTypes: DefaultBundleType = {
  ConsentForm: {
    selected: false,
    title: 'Consent Form',
    icon: <MedicalHistory />,
  },
  MedicalForm: {
    selected: false,
    title: 'Medical Form',
    icon: <Consent />,
  },
  TreatmentForm: {
    selected: false,
    title: 'Treatment Form',
    icon: <Treatment />,
  },
  PrescriptionForm: {
    selected: false,
    title: 'Prescription Form',
    icon: <EPaper />,
  },
  Service: {
    selected: false,
    title: 'Service',
    icon: <Presciption />,
  },
  ServiceImage: {
    selected: false,
    title: 'Service Image',
    icon: <LabForm />,
  },
  ProductImage: {
    selected: false,
    title: 'Product Image',
    icon: <LabForm />,
  },
  Care: {
    selected: false,
    title: 'Care',
    icon: <LabForm />,
  },
  Stencil: {
    selected: false,
    title: 'Stencil',
    icon: <LabForm />,
  },
  Drugs: {
    selected: false,
    title: 'Drugs',
    icon: <LabForm />,
  },
  Contraindication: {
    selected: false,
    title: 'Contraindication',
    icon: <LabForm />,
  },
}

interface BType {
  title: string
  bundleType: string
}

export interface LibraryModalProps {
  image?: string
  title: string
  subTitle: string
  visible: boolean
  bundleTypes?: BType[]
  onClose?: () => void
  onInstall?: () => void
}

export const LibraryModal: FC<LibraryModalProps> = ({
  image,
  title,
  subTitle,
  visible,
  bundleTypes = [],
  onClose,
  onInstall,
  ...rest
}) => {
  const aligns = [
    styles.paddingRight,
    styles.paddingCenter,
    styles.paddingCenter,
    styles.paddingLeft,
  ]
  const [bundleTypesObject, setBundleTypes] = useState<DefaultBundleType>(
    defaultBundleTypes
  )
  const [selected, setSelected] = useState(0)

  const handleClickItem = (type) => {
    const bundles = { ...bundleTypesObject }
    bundles[type].selected = !bundles[type].selected
    setBundleTypes({ ...bundles })
    const selected = Object.keys(bundles).filter((el) => bundles[el].selected)
    setSelected(selected?.length)
  }

  useEffect(() => {
    const bundles = { ...defaultBundleTypes }
    const propsBundles = {}
    for (const key of bundleTypes) {
      propsBundles[key.bundleType] = { ...bundles[key.bundleType], ...key }
    }
    setBundleTypes({ ...propsBundles })
  }, [bundleTypes])

  return (
    <div className={styles.mainLibraryInstallerModal}>
      <LibraryInstallerModal
        className={styles.mainLibraryInstallerModal}
        title={title}
        visible={visible}
        modalWidth={600}
        onCancel={() => onClose?.()}
      >
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.image}>
          <div style={{ backgroundImage: `url(${image})` }}></div>
        </div>
        <div>
          <Row>
            {Object.keys(bundleTypesObject).map((key, index) => (
              <Col key={key} span={6} className={aligns[index % 4]}>
                <div className={styles.bundleTypeDiv}>
                  {bundleTypesObject[key].selected && (
                    <CheckCircleFilled className={styles.bundleTypeChecked} />
                  )}
                  <div
                    className={
                      bundleTypesObject[key].selected
                        ? styles.bundleTypeSelected
                        : ''
                    }
                  >
                    <Button
                      className={styles.bundleTypeButton}
                      onClick={() => handleClickItem(key)}
                    >
                      {bundleTypesObject[key].icon}
                    </Button>
                    <p className={styles.formTypeLabel}>
                      {bundleTypesObject[key].title}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.footer}>
          <Button type="default" size="large" onClick={() => onClose?.()}>
            Cancel
          </Button>
          <Button type="primary" size="large">
            Install
            {selected > 0 && (
              <span className={styles.bundlesCount}>{selected}</span>
            )}
          </Button>
        </div>
      </LibraryInstallerModal>
    </div>
  )
}

export default LibraryModal
