import React, { FC } from 'react'
import { EmailSmsPreview, ClassesSpotAvailable } from '@pabau/ui'
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
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    message:
      'Good news! You recently were placed in our waitlist and a new class is now available. If you would still like to book your appointment, you must take action before the spot is taken.',
  },
  sp: {
    greeting: 'Querida Sophia,',
    message:
      '¡Buenas noticias! Recientemente fuiste colocado en nuestra lista de espera y ahora hay una nueva clase disponible. Si aún desea reservar su cita, debe tomar medidas antes de que se tome el lugar.',
  },
  fr: {
    greeting: 'Chère Sophia,',
    message:
      "Bonnes nouvelles! Vous avez récemment été inscrit sur notre liste d'attente et une nouvelle classe est maintenant disponible. Si vous souhaitez tout de même prendre rendez-vous, vous devez agir avant que la place ne soit prise.",
  },
  ru: {
    greeting: 'Дорогая София,',
    message:
      'Хорошие новости! Вы недавно были помещены в наш список ожидания, и теперь доступен новый курс. Если вы все же хотите записаться на прием, вы должны принять меры до того, как место будет занято.',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    message:
      'أخبار جيدة! لقد تم وضعك مؤخرًا في قائمة الانتظار لدينا وهناك فصل جديد متاح الآن. إذا كنت لا تزال ترغب في حجز موعدك ، فيجب عليك اتخاذ إجراء قبل اتخاذ القرار.',
  },
  bg: {
    greeting: 'Скъпа София,',
    message:
      'Добри новини! Наскоро бяхте поставени в нашия списък за изчакване и вече е наличен нов клас. Ако все пак искате да запазите час, трябва да предприемете действия, преди мястото да бъде взето.',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    message:
      'Dobré zprávy! Nedávno jste byli zařazeni do našeho seznamu čekatelů a nyní je k dispozici nová třída. Pokud si přesto chcete zarezervovat termín, musíte před přijetím místa jednat.',
  },
  da: {
    greeting: 'Kære Sophia,',
    message:
      'Gode nyheder! Du blev for nylig placeret i vores venteliste, og en ny klasse er nu tilgængelig. Hvis du stadig vil reservere din aftale, skal du tage skridt, inden stedet tages.',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    message:
      'Jó hírek! Nemrég bekerült a várólistánkba, és most már elérhető egy új osztály. Ha továbbra is szeretné lefoglalni az időpontját, akkor lépéseket kell tennie, mielőtt a helyszínre kerül.',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    message:
      'Labas ziņas! Jūs nesen tikāt ievietots mūsu gaidītāju sarakstā, un tagad ir pieejama jauna klase. Ja jūs joprojām vēlaties rezervēt savu tikšanos, jums ir jārīkojas pirms vietas noteikšanas.',
  },
  no: {
    greeting: 'Kjære Sophia,',
    message:
      'Gode nyheter! Du ble nylig plassert i ventelisten vår, og en ny klasse er nå tilgjengelig. Hvis du fremdeles vil bestille en avtale, må du ta affære før stedet blir tatt.',
  },
  pl: {
    greeting: 'Droga Zofio,',
    message:
      'Dobre wieści! Niedawno umieszczono Cię na naszej liście oczekujących, a nowe zajęcia są już dostępne. Jeśli nadal chcesz umówić się na wizytę, musisz podjąć działania, zanim miejsce zostanie zajęte.',
  },
  sw: {
    greeting: 'Kära Sophia,',
    message:
      'Goda nyheter! Du placerades nyligen i vår väntelista och en ny klass är nu tillgänglig. Om du fortfarande vill boka din tid måste du vidta åtgärder innan platsen tas.',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    message:
      'Vești bune! Ați fost recent plasat în lista noastră de așteptare și o nouă clasă este acum disponibilă. Dacă doriți totuși să vă rezervați programarea, trebuie să luați măsuri înainte ca locul să fie luat.',
  },
}

const WaitListPreview: FC<P> = ({
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
          footerText={
            'Looking forward to hearing from you soon,<br/>Your friends at The Clinic'
          }
          footer={true}
          footerContact={true}
          contactEmail={'abc@info.com'}
          contactInfoNumber={'+98765432101'}
        >
          <ClassesSpotAvailable
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

export default WaitListPreview
