import React, { FC, useState, useEffect } from 'react'
import { Image, Popover } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import styles from './ClientLanguage.module.less'
import { ReactComponent as CircleCheck } from '../../assets/images/circle-check.svg'
import ENSVG from '../../assets/images/lang-logos/en.svg'
import FRSVG from '../../assets/images/lang-logos/french.svg'
import SPSVG from '../../assets/images/lang-logos/spanish.svg'
import ARSVG from '../../assets/images/lang-logos/arabic.svg'
import BRSVG from '../../assets/images/lang-logos/bulgarian.svg'
import CZSVG from '../../assets/images/lang-logos/czech.svg'
import HGSVG from '../../assets/images/lang-logos/hungarian.svg'
import LTSVG from '../../assets/images/lang-logos/latvian.svg'
import NWSVG from '../../assets/images/lang-logos/norwegian.svg'
import POSVG from '../../assets/images/lang-logos/polish.svg'
import SHSVG from '../../assets/images/lang-logos/spanish.svg'
import SWSVG from '../../assets/images/lang-logos/swedish.svg'
import ROMSVG from '../../assets/images/lang-logos/romanian.svg'
import RUSSVG from '../../assets/images/lang-logos/russian.svg'

const languageMenu: LangData[] = [
  {
    label: 'English',
    shortLabel: 'EN',
    logo: ENSVG,
    selected: false,
    default: false,
  },
  {
    label: 'French',
    shortLabel: 'FR',
    logo: FRSVG,
    selected: true,
    default: true,
  },
  {
    label: 'Spanish',
    shortLabel: 'SP',
    logo: SPSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Arabic',
    shortLabel: 'AR',
    logo: ARSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Bulgarian',
    shortLabel: 'BG',
    logo: BRSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Czech',
    shortLabel: 'CS',
    logo: CZSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Danish',
    shortLabel: 'DA',
    logo: FRSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Hungarian',
    shortLabel: 'HU',
    logo: HGSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Latvian',
    shortLabel: 'LV',
    logo: LTSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Norwegian',
    shortLabel: 'NO',
    logo: NWSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Polish',
    shortLabel: 'PL',
    logo: POSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Spannish',
    shortLabel: 'SH',
    logo: SHSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Swedish',
    shortLabel: 'SW',
    logo: SWSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Romanian',
    shortLabel: 'RO',
    logo: ROMSVG,
    selected: false,
    default: false,
  },
  {
    label: 'Russian',
    shortLabel: 'RU',
    logo: RUSSVG,
    selected: false,
    default: false,
  },
]

interface LangData {
  label: string
  shortLabel: string
  logo: string
  selected?: boolean
  default: boolean
}

interface P {
  childHook: [LangData[], React.Dispatch<React.SetStateAction<LangData[]>>]
}

const LanguagePop: FC<P> = ({
  childHook: [preferredLang, setPreferredLang],
}) => {
  const onClickLang = (index) => {
    const preferredLangTemp = [...preferredLang]
    if (
      !preferredLangTemp.find(
        (item) => item.shortLabel === languageMenu[index].shortLabel
      )
    ) {
      if (preferredLangTemp.length < 4) {
        languageMenu[index].selected = true
        preferredLangTemp.push({ ...languageMenu[index] })
      } else {
        // preferredLangTemp.pop()
        // preferredLangTemp.push({ ...languageMenu[index] })
      }
    }
    setPreferredLang([...preferredLangTemp])
  }
  return (
    <div className={styles.languagePop}>
      <span className={styles.popHeader}>Select language</span>
      {languageMenu.map((item, index) => (
        <div
          key={item.shortLabel}
          className={styles.languageItem}
          onClick={() => onClickLang(index)}
        >
          <div className={styles.languageLeft}>
            <Image
              src={item.logo}
              width={16}
              alt={item.label}
              preview={false}
            />
            <span
              className={
                preferredLang.some((e) => e.shortLabel === item.shortLabel)
                  ? styles.languageNameSelected
                  : styles.languageName
              }
            >
              {item.label}
            </span>
          </div>
          {preferredLang.some((e) => e.shortLabel === item.shortLabel) && (
            <CircleCheck />
          )}
        </div>
      ))}
    </div>
  )
}

interface ClientLanguageProps {
  selectLanguageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  defaultLanguage: string
}

const defaultLan = (defaultLanguage: string): LangData => {
  let result = defaultLanguage
    ? languageMenu.find((item) => defaultLanguage === item.shortLabel)
    : null
  if (!result) {
    result = languageMenu.find((item) => item.default === true) as LangData
  }
  return result
}

function isDefault(item: LangData, defaultLanguage: string): boolean {
  if (defaultLanguage) {
    return item.shortLabel === defaultLanguage
  }
  return item.default
}

export const ClientLanguage: FC<ClientLanguageProps> = ({
  selectLanguageHook: [selectLanguage, setSelectLanguage],
  defaultLanguage,
}) => {
  const [preferredLang, setPreferredLang] = useState<LangData[]>([])

  // useEffect(() => {
  //   const defLang = languageMenu.find((item) => defaultLanguage ? item.shortLabel === defaultLanguage : item.selected === true)
  //   if (defLang !== undefined) {
  //     setPreferredLang([defLang])
  //   }
  // }, [])

  const deletePreferredLang = (index) => {
    // if (preferredLang[index].selected === false || preferredLang[index].selected === undefined) {
    // 	preferredLang.splice(index, 1)
    // 	setPreferredLang([...preferredLang])
    // }
    preferredLang[index].selected = false

    preferredLang.splice(index, 1)
    setPreferredLang([...preferredLang])
  }

  useEffect(() => {
    setPreferredLang([defaultLan(defaultLanguage)])
  }, [defaultLanguage])

  return (
    <div className={styles.container}>
      <div className={styles.languageWrap}>
        {preferredLang &&
          preferredLang.map((item, index) => {
            return (
              <div
                key={item.label}
                className={styles.preferredLanguage}
                onClick={() => setSelectLanguage(item.shortLabel)}
              >
                <Image
                  key={item.label}
                  preview={false}
                  width={26}
                  src={item.logo}
                  alt={item.label}
                />
                <span className={styles.languageName}>{item.shortLabel}</span>
                {!isDefault(item, defaultLanguage) && (
                  <CloseOutlined
                    className={styles.closeBadge}
                    onClick={() => deletePreferredLang(index)}
                  />
                )}
              </div>
            )
          })}
      </div>
      <div className={styles.popover}>
        <Popover
          content={
            <LanguagePop childHook={[preferredLang, setPreferredLang]} />
          }
          placement="topLeft"
          trigger="click"
        >
          <PlusOutlined className={styles.popButton} />
        </Popover>
      </div>
    </div>
  )
}

export default ClientLanguage
