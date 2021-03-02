import React, { FC } from 'react'
import { EmailSmsPreview, GiftVoucher } from '@pabau/ui'
import CustomTemplate from '../CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  showService?: boolean
  showEmployeeName?: boolean
  informationMessage?: string
  type?: string
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
}

const langData: LangData = {
  en: {
    greeting: 'Congratulations Sophia,you have received a Gift Voucher',
  },
  sp: {
    greeting: 'Felicitaciones Sophia, has recibido un vale de regalo',
  },
  fr: {
    greeting: 'Félicitations Sophia, vous avez reçu un chèque cadeau',
  },
  ru: {
    greeting: 'Поздравляем Софию с подарочным сертификатом.',
  },
  ar: {
    greeting: 'تهانينا صوفيا ، لقد تلقيت قسيمة هدايا',
  },
  bg: {
    greeting: 'Поздравления, София, получихте ваучер за подарък',
  },
  cs: {
    greeting: 'Gratulujeme Sophii, obdržela jsi dárkový poukaz',
  },
  da: {
    greeting: 'Tillykke Sophia, du har modtaget en gavekort',
  },
  hu: {
    greeting: 'Gratulálunk Sophiának, ajándékutalványt kapott',
  },
  lv: {
    greeting: 'Apsveicam Sofiju, jūs esat saņēmis dāvanu kuponu',
  },
  no: {
    greeting: 'Gratulerer Sophia, du har mottatt en gavekort',
  },
  pl: {
    greeting: 'Gratulacje Sophia, otrzymałeś bon upominkowy',
  },
  sw: {
    greeting: 'Grattis Sophia, du har fått en presentkupong',
  },
  ro: {
    greeting: 'Felicitări Sophia, ai primit un voucher cadou',
  },
}

const GiftVoucherPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  buttonColor,
  informationMessage,
}) => {
  const [selectLangData, setSelectLangData] = React.useState<Data>(
    langData['en']
  )
  React.useEffect(() => {
    if (langData[`${selectLanguage.toLowerCase()}`]) {
      setSelectLangData({ ...langData[`${selectLanguage.toLowerCase()}`] })
    }
  }, [selectLanguage])

  return (
    <div>
      {standardTapIndex === '1' ? (
        <EmailSmsPreview
          greeting={selectLangData.greeting}
          footerIconGroup={true}
          previewButtonGroup={false}
          previewCustomStatus={'email'}
          activeSocialIcons={activeSocialIcons}
          backGroundColor={backGroundColor}
          isFooterText={true}
          footerText={informationMessage}
          footer={true}
          isGiftVoucher={true}
          displayContactMessage={false}
          footerContact={true}
          contactInfoNumber={'+44 000 987 507'}
          contactEmail={'info@theclinic.com'}
        >
          <GiftVoucher buttonColor={buttonColor} displayViewButton={true} />
        </EmailSmsPreview>
      ) : (
        <CustomTemplate
          backGroundColor={backGroundColor}
          selectLanguage={selectLanguage}
        />
      )}
    </div>
  )
}

export default GiftVoucherPreview
