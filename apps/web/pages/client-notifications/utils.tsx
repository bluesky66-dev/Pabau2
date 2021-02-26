import ENSVG from '../../../../libs/ui/src/assets/images/lang-logos/en.svg'
import FRSVG from '../../../../libs/ui/src/assets/images/lang-logos/french.svg'
import SPSVG from '../../../../libs/ui/src/assets/images/lang-logos/spanish.svg'
import ARSVG from '../../../../libs/ui/src/assets/images/lang-logos/arabic.svg'
import BGSVG from '../../../../libs/ui/src/assets/images/lang-logos/bulgarian.svg'
import CSSVG from '../../../../libs/ui/src/assets/images/lang-logos/czech.svg'
import DASVG from '../../../../libs/ui/src/assets/images/lang-logos/dutch.svg'
import HUSVG from '../../../../libs/ui/src/assets/images/lang-logos/hungarian.svg'
import LVSVG from '../../../../libs/ui/src/assets/images/lang-logos/latvian.svg'
import NOSVG from '../../../../libs/ui/src/assets/images/lang-logos/norwegian.svg'
import PLSVG from '../../../../libs/ui/src/assets/images/lang-logos/polish.svg'
import SWSVG from '../../../../libs/ui/src/assets/images/lang-logos/swedish.svg'
import ROSVG from '../../../../libs/ui/src/assets/images/lang-logos/romanian.svg'
import RUSVG from '../../../../libs/ui/src/assets/images/lang-logos/russian.svg'

export const getFlag = (country) => {
  switch (country) {
    case 'EN':
      return ENSVG
    case 'FR':
      return FRSVG
    case 'SP':
      return SPSVG
    case 'AR':
      return ARSVG
    case 'BG':
      return BGSVG
    case 'CS':
      return CSSVG
    case 'DA':
      return DASVG
    case 'HU':
      return HUSVG
    case 'LV':
      return LVSVG
    case 'NO':
      return NOSVG
    case 'PL':
      return PLSVG
    case 'SW':
      return SWSVG
    case 'RO':
      return ROSVG
    case 'RU':
      return RUSVG
  }
}

export default getFlag
