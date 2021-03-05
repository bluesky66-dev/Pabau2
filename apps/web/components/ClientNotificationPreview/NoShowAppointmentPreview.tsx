import React, { FC } from 'react'
import { EmailSmsPreview, NoShowAppointment } from '@pabau/ui'
import CustomTemplate from '../ClientNotification/CustomTemplate'

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
  subTitle: string
  message: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi, Anna',
    subTitle: 'Sorry you missed your appointment!',
    message:
      "We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn't show up.",
    closingText: 'Looking forward to hearing from you soon,',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Hola Anna',
    subTitle: '¡Lamento que no haya asistido a su cita!',
    message:
      'Esperamos que todo te vaya bien. Le teníamos programado para ver a la Dra. Christine hoy a las 11:00, pero desafortunadamente no se presentó.',
    closingText: 'Espero poder oír de ti pronto,',
    signatureBlock: 'Tus amigos en la clinica',
  },
  fr: {
    greeting: 'Bonjour Anna',
    subTitle: 'Désolé vous avez manqué votre rendez-vous!',
    message:
      "Nous espérons que tout va bien pour vous. Nous vous avions prévu de voir le Dr Christine aujourd'hui à 11 h, mais malheureusement, vous ne vous êtes pas présenté.",
    closingText: 'Au plaisir de vous entendre bientôt,',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Привет Анна',
    subTitle: 'Извините, что вы пропустили встречу!',
    message:
      'Надеемся, у вас все в порядке. Мы запланировали вашу встречу с доктором Кристиной сегодня в 11:00, но, к сожалению, вы не пришли.',
    closingText: 'С нетерпением ждем от вас в ближайшее время,',
    signatureBlock: 'Ваши друзья в The Clinic',
  },
  ar: {
    greeting: 'مرحبا آنا',
    subTitle: 'آسف فاتك موعدك!',
    message:
      'نأمل أن يكون كل شيء على ما يرام معك. كان من المقرر أن تقابل الدكتورة كريستين اليوم في الساعة 11:00 ولكن لسوء الحظ ، لم تحضر.',
    closingText: 'نتطلع الى الاستماع منك قريبا،',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Здравей, Анна',
    subTitle: 'Извинете, че пропуснахте срещата си!',
    message:
      'Надяваме се, че всичко е наред с вас. Уговорихме ви да се срещнете с д-р Кристин днес за 11:00, но за съжаление не се появихте.',
    closingText: 'Очакваме да се чуем скоро,',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Ahoj Anno',
    subTitle: 'Omlouváme se, že jste zmeškali schůzku!',
    message:
      'Doufáme, že je s vámi vše v pořádku. Měli jsme naplánované navštívit dr. Christine dnes v 11:00, ale bohužel jste se neukázal.',
    closingText: 'Těším se, že se brzy ozveš,',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Hej Anna',
    subTitle: 'Undskyld, du gik glip af din aftale!',
    message:
      'Vi håber, at alt er okay med dig. Vi havde planlagt at møde Dr. Christine i dag kl. 11:00, men desværre dukkede du ikke op.',
    closingText: 'Ser frem til at høre fra dig snart,',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Szia Anna',
    subTitle: 'Sajnálom, hogy elmulasztotta a találkozót!',
    message:
      'Reméljük, hogy minden rendben van veled. Úgy terveztük, hogy ma 11: 00-kor találkozunk Dr. Christine-nel, de sajnos nem jelent meg.',
    closingText: 'Alig várom, hogy hamarosan értesülhessek tőled,',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Sveika, Anna',
    subTitle: 'Atvainojiet, ka nokavējāt iecelšanu!',
    message:
      'Mēs ceram, ka ar jums viss ir kārtībā. Mums bija paredzēts, ka jūs šodien plānojat redzēt Dr Christine pulksten 11:00, bet diemžēl jūs neieradāties.',
    closingText: 'Ar nepacietību gaida drīzas ziņas no jums,',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Hei, Anna',
    subTitle: 'Beklager at du savnet avtalen din!',
    message:
      'Vi håper alt er bra med deg. Vi hadde planlagt å møte Dr. Christine i dag klokka 11.00, men dessverre dukket du ikke opp.',
    closingText: 'Ser frem til å høre fra deg snart,',
    signatureBlock: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Cześć Anna',
    subTitle: 'Przepraszam, że przegapiłeś spotkanie!',
    message:
      'Mamy nadzieję, że wszystko u Ciebie w porządku. Mieliśmy zaplanowane spotkanie z dr Christine dzisiaj o 11:00, ale niestety nie przyszedłeś.',
    closingText: 'Czekamy na wiadomość od Ciebie wkrótce,',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Hej Anna',
    subTitle: 'Ledsen att du missade ditt möte!',
    message:
      'Vi hoppas att allt är okej med dig. Vi hade planerat att träffa doktor Christine idag kl 11:00 men tyvärr visade du inte upp dig.',
    closingText: 'Ser fram emot att höra från dig snart,',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Bună Anna',
    subTitle: 'Ne pare rău că ți-ai pierdut programarea!',
    message:
      'Sperăm că totul este în regulă cu tine. Te-am programat să o vezi pe Dr. Christine astăzi la 11:00, dar, din păcate, nu ai apărut.',
    closingText: 'De abia astept sa ne auzim in curand,',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const NoShowAppointmentPreview: FC<P> = ({
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
          subtitle={selectLangData.subTitle}
          footerIconGroup={true}
          previewButtonGroup={false}
          previewCustomStatus={'email'}
          activeSocialIcons={activeSocialIcons}
          backGroundColor={backGroundColor}
          isFooterText={true}
          footerText={informationMessage}
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
        >
          <NoShowAppointment
            message={selectLangData.message}
            contactNumber={'+44 000 987 507'}
            footerContact={false}
            isFooterText={true}
            buttonColor={buttonColor}
            closingText={selectLangData.closingText}
            signatureBlock={selectLangData.signatureBlock}
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

export default NoShowAppointmentPreview
