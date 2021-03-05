import React, { FC } from 'react'
import { EmailSmsPreview, Birthday } from '@pabau/ui'
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
  wishingMessage: string
  messageLine1: string
  messageLine2: string
  messageLine3: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    wishingMessage: 'Happy Birthday!',
    messageLine1:
      'Your friends at clinic would like to wish you a glorious and happy birthday.',
    messageLine2: "Here's a £30 voucher to spend on your next visit.",
    messageLine3: 'We look forward to seeing you soon!',
    closingText: 'Warm regards,',
    signatureBlock: 'The clinic team',
  },
  sp: {
    wishingMessage: '¡Feliz cumpleaños!',
    messageLine1:
      'Tus amigos de la clínica te desean un feliz y glorioso cumpleaños.',
    messageLine2:
      'Aquí tienes un cupón de £ 30 para gastar en tu próxima visita.',
    messageLine3: '¡Esperamos verte pronto!',
    closingText: 'Un cordial saludo,',
    signatureBlock: 'El equipo de la clínica',
  },
  fr: {
    wishingMessage: 'Joyeux anniversaire!',
    messageLine1:
      'Vos amis de la clinique vous souhaitent un joyeux anniversaire.',
    messageLine2:
      'Voici un bon de 30 £ à dépenser lors de votre prochaine visite.',
    messageLine3: 'Nous avons hâte de vous voir bientôt!',
    closingText: 'Meilleurs voeux,',
    signatureBlock: "L'équipe de la clinique",
  },
  ru: {
    wishingMessage: 'С днем рождения!',
    messageLine1: 'Ваши друзья в клинике поздравляют вас с днем рождения.',
    messageLine2:
      'Вот купон на 30 фунтов стерлингов, который можно потратить при следующем посещении.',
    messageLine3:
      'Вот купон на 30 фунтов стерлингов, который можно потратить при следующем посещении.',
    closingText: 'Теплые пожелания,',
    signatureBlock: 'Команда клиники',
  },
  ar: {
    wishingMessage: 'عيد مولد سعيد!',
    messageLine1:
      'يود أصدقاؤك في العيادة أن يتمنوا لك عيد ميلاد مجيدًا وسعيدًا.',
    messageLine2:
      'إليك قسيمة بقيمة 30 جنيهًا إسترلينيًا لتنفقها في زيارتك القادمة.',
    messageLine3: 'نحن نتطلع إلى رؤيتكم قريبا!',
    closingText: 'تحياتي حارة،',
    signatureBlock: 'فريق العيادة',
  },
  bg: {
    wishingMessage: 'فريق العيادة',
    messageLine1:
      'Вашите приятели в клиниката биха искали да ви пожелаят славен и щастлив рожден ден.',
    messageLine2:
      'Ето ваучер за £ 30, който да похарчите за следващото си посещение.',
    messageLine3: 'Очакваме Ви скоро!',
    closingText: 'Сърдечни поздрави,',
    signatureBlock: 'Екипът на клиниката',
  },
  cs: {
    wishingMessage: 'Všechno nejlepší k narozeninám!',
    messageLine1:
      'Vaši přátelé na klinice by vám chtěli popřát slavné a šťastné narozeniny.',
    messageLine2:
      'Zde je poukaz v hodnotě 30 £, který můžete utratit za další návštěvu.',
    messageLine3: 'Těšíme se na vás brzy!',
    closingText: 'Vřelé pozdravy,',
    signatureBlock: 'Tým kliniky',
  },
  da: {
    wishingMessage: 'Tillykke med fødselsdagen!',
    messageLine1:
      'Dine venner på klinikken vil gerne ønske dig en strålende og tillykke med fødselsdagen.',
    messageLine2: 'Her er en kupon på £ 30 at bruge på dit næste besøg.',
    messageLine3: 'Vi ser frem til at se dig snart!',
    closingText: 'Varme hilsner,',
    signatureBlock: 'Klinikholdet',
  },
  hu: {
    wishingMessage: 'Boldog születésnapot!',
    messageLine1:
      'A klinikán lévő barátai dicsőséges és boldog születésnapot kívánnak.',
    messageLine2:
      'Itt van egy 30 font értékű utalvány, amelyet a következő látogatására költhet el.',
    messageLine3: 'Várunk hamarosan!',
    closingText: 'Meleg üdvözlettel,',
    signatureBlock: 'A klinika csapata',
  },
  lv: {
    wishingMessage: 'Daudz laimes dzimšanas dienā!',
    messageLine1:
      'Jūsu draugi klīnikā vēlas novēlēt jums krāšņu un laimīgu dzimšanas dienu.',
    messageLine2:
      'Šeit ir 30 sterliņu mārciņu kupons, ko tērēt nākamajam apmeklējumam.',
    messageLine3: 'Gaidīsim jūs drīz!',
    closingText: 'Silti sveicieni,',
    signatureBlock: 'Klīnikas komanda',
  },
  no: {
    wishingMessage: 'Gratulerer med dagen!',
    messageLine1:
      'Vennene dine på klinikken vil ønske deg en strålende og gratulerer med dagen.',
    messageLine2: 'Her er en kupong på £ 30 å bruke på ditt neste besøk.',
    messageLine3: 'Vi gleder oss til å se deg snart!',
    closingText: 'Beste hilsner,',
    signatureBlock: 'Klinikkteamet',
  },
  pl: {
    wishingMessage: 'Wszystkiego najlepszego!',
    messageLine1:
      'Twoi przyjaciele w klinice życzą Ci wspaniałych i szczęśliwych urodzin.',
    messageLine2:
      'Oto kupon o wartości 30 GBP do wydania podczas następnej wizyty.',
    messageLine3: 'Mamy nadzieję zobaczyć Cię ponownie!',
    closingText: 'Gorące pozdrowienia,',
    signatureBlock: 'Zespół kliniki',
  },
  sw: {
    wishingMessage: 'Grattis på födelsedagen!',
    messageLine1:
      'Dina vänner på kliniken vill önska dig en härlig och lycklig födelsedag.',
    messageLine2: 'Här är en kupong på 30 £ att spendera på ditt nästa besök.',
    messageLine3: 'Vi ser fram emot att se dig snart!',
    closingText: 'Varma hälsningar,',
    signatureBlock: 'Klinikens team',
  },
  ro: {
    wishingMessage: 'La multi ani!',
    messageLine1:
      'Prietenii tăi de la clinică ar dori să-ți urez o zi de naștere glorioasă și fericită.',
    messageLine2:
      'Iată un voucher de 30 GBP pe care să-l cheltuiți pentru următoarea dvs. vizită.',
    messageLine3: 'Asteptam sa te revedem in curand!',
    closingText: 'Salutări calde,',
    signatureBlock: 'Echipa clinicii',
  },
}

const BirthdayPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
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
          footerIconGroup={true}
          previewButtonGroup={false}
          previewCustomStatus={'email'}
          activeSocialIcons={activeSocialIcons}
          backGroundColor={backGroundColor}
          isFooterText={true}
          footerText={informationMessage}
          hideLogo={true}
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
        >
          <Birthday
            wishingMessage={selectLangData.wishingMessage}
            messageLine1={selectLangData.messageLine1}
            messageLine2={selectLangData.messageLine2}
            messageLine3={selectLangData.messageLine3}
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

export default BirthdayPreview
