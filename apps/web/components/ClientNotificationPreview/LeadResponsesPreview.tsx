import React, { FC } from 'react'
import { EmailSmsPreview, LeadResponses } from '@pabau/ui'
import CustomTemplate from '../../components/ClientNotification/CustomTemplate'

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
  description: string
  messageLine: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi, Anna',
    message: 'Thank you for your inquiry!',
    description:
      'We received your form and we will get back to you as soon as possible.',
    messageLine: 'We look forward to chatting soon!',
    closingText: 'Kind regards',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Hola Anna',
    message: '¡Gracias por su consulta!',
    description:
      'Recibimos su formulario y nos comunicaremos con usted lo antes posible.',
    messageLine: '¡Esperamos poder charlar pronto!',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'Tus amigos en The Clinic',
  },
  fr: {
    greeting: 'Bonjour Anna',
    message: 'Merci pour votre demande!',
    description:
      'Nous avons reçu votre formulaire et nous vous répondrons dans les plus brefs délais.',
    messageLine: 'Nous avons hâte de discuter bientôt!',
    closingText: 'Sincères amitiés,',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Привет Анна',
    message: 'نحن نتطلع إلى الدردشة قريبا!',
    description: 'Мы получили вашу форму и свяжемся с вами в ближайшее время.',
    messageLine: 'Мы с нетерпением ждем встречи в ближайшее время!',
    closingText: 'С уважением,',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'مرحبا آنا',
    message: 'شكرا لكم على سؤالكم!',
    description:
      'لقد تلقينا النموذج الخاص بك وسنعاود الاتصال بك في أقرب وقت ممكن.',
    messageLine: 'نحن نتطلع إلى الدردشة قريبا!',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Здравей, Анна',
    message: 'Благодаря за вашето запитване!',
    description:
      'Получихме вашата форма и ще се свържем с вас възможно най-скоро.',
    messageLine: 'Очакваме с нетърпение да разговаряме скоро!',
    closingText: 'Поздрави,',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Ahoj Anno',
    message: 'Děkujeme Vám za Váš dotaz!',
    description: 'Obdrželi jsme váš formulář a my se vám ozveme co nejdříve.',
    messageLine: 'Těšíme se na chatování brzy!',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Hej Anna',
    message: 'Tak for din forespørgsel!',
    description:
      'Vi modtog din formular, og vi vender tilbage til dig hurtigst muligt.',
    messageLine: 'Vi ser frem til at chatte snart!',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Szia Anna',
    message: 'Köszönjük érdeklődését!',
    description:
      'Megkaptuk az űrlapot, és a lehető leghamarabb kapcsolatba lépünk Önnel.',
    messageLine: 'Várunk hamarosan beszélgetni!',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Sveika, Anna',
    message: 'Paldies par jūsu pieprasījumu!',
    description:
      'Mēs saņēmām jūsu veidlapu, un mēs sazināsimies ar jums pēc iespējas ātrāk.',
    messageLine: 'Mēs ceram uz drīzu tērzēšanu!',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Hei, Anna',
    message: 'Takk for din henvendelse!',
    description:
      'Vi mottok skjemaet ditt, og vi vil kontakte deg så snart som mulig.',
    messageLine: 'Vi gleder oss til å chatte snart!',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Vennlig hilsen,',
  },
  pl: {
    greeting: 'Cześć Anna',
    message: 'Dziękuję za zapytanie!',
    description:
      'Otrzymaliśmy Twój formularz i skontaktujemy się z Tobą tak szybko, jak to możliwe.',
    messageLine: 'Nie możemy się doczekać rozmowy wkrótce!',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Hej Anna',
    message: 'Tack för din förfrågan!',
    description:
      'Vi fick ditt formulär och vi kommer tillbaka till dig så snart som möjligt.',
    messageLine: 'Vi ser fram emot att chatta snart!',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Bună Anna',
    message: 'Vă mulțumim pentru solicitarea de informatii!',
    description:
      'Am primit formularul dvs. și vă vom contacta cât mai curând posibil.',
    messageLine: 'Așteptăm cu nerăbdare să discutăm în curând!',
    closingText: 'Salutări calde,',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const LeadResponsesPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  buttonColor,
  informationMessage,
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
          footerText={informationMessage}
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
        >
          <LeadResponses
            message={selectLangData.message}
            description={selectLangData.description}
            messageLine={selectLangData.messageLine}
            text={`${selectLangData.closingText}<br/>${selectLangData.signatureBlock}`}
            isFooterText={false}
            companyPhone={'+44 000 987 507'}
            companyEmail={'info@theclinic.com'}
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

export default LeadResponsesPreview
