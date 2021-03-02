import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './TextTranslation.module.less'

/* eslint-disable-next-line */
export interface TextTranslationProps {
  language?: string
}

export const TextTranslation: FC<TextTranslationProps> = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.language}>language:-</h1>
      <h3 className={styles.title}>Title: - {t('welcome.title')}</h3>
      <p className={styles.desc}>Desciption: - {t('welcome.desc')}</p>
    </div>
  )
}

export default TextTranslation
