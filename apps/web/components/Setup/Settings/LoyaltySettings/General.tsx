import React, { FC } from 'react'
import { SimpleDropdown, InputNumber, HelpTooltip } from '@pabau/ui'
import styles from './common.module.less'
import { FormikErrors } from 'formik'

interface P {
  generalObj: GeneralLoyaltyConfig
  values: LoyaltyObjProp
  setFieldValue: (field: string, value: string) => void
  errors: FormikErrors<LoyaltyObjProp>
}

const General: FC<P> = ({
  generalObj: { dropdownList, inputPoint },
  values,
  setFieldValue,
  errors,
}) => {
  return (
    <div className={styles.loyaltyGeneralContainer}>
      <div className={styles.generalLabel}>
        <div className={styles.loyaltyText}>
          <span>
            <span>{inputPoint.label}</span>
            <HelpTooltip helpText={inputPoint.helpText} />
          </span>
          <span>{inputPoint.pointText}</span>
        </div>
        <InputNumber
          value={values.inputPoint}
          onChange={(val) => setFieldValue('inputPoint', val)}
          showCurrency={true}
          requiredMsg={errors.inputPoint}
        />
      </div>
      <div className={styles.generalDropdownList}>
        <SimpleDropdown
          label={dropdownList.label}
          tooltip={dropdownList.helpText}
          value={values.showOnReceipt}
          dropdownItems={dropdownList.options}
          onSelected={(val) => setFieldValue('showOnReceipt', val)}
        />
      </div>
    </div>
  )
}

export default General
