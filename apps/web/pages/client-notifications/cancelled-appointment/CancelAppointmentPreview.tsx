import React, { FC } from 'react'
import { Button, EmailSmsPreview, CancelAClassBooking } from '@pabau/ui'
import styles from './index.module.less'
import ENSVG from '../../../../../libs/ui/src/assets/images/lang-logos/en.svg'
import FRSVG from '../../../../../libs/ui/src/assets/images/lang-logos/french.svg'
import SPSVG from '../../../../../libs/ui/src/assets/images/lang-logos/spanish.svg'
import ARSVG from '../../../../../libs/ui/src/assets/images/lang-logos/arabic.svg'
import BGSVG from '../../../../../libs/ui/src/assets/images/lang-logos/bulgarian.svg'
import CSSVG from '../../../../../libs/ui/src/assets/images/lang-logos/czech.svg'
import DASVG from '../../../../../libs/ui/src/assets/images/lang-logos/dutch.svg'
import HUSVG from '../../../../../libs/ui/src/assets/images/lang-logos/hungarian.svg'
import LVSVG from '../../../../../libs/ui/src/assets/images/lang-logos/latvian.svg'
import NOSVG from '../../../../../libs/ui/src/assets/images/lang-logos/norwegian.svg'
import PLSVG from '../../../../../libs/ui/src/assets/images/lang-logos/polish.svg'
import SWSVG from '../../../../../libs/ui/src/assets/images/lang-logos/swedish.svg'
import ROSVG from '../../../../../libs/ui/src/assets/images/lang-logos/romanian.svg'
import RUSVG from '../../../../../libs/ui/src/assets/images/lang-logos/russian.svg'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  showService?: boolean
  showEmployeeName?: boolean
  informationMessage?: string
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
  dateTime: string
  consultationDetail: string
  employee: string
  title: string
  address: string
  text: string
  message: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Maria,',
    dateTime: 'Monday, 16 November at 11:00',
    consultationDetail: 'Consultation (30 mins)',
    employee: ' with John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Your appointment is now cancelled!',
    message: 'we would love to see tou again in the near future!',
  },
  sp: {
    greeting: 'Hola Kristy, ¡hasta pronto!',
    dateTime: 'Lunes 16 de noviembre a las 11:00',
    consultationDetail: 'Consulta (30 minutos)',
    employee: ' con John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Inglaterra, GB',
    text: '¡Tu cita ahora está cancelada!',
    message: '¡Nos encantaría volver a verlo en un futuro próximo!',
  },
  fr: {
    greeting: 'Salut Kristy, à bientôt!',
    dateTime: 'Lundi 16 novembre à 11:00',
    consultationDetail: 'Consultation (30 min)',
    employee: ' avec John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Votre rendez-vous est maintenant annulé!',
    message: 'nous serions ravis de vous revoir dans un proche avenir!',
  },
  ru: {
    greeting: 'Привет, Кристи, до скорой встречи!',
    dateTime: 'Понедельник, 16 ноября в 11:00',
    consultationDetail: 'Консультация (30 минут)',
    employee: ' с Джоном Смитом',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Ваша встреча отменена!',
    message: 'мы будем рады снова увидеть Ту в ближайшем будущем!',
  },
  ar: {
    greeting: 'مرحبًا كريستي ، أراك قريبًا!',
    dateTime: 'الاثنين 16 نوفمبر الساعة 11:00',
    consultationDetail: 'استشارة (30 دقيقة)',
    employee: ' مع جون سميث',
    title: 'M-A لتصفيف الشعر وسبا',
    address: '574 طريق بيفرلي ، H3454 ، إنجلترا ، GB',
    text: 'تم إلغاء موعدك الآن!',
    message: 'نود رؤيتك مرة أخرى في المستقبل القريب!',
  },
  bg: {
    greeting: 'Здравей, Кристи, до скоро!',
    dateTime: 'Понеделник, 16 ноември от 11:00',
    consultationDetail: 'Консултация (30 минути)',
    employee: ' с Джон Смит',
    title: 'M-A Фризьорство и Спа',
    address: '574 Beferly Road, H3454, Англия, Великобритания',
    text: 'Вашата среща вече е отменена!',
    message: 'бихме се радвали да видим Tou отново в близко бъдеще!',
  },
  cs: {
    greeting: 'Ahoj Kristy, uvidíme se brzy!',
    dateTime: 'Pondělí 16. listopadu v 11:00',
    consultationDetail: 'Konzultace (30 minut)',
    employee: ' s Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Vaše schůzka je nyní zrušena!',
    message: 'rádi bychom se v blízké budoucnosti znovu setkali!',
  },
  da: {
    greeting: 'Hej Kristy, vi ses snart!',
    dateTime: 'Mandag 16. november kl. 11:00',
    consultationDetail: 'Konsultation (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Din aftale er nu annulleret!',
    message: 'Vi vil meget gerne se tou igen i den nærmeste fremtid!',
  },
  hu: {
    greeting: 'Szia Kristy, hamarosan találkozunk!',
    dateTime: 'November 16., hétfő, 11:00',
    consultationDetail: 'Konzultáció (30 perc)',
    employee: ' John Smith-szel',
    title: 'M-A hajviselet és fürdő',
    address: '574 Beferly Road, H3454, Anglia, GB',
    text: 'Időpontját most törölték!',
    message: 'szívesen látnánk a tou-t a közeljövőben!',
  },
  lv: {
    greeting: 'Sveika Kristij, tiekamies drīz!',
    dateTime: 'Pirmdien, 16. novembrī, pulksten 11:00',
    consultationDetail: 'Konsultācijas (30 min)',
    employee: ' ar Džonu Smitu',
    title: 'M-A matu apstrāde un spa',
    address: '574 Beferly Road, H3454, Anglija, GB',
    text: 'Jūsu tikšanās tagad ir atcelta!',
    message: 'mēs labprāt tuvākajā nākotnē atkal redzētu tou!',
  },
  no: {
    greeting: 'Hei Kristy, vi sees snart!',
    dateTime: 'Mandag 16. november kl 11:00',
    consultationDetail: 'Konsultasjon (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Din avtale er nå kansellert!',
    message: 'Vi vil gjerne se tou igjen i nær fremtid!',
  },
  pl: {
    greeting: 'Cześć Kristy, do zobaczenia wkrótce!',
    dateTime: 'Poniedziałek, 16 listopada o godzinie 11:00',
    consultationDetail: 'Konsultacja (30 min)',
    employee: ' z Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, Wielka Brytania',
    text: 'Twoje spotkanie jest teraz odwołane!',
    message: 'chcielibyśmy ponownie zobaczyć tou w najbliższej przyszłości!',
  },
  sw: {
    greeting: 'Hej Kristy, vi ses snart!',
    dateTime: 'Måndag 16 november kl 11:00',
    consultationDetail: 'Konsultation (30 minuter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    text: 'Ditt möte avbryts nu!',
    message: 'vi skulle gärna se tou igen inom en snar framtid!',
  },
  ro: {
    greeting: 'Bună Kristy, ne vedem în curând!',
    dateTime: 'Luni, 16 noiembrie la 11:00',
    consultationDetail: 'Consultare (30 de minute)',
    employee: ' cu John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, GB',
    text: 'Programarea dvs. este anulată!',
    message: 'ne-ar plăcea să vedem din nou în viitorul apropiat!',
  },
}

const CancelAppointmentPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  showEmployeeName,
  showService,
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

  const getFlag = (country) => {
    switch (country) {
      case 'EN':
        return ENSVG
      case 'FR':
        return FRSVG
      case 'SP':
        return SPSVG
      case 'AR':
        return ARSVG
      case 'BG':
        return BGSVG
      case 'CS':
        return CSSVG
      case 'DA':
        return DASVG
      case 'HU':
        return HUSVG
      case 'LV':
        return LVSVG
      case 'NO':
        return NOSVG
      case 'PL':
        return PLSVG
      case 'SW':
        return SWSVG
      case 'RO':
        return ROSVG
      case 'RU':
        return RUSVG
    }
  }
  return (
    <div>
      {standardTapIndex === '1' ? (
        <EmailSmsPreview
          greeting={'Hi Maria,'}
          footerIconGroup={true}
          previewButtonGroup={false}
          previewCustomStatus={'email'}
          activeSocialIcons={activeSocialIcons}
          backGroundColor={backGroundColor}
          isFooterText={true}
          footerText={informationMessage}
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
        >
          <CancelAClassBooking
            dateTime={selectLangData.dateTime}
            text={selectLangData.text}
            consultancyName={selectLangData.title}
            consultationDetail={
              showService
                ? showEmployeeName
                  ? `${selectLangData.consultationDetail}${selectLangData.employee}`
                  : `${selectLangData.consultationDetail}`
                : ''
            }
            address={selectLangData.address}
            message={selectLangData.message}
            buttonColor={buttonColor}
          />
        </EmailSmsPreview>
      ) : (
        <div
          className={styles.cardAddTemplateContainer}
          style={{ backgroundColor: backGroundColor }}
        >
          <Button type="default" className={styles.addTemplateTxt}>
            <img src={getFlag(selectLanguage)} alt="" />
            &nbsp;+ Add Template
          </Button>
        </div>
      )}
    </div>
  )
}

export default CancelAppointmentPreview
