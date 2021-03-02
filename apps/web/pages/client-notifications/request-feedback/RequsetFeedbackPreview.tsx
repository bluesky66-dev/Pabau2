import React, { FC } from 'react'
import { EmailSmsPreview, RequestFeedBack } from '@pabau/ui'
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
  message1: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi, Anna',
    message:
      'Thank you for visiting The Clinic, we hope you were happy with our services!',
    message1:
      'We would love to hear about your experience in the survey below. Your feedback helps us create a better experience for you and for all of our customers.',
    closingText: 'Thank you for your support!',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Hola Anna',
    message:
      'Gracias por visitar The Clinic, ¡esperamos que esté satisfecho con nuestros servicios!',
    message1:
      'Nos encantaría conocer su experiencia en la encuesta a continuación. Sus comentarios nos ayudan a crear una mejor experiencia para usted y todos nuestros clientes.',
    closingText: '¡Gracias por tu apoyo!',
    signatureBlock: 'Tus amigas en la clinica',
  },
  fr: {
    greeting: 'Bonjour Anna',
    message:
      "Merci d'avoir visité la clinique, nous espérons que vous avez été satisfait de nos services!",
    message1:
      'Nous aimerions connaître votre expérience dans le sondage ci-dessous. Vos commentaires nous aident à créer une meilleure expérience pour vous et pour tous nos clients.',
    closingText: 'Merci pour votre soutien!',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Привет Анна',
    message:
      'Спасибо, что посетили Клинику, надеемся, что вы остались довольны нашими услугами!',
    message1:
      'Мы хотели бы узнать о вашем опыте в приведенном ниже опросе. Ваш отзыв поможет нам улучшить качество обслуживания вас и всех наших клиентов.',
    closingText: 'Спасибо за поддержку!',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'مرحبا آنا',
    message: 'نشكرك على زيارة العيادة ، نتمنى أن تكون سعيدًا بخدماتنا!',
    message1:
      'نود أن نسمع عن تجربتك في الاستطلاع أدناه. تساعدنا ملاحظاتك في إنشاء تجربة أفضل لك ولجميع عملائنا.',
    closingText: 'شكرا لدعمكم!',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Здравей, Анна',
    message:
      'Благодарим ви, че посетихте клиниката, надяваме се, че сте доволни от нашите услуги!',
    message1:
      'Ще се радваме да чуем за вашия опит в анкетата по-долу. Вашите отзиви ни помагат да създадем по-добро изживяване за вас и за всички наши клиенти.',
    closingText: 'Благодарим за подкрепата!',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Ahoj Anno',
    message:
      'Děkujeme za návštěvu Kliniky, doufáme, že jste byli s našimi službami spokojeni!',
    message1:
      'Rádi bychom se o vašich zkušenostech dozvěděli v níže uvedeném průzkumu. Vaše zpětná vazba nám pomáhá vytvářet lepší prostředí pro vás i pro všechny naše zákazníky.',
    closingText: 'Děkuji za vaší podporu!',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Hej Anna',
    message:
      'Tak fordi du besøgte Klinikken, vi håber du var tilfreds med vores tjenester!',
    message1:
      'Vi vil meget gerne høre om din oplevelse i undersøgelsen nedenfor. Din feedback hjælper os med at skabe en bedre oplevelse for dig og for alle vores kunder.',
    closingText: 'Tak for din støtte!',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Szia Anna',
    message:
      'Köszönjük, hogy ellátogatott a Klinikára, reméljük, hogy elégedett volt szolgáltatásainkkal!',
    message1:
      'Szeretnénk értesülni tapasztalatairól az alábbi felmérésben. Visszajelzése segít abban, hogy jobb élményt nyújthassunk Önnek és minden ügyfelünknek.',
    closingText: 'Köszönöm a tamogatásod!',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Sveika, Anna',
    message:
      'Paldies, ka apmeklējāt klīniku, mēs ceram, ka jūs priecājāties par mūsu pakalpojumiem!',
    message1:
      'Mēs labprāt uzzinātu par jūsu pieredzi zemāk esošajā aptaujā. Jūsu atsauksmes palīdz mums radīt labāku pieredzi jums un visiem mūsu klientiem.',
    closingText: 'Paldies Tev par atbalstu!',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Hei, Anna',
    message:
      'Takk for at du besøkte The Clinic, vi håper du var fornøyd med tjenestene våre!',
    message1:
      'Vi vil gjerne høre om din erfaring i undersøkelsen nedenfor. Din tilbakemelding hjelper oss med å skape en bedre opplevelse for deg og for alle våre kunder.',
    closingText: 'Takk for støtten!',
    signatureBlock: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Cześć Anna',
    message:
      'Dziękujemy za odwiedzenie Kliniki, mamy nadzieję, że byli Państwo zadowoleni z naszych usług!',
    message1:
      'Chcielibyśmy usłyszeć o Twoim doświadczeniu w poniższej ankiecie. Twoja opinia pomoże nam stworzyć lepsze wrażenia dla Ciebie i dla wszystkich naszych klientów.',
    closingText: 'Dziękuję za Twoje wsparcie!',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Hej Anna',
    message:
      'Tack för att du besöker The Clinic, vi hoppas att du var nöjd med våra tjänster!',
    message1:
      'Vi vill gärna höra om din upplevelse i undersökningen nedan. Din feedback hjälper oss att skapa en bättre upplevelse för dig och för alla våra kunder.',
    closingText: 'Tack för ditt stöd!',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Bună Anna',
    message:
      'Vă mulțumim că ați vizitat Clinica, sperăm că ați fost mulțumit de serviciile noastre!',
    message1:
      'Ne-ar plăcea să aflăm despre experiența dvs. în sondajul de mai jos. Feedback-ul dvs. ne ajută să creăm o experiență mai bună pentru dvs. și pentru toți clienții noștri.',
    closingText: 'Vă mulțumim pentru suport!',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const RequestFeedbackPreview: FC<P> = ({
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
          <RequestFeedBack
            message={selectLangData.message}
            message1={selectLangData.message1}
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

export default RequestFeedbackPreview
