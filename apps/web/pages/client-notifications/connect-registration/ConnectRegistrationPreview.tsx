import React, { FC } from 'react'
import { EmailSmsPreview, ConnectRegistration } from '@pabau/ui'
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
  message: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Account created',
    message:
      'Congratulations Sophia, your account has been successfully created. Follow this link to access your online account:',
    closingText: 'Kind regards,',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Cuenta creada',
    message:
      'Felicitaciones Sophia, su cuenta ha sido creada con éxito. Siga este enlace para acceder a su cuenta en línea:',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'Tus amigos en The Clinic',
  },
  fr: {
    greeting: 'Compte créé',
    message:
      'Félicitations Sophia, votre compte a été créé avec succès. Suivez ce lien pour accéder à votre compte en ligne:',
    closingText: 'Sincères amitiés,',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Аккаунт создан',
    message:
      'Поздравляем Софию, ваша учетная запись успешно создана. Перейдите по этой ссылке, чтобы получить доступ к своей учетной записи в Интернете:',
    closingText: 'С уважением,',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'تم إنشاء الحساب',
    message:
      'تهانينا صوفيا ، لقد تم إنشاء حسابك بنجاح. اتبع هذا الرابط للوصول إلى حسابك على الإنترنت:',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Акаунтът е създаден',
    message:
      'Поздравления, София, вашият акаунт е създаден успешно. Следвайте тази връзка за достъп до вашия онлайн акаунт:',
    closingText: 'Поздрави,',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Účet založen',
    message:
      'Gratulujeme Sophii, váš účet byl úspěšně vytvořen. Chcete-li získat přístup ke svému online účtu, klikněte na tento odkaz:',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Konto oprettet',
    message:
      'Tillykke Sophia, din konto er oprettet. Følg dette link for at få adgang til din online konto:',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Dine venner på klinikken',
    message:
      'Gratulálunk Sophiának! Fiókját sikeresen létrehoztuk. Kövesse ezt a linket az online fiók eléréséhez:',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Konts ir izveidots',
    message:
      'Apsveicam Sofiju, jūsu konts ir veiksmīgi izveidots. Lai piekļūtu savam tiešsaistes kontam, izmantojiet šo saiti:',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Jūsu draugi klīnikā',
    message:
      'Gratulerer Sophia, kontoen din er opprettet. Følg denne lenken for å få tilgang til din online konto:',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Vennlig hilsen,',
  },
  pl: {
    greeting: 'Konto utworzone',
    message:
      'Gratulacje Sophia, Twoje konto zostało pomyślnie utworzone. Kliknij ten link, aby uzyskać dostęp do swojego konta online:',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Konto skapat',
    message:
      'Grattis Sophia, ditt konto har skapats. Följ den här länken för att komma åt ditt online-konto:',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Dina vänner på kliniken',
    message:
      'Felicitări Sophia, contul tău a fost creat cu succes. Urmați acest link pentru a accesa contul dvs. online:',
    closingText: 'Salutări calde,',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const ConnectRegistrationPreview: FC<P> = ({
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
          footerContact={true}
          contactEmail={'abc@info.com'}
          contactInfoNumber={'+98765432101'}
        >
          <ConnectRegistration
            message={selectLangData.message}
            connectURL={'URL://CONNECTURL'}
            username={'Sophia17'}
            password={'Sophia0193091'}
            footerContact={true}
            text={`${selectLangData.closingText}<br/>${selectLangData.signatureBlock}`}
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

export default ConnectRegistrationPreview
