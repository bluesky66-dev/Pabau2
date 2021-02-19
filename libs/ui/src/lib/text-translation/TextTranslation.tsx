import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './TextTranslation.module.less'

export const TextTranslation: FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.contentWrapper}>
      <h3 className={styles.title}>Title: - {t('marketingsource-title')}</h3>
      <p className={styles.desc}>Description: - {t('james-testing-2')}</p>
    </div>
  )
}

export default TextTranslation
