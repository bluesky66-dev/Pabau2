import React, { FC } from 'react'
import { Button } from '@pabau/ui'
import styles from '../../pages/client-notifications/style.module.less'
import { getFlag } from '../../mocks/utils'

interface p {
  backGroundColor?: string
  selectLanguage?: string
}

const CustomTemplate: FC<p> = ({ backGroundColor, selectLanguage }) => {
  return (
    <div
      className={styles.cardAddTemplateContainer}
      style={{ backgroundColor: backGroundColor }}
    >
      <Button type="default" className={styles.addTemplateTxt}>
        <img src={getFlag(selectLanguage)} alt="" />
        &nbsp;+ Add Template
      </Button>
    </div>
  )
}

export default CustomTemplate
