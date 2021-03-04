import React, { FC } from 'react'
import { EmailSmsPreview, MedicalForm } from '@pabau/ui'
import CustomTemplate from '../../../pages/client-notifications/CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  showService?: boolean
  showEmployeeName?: boolean
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
  message: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    message: 'Please find attached your appointment summary.',
    closingText: 'Kind regards,',
    signatureBlock: 'The Clinic',
  },
  sp: {
    greeting: 'Querida Sophia,',
    message: 'Adjunto encontrará el resumen de su cita.',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'La clínica',
  },
  fr: {
    greeting: 'Chère Sophia,',
    message: 'Veuillez trouver ci-joint le résumé de votre rendez-vous.',
    closingText: 'Sincères amitiés,',
    signatureBlock: 'La clinique',
  },
  ru: {
    greeting: 'Дорогая София,',
    message:
      'Пожалуйста, найдите в приложении краткое изложение вашей встречи.',
    closingText: 'С уважением,',
    signatureBlock: 'Клиника',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    message: 'يرجى الاطلاع على ملخص موعدك المرفق.',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'العيادة',
  },
  bg: {
    greeting: 'Скъпа София,',
    message: 'Моля, вижте приложеното резюме на вашата среща.',
    closingText: 'Поздрави,',
    signatureBlock: 'Клиниката',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    message: 'V příloze naleznete shrnutí schůzky.',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Klinika',
  },
  da: {
    greeting: 'Kære Sophia,',
    message: 'Se vedhæftet din oversigt over aftaler.',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Klinikken',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    message: 'Kérjük, csatolja a találkozó összefoglalóját.',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A klinika',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    message: 'Lūdzu, pievienojiet tikšanās kopsavilkumu.',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Klīnika',
  },
  no: {
    greeting: 'Kjære Sophia,',
    message: 'Vennligst finn vedlagte avtalesammendrag.',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Klinikken',
  },
  pl: {
    greeting: 'Droga Zofio,',
    message: 'W załączeniu podsumowanie spotkania.',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Klinika',
  },
  sw: {
    greeting: 'Kära Sophia,',
    message: 'Vänligen se bifogad din mötesöversikt.',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Kliniken',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    message: 'Vă rugăm să găsiți atașat rezumatul întâlnirii.',
    closingText: 'Salutări calde,',
    signatureBlock: 'Clinica',
  },
}

const ClinicEmailingTimelinePreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  buttonColor,
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
          footerText={`${selectLangData.closingText}<br/>${selectLangData.signatureBlock}`}
        >
          <MedicalForm
            message={selectLangData.message}
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

export default ClinicEmailingTimelinePreview
