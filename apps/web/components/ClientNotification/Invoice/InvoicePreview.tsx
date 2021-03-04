import React, { FC } from 'react'
import { EmailSmsPreview, Invoices } from '@pabau/ui'
import CustomTemplate from '../../../pages/client-notifications/CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  informationMessage?: string
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
  message: string[]
  footerText: string
  footerText2: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Anna,',
    message: ['Thank you for your recent visit at M-A Hair Dressing & Spa.'],
    footerText: 'Looking forward to hearing from you soon,',
    footerText2: ' Your friends at The Clinic',
  },
  sp: {
    greeting: 'Querida Anna,',
    message: ['Gracias por su reciente visita a M-A Hair Dressing & Spa.'],
    footerText: 'Espero poder oír de ti pronto,',
    footerText2: 'Tus amigos en la clinica',
  },
  fr: {
    greeting: 'Chère anna,',
    message: ['Merci pour votre récente visite au M-A Hair Dressing & Spa.'],
    footerText: 'Au plaisir de vous entendre bientôt,',
    footerText2: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Дорогая Анна,',
    message: ['Спасибо за ваш недавний визит в M-A Hair Dressing & Spa.'],
    footerText: 'С нетерпением ждем от вас в ближайшее время,',
    footerText2: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'عزيزتي آنا،',
    message: ['شكرا لزيارتك الأخيرة في M-A تصفيف الشعر، وسبا.'],
    footerText: 'نتطلع الى الاستماع منك قريبا،',
    footerText2: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Скъпа Анна,',
    message: [
      'Благодарим ви за скорошното ви посещение в M-A Hair Dressing & Spa.',
    ],
    footerText: 'Очакваме да се чуем скоро,',
    footerText2: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Drahá Anno,',
    message: ['Děkujeme za vaši nedávnou návštěvu v M-A Hair Dressing & Spa.'],
    footerText: 'Těším se, že se brzy ozveš,',
    footerText2: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Kære Anna,',
    message: ['Tak for dit nylige besøg hos M-A Hair Dressing & Spa.'],
    footerText: 'Ser frem til at høre fra dig snart,',
    footerText2: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Kedves Anna,',
    message: [
      'Köszönjük a legutóbbi látogatást az M-A Hair Dressing & Spa-nál.',
    ],
    footerText: 'Alig várom, hogy hamarosan értesülhessek tőled,',
    footerText2: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Mīļā Anna,',
    message: ['Paldies par neseno vizīti M-A Hair Dressing & Spa.'],
    footerText: 'Ar nepacietību gaida drīzas ziņas no jums,',
    footerText2: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Kjære Anna,',
    message: ['Takk for ditt siste besøk på M-A Hair Dressing & Spa.'],
    footerText: 'Ser frem til å høre fra deg snart,',
    footerText2: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Droga Anno,',
    message: ['Dziękujemy za ostatnią wizytę w M-A Hair Dressing & Spa.'],
    footerText: 'Czekamy na wiadomość od Ciebie wkrótce,',
    footerText2: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Kära Anna,',
    message: ['Tack för ditt senaste besök på M-A Hair Dressing & Spa.'],
    footerText: 'Ser fram emot att höra från dig snart,',
    footerText2: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Draga Anna,',
    message: [
      'Vă mulțumim pentru vizita dvs. recentă la M-A Hair Dressing & Spa.',
    ],
    footerText: 'De abia astept sa ne auzim in curand,',
    footerText2: 'Prietenii tăi de la clinică',
  },
}

const InvoicePreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  buttonColor,
  activeSocialIcons,
  selectLanguage,
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
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
          buttonColor={buttonColor}
        >
          <Invoices
            message={selectLangData.message}
            footerText={
              selectLangData.footerText + ' <br> ' + selectLangData.footerText2
            }
            showInvoiceButton={true}
            buttonColor={buttonColor}
          />
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

export default InvoicePreview
