import React, { FC } from 'react'
import { EmailSmsPreview, MedicalForm } from '@pabau/ui'
import CustomTemplate from '../ClientNotification/CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  showService?: boolean
  showEmployeeName?: boolean
  type?: string
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
  message: string
  closingText: string
  signatureBlock: string
  clinicEmailingMessage: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    message:
      'Please find attached your medical form in PDF format. If you have any questions do not hesitate to contact us at',
    clinicEmailingMessage: 'Please find attached your appointment summary.',
    closingText: 'Kind regards,',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Querida Sophia,',
    message:
      'Adjunto encontrará su formulario médico en formato PDF. Si tiene alguna pregunta no dude en contactarnos en',
    clinicEmailingMessage: 'Adjunto encontrará el resumen de su cita.',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'Tus amigos en The Clinic',
  },
  fr: {
    greeting: 'Chère Sophia,',
    message:
      "Veuillez trouver ci-joint votre formulaire médical au format PDF. Si vous avez des questions, n'hésitez pas à nous contacter au",
    clinicEmailingMessage:
      'Veuillez trouver ci-joint le résumé de votre rendez-vous.',
    closingText: 'Sincères amitiés,',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Дорогая София,',
    message:
      'Приложите вашу медицинскую форму в формате PDF. Если у вас есть какие-либо вопросы, не стесняйтесь обращаться к нам по адресу',
    clinicEmailingMessage:
      'Пожалуйста, найдите в приложении краткое изложение вашей встречи.',
    closingText: 'С уважением,',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    message:
      'يرجى الاطلاع على النموذج الطبي المرفق بصيغة PDF. إذا كان لديك أي أسئلة ، فلا تتردد في الاتصال بنا على',
    clinicEmailingMessage: 'يرجى الاطلاع على ملخص موعدك المرفق.',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Скъпа София,',
    message:
      'Приложете вашата медицинска форма в PDF формат. Ако имате въпроси, не се колебайте да се свържете с нас на',
    clinicEmailingMessage: 'Моля, вижте приложеното резюме на вашата среща.',
    closingText: 'Поздрави,',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    message:
      'V příloze naleznete váš lékařský formulář ve formátu PDF. V případě jakýchkoli dotazů nás neváhejte kontaktovat na',
    clinicEmailingMessage: 'V příloze naleznete shrnutí schůzky.',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Kære Sophia,',
    message:
      'Se vedhæftet din medicinske formular i PDF-format. Hvis du har spørgsmål, så tøv ikke med at kontakte os på',
    clinicEmailingMessage: 'Se vedhæftet din oversigt over aftaler.',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    message:
      'Kérjük, csatolja orvosi formáját PDF formátumban. Ha bármilyen kérdése van, forduljon hozzánk bizalommal a következő címen:',
    clinicEmailingMessage: 'Kérjük, csatolja a találkozó összefoglalóját.',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    message:
      'Lūdzu, pievienojiet savu medicīnisko veidlapu PDF formātā. Ja jums ir kādi jautājumi, sazinieties ar mums pa e-pastu',
    clinicEmailingMessage: 'Lūdzu, pievienojiet tikšanās kopsavilkumu.',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Kjære Sophia,',
    message:
      'Vennligst finn vedlagt ditt medisinske skjema i PDF-format. Hvis du har spørsmål, ikke nøl med å kontakte oss på',
    clinicEmailingMessage: 'Vennligst finn vedlagte avtalesammendrag.',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Droga Zofio,',
    message:
      'W załączeniu przesyłamy formularz medyczny w formacie PDF. Jeśli masz jakiekolwiek pytania, nie wahaj się z nami skontaktować pod adresem',
    clinicEmailingMessage: 'W załączeniu podsumowanie spotkania.',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Kära Sophia,',
    message:
      'Vänligen se bifogat ditt medicinska formulär i PDF-format. Om du har några frågor tveka inte att kontakta oss på',
    clinicEmailingMessage: 'Vänligen se bifogad din mötesöversikt.',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    message:
      'Vă rugăm să găsiți atașat formularul dvs. medical în format PDF. Dacă aveți întrebări, nu ezitați să ne contactați la',
    clinicEmailingMessage: 'Vă rugăm să găsiți atașat rezumatul întâlnirii.',
    closingText: 'Salutări calde,',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const MedicalFormsPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  buttonColor,
  type,
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
            message={
              type === 'clinic-emailing-timeline'
                ? selectLangData.clinicEmailingMessage
                : selectLangData.message
            }
            buttonColor={buttonColor}
            contactNumber={type === 'medical-forms' && '+44 000 987 507'}
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

export default MedicalFormsPreview
