import React, { FC } from 'react'
import { EmailSmsPreview, Referral } from '@pabau/ui'
import CustomTemplate from '../ClientNotification/CustomTemplate'

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
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    message:
      'We would like to say thank you for your client referral. It means the world to us!',
    description:
      'As a loyal client, we would like to offer you 10% OFF for your next visit. Please find your voucher code below.',
    closingText: 'We look forward to seeing you soon!',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Querida Sophia,',
    message:
      'Nos gustaría agradecerle la recomendación de su cliente. ¡Significa el mundo para nosotros!',
    description:
      'Como cliente fiel, nos gustaría ofrecerle un 10% de descuento para su próxima visita. Encuentre su código de cupón a continuación.',
    closingText: '¡Esperamos verte pronto!',
    signatureBlock: 'Tus amigas en la clinica',
  },
  fr: {
    greeting: 'Chère Sophia,',
    message:
      'Nous tenons à vous remercier pour votre référence client. Ça représente énormément pour nous!',
    description:
      'En tant que client fidèle, nous aimerions vous offrir 10% de réduction pour votre prochaine visite. Veuillez trouver votre code de bon ci-dessous.',
    closingText: 'Nous avons hâte de vous voir bientôt!',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Дорогая София,',
    message:
      'Мы хотели бы поблагодарить вас за направление вашего клиента. Это значит для нас мир!',
    description:
      'Как постоянный клиент, мы хотели бы предложить вам 10% скидку на ваш следующий визит. Пожалуйста, найдите код вашего ваучера ниже.',
    closingText: 'Мы с нетерпением ждем встречи с вами в ближайшее время!',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    message: 'نود أن نشكرك على إحالة العميل. فهذا يعني أن العالم لنا!',
    description:
      'بصفتنا عميلاً مخلصًا ، نود أن نقدم لك خصمًا بنسبة 10٪ على زيارتك القادمة. الرجاء العثور على رمز القسيمة الخاص بك أدناه.',
    closingText: 'نحن نتطلع إلى رؤيتكم قريبا!',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Скъпа София,',
    message:
      'Бихме искали да благодарим за препоръката на вашия клиент. Това означава светът за нас!',
    description:
      'Като лоялен клиент бихме искали да ви предложим 10% ОТСТЪПКА за следващото ви посещение. Моля, намерете кода на ваучера си по-долу.',
    closingText: 'Очакваме Ви скоро!',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    message:
      'Rádi bychom vám poděkovali za doporučení klienta. Znamená to pro nás svět!',
    description:
      'Jako věrný klient bychom vám rádi nabídli 10% SLEVU na vaši další návštěvu. Níže naleznete kód voucheru.',
    closingText: 'Těšíme se na vás brzy!',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Kære Sophia,',
    message:
      'Vi vil gerne sige tak for din klienthenvisning. Det betyder verden for os!',
    description:
      'Som en loyal klient vil vi gerne tilbyde dig 10% FRA til dit næste besøg. Find din kuponkode nedenfor.',
    closingText: 'Vi ser frem til at se dig snart!',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    message:
      'Ezúton szeretnénk köszönetet mondani az ügyfél beutalójáért. Nekünk a világot jelenti!',
    description:
      'Hűséges ügyfélként 10% kedvezményt kínálunk Önnek a következő látogatásra. Kérjük, keresse meg az utalványkódját alább.',
    closingText: 'Várunk hamarosan!',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    message:
      'Mēs vēlamies pateikt paldies par klienta novirzīšanu. Tas mums nozīmē pasauli!',
    description:
      'Kā lojāls klients mēs vēlamies jums piedāvāt 10% atlaidi nākamajam apmeklējumam. Lūdzu, atrodiet savu kupona kodu zemāk.',
    closingText: 'Gaidīsim jūs drīz!',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Kjære Sophia,',
    message:
      'Vi vil si takk for henvisningen til klienten. Det betyr verden for oss!',
    description:
      'Som en lojal klient, vil vi tilby deg 10% RABATT for ditt neste besøk. Vennligst finn kupongkoden din nedenfor.',
    closingText: 'Vi gleder oss til å se deg snart!',
    signatureBlock: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Droga Zofio,',
    message: 'Chcielibyśmy podziękować za polecenie klienta. To dla nas świat!',
    description:
      'Jako lojalny klient oferujemy 10% ZNIŻKI na następną wizytę. Poniżej znajdziesz kod kuponu.',
    closingText: 'Mamy nadzieję zobaczyć Cię ponownie!',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Kära Sophia,',
    message:
      'Vi vill säga tack för din klientreferens. Det betyder världen för oss!',
    description:
      'Som en lojal klient vill vi erbjuda dig 10% rabatt på ditt nästa besök. Hitta din kupongkod nedan.',
    closingText: 'Vi ser fram emot att se dig snart!',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    message:
      'Dorim să vă mulțumim pentru recomandarea clientului dvs. Pentru noi înseamnă lumea!',
    description:
      'În calitate de client fidel, am dori să vă oferim 10% REDUCERE pentru următoarea dvs. vizită. Vă rugăm să găsiți codul voucher mai jos.',
    closingText: 'Asteptam sa te revedem in curand!',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const ReferralPreview: FC<P> = ({
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
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
        >
          <Referral
            message={selectLangData.message}
            buttonColor={buttonColor}
            description={selectLangData.description}
            footerText={`${selectLangData.closingText}<br/>${selectLangData.signatureBlock}`}
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

export default ReferralPreview
