import React, { FC } from 'react'

import styles from './FeaturePermission.module.less'
import { PermissionFieldType } from '../permission/Permission'
import FeatureAccordion from './FeatureAccordion'
import Permission from '../permission/Permission'

export interface FeaturePermissionProps {
  id: string
  title: string
  subtitle: string
  permissionFields: PermissionFieldType[]
}

export interface FeatureProps {
  feature: FeaturePermissionProps[]
  onChange?: (index: number, ind: number, rowId?: string) => void
  CheckAll?: (rowId?: string) => void
  UnCheckAll?: (rowId?: string) => void
}

export const FeaturePermission: FC<FeatureProps> = ({
  feature,
  onChange,
  CheckAll,
  UnCheckAll,
}) => {
  return (
    <div className={styles.featureWrapper}>
      {feature?.length > 0 &&
        feature.map((feature) => {
          return (
            <FeatureAccordion
              key={feature.id}
              headerLabel={feature.title}
              subTitle={feature.subtitle}
            >
              <div className={styles.permissionWrapper}>
                <Permission
                  fields={feature.permissionFields}
                  onChange={onChange}
                  CheckAll={CheckAll}
                  UnCheckAll={UnCheckAll}
                  rowId={feature.id}
                />
              </div>
            </FeatureAccordion>
          )
        })}
    </div>
  )
}

export default FeaturePermission
