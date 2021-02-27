import React, { FC } from 'react'
import { Button, EmailSmsPreview, BookedOntoClass } from '@pabau/ui'
import { getFlag } from '../../../mocks/utils'
import styles from './index.module.less'

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
  dateTime: string
  consultationDetail: string
  employee: string
  title: string
  address: string
  message: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Kristy, see you soon!',
    dateTime: 'Monday, 16 November at 11:00',
    consultationDetail: 'Consultation (30 mins)',
    employee: ' with John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'We look forward to seeing you then!',
  },
  sp: {
    greeting: 'Hola Kristy, ¡hasta pronto!',
    dateTime: 'Lunes 16 de noviembre a las 11:00',
    consultationDetail: 'Consulta (30 minutos)',
    employee: ' con John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Inglaterra, GB',
    message: '¡Esperamos verte entonces!',
  },
  fr: {
    greeting: 'Salut Kristy, à bientôt!',
    dateTime: 'Lundi 16 novembre à 11:00',
    consultationDetail: 'Consultation (30 min)',
    employee: ' avec John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Nous attendons avec impatience de vous voir alors!',
  },
  ru: {
    greeting: 'Привет, Кристи, до скорой встречи!',
    dateTime: 'Понедельник, 16 ноября в 11:00',
    consultationDetail: 'Консультация (30 минут)',
    employee: ' с Джоном Смитом',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Мы с нетерпением ждем встречи с вами!',
  },
  ar: {
    greeting: 'مرحبًا كريستي ، أراك قريبًا!',
    dateTime: 'الاثنين 16 نوفمبر الساعة 11:00',
    consultationDetail: 'استشارة (30 دقيقة)',
    employee: ' مع جون سميث',
    title: 'M-A لتصفيف الشعر وسبا',
    address: '574 طريق بيفرلي ، H3454 ، إنجلترا ، GB',
    message: 'نحن نتطلع لرؤيتك بعد ذلك!',
  },
  bg: {
    greeting: 'Здравей, Кристи, до скоро!',
    dateTime: 'Понеделник, 16 ноември от 11:00',
    consultationDetail: 'Консултация (30 минути)',
    employee: ' с Джон Смит',
    title: 'M-A Фризьорство и Спа',
    address: '574 Beferly Road, H3454, Англия, Великобритания',
    message: 'Очакваме Ви с нетърпение тогава!',
  },
  cs: {
    greeting: 'Ahoj Kristy, uvidíme se brzy!',
    dateTime: 'Pondělí 16. listopadu v 11:00',
    consultationDetail: 'Konzultace (30 minut)',
    employee: ' s Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Těšíme se na setkání s vámi!',
  },
  da: {
    greeting: 'Hej Kristy, vi ses snart!',
    dateTime: 'Mandag 16. november kl. 11:00',
    consultationDetail: 'Konsultation (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Vi ser frem til at se dig da!',
  },
  hu: {
    greeting: 'Szia Kristy, hamarosan találkozunk!',
    dateTime: 'November 16., hétfő, 11:00',
    consultationDetail: 'Konzultáció (30 perc)',
    employee: ' John Smith-szel',
    title: 'M-A hajviselet és fürdő',
    address: '574 Beferly Road, H3454, Anglia, GB',
    message: 'Szeretettel várunk benneteket akkor!',
  },
  lv: {
    greeting: 'Sveika Kristij, tiekamies drīz!',
    dateTime: 'Pirmdien, 16. novembrī, pulksten 11:00',
    consultationDetail: 'Konsultācijas (30 min)',
    employee: ' ar Džonu Smitu',
    title: 'M-A matu apstrāde un spa',
    address: '574 Beferly Road, H3454, Anglija, GB',
    message: 'Gaidīsim jūs toreiz!',
  },
  no: {
    greeting: 'Hei Kristy, vi sees snart!',
    dateTime: 'Mandag 16. november kl 11:00',
    consultationDetail: 'Konsultasjon (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Vi gleder oss til å se deg da!',
  },
  pl: {
    greeting: 'Cześć Kristy, do zobaczenia wkrótce!',
    dateTime: 'Poniedziałek, 16 listopada o godzinie 11:00',
    consultationDetail: 'Konsultacja (30 min)',
    employee: ' z Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, Wielka Brytania',
    message: 'Z niecierpliwością czekamy na spotkanie z Państwem!',
  },
  sw: {
    greeting: 'Hej Kristy, vi ses snart!',
    dateTime: 'Måndag 16 november kl 11:00',
    consultationDetail: 'Konsultation (30 minuter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    message: 'Vi ser fram emot att träffa dig då!',
  },
  ro: {
    greeting: 'Bună Kristy, ne vedem în curând!',
    dateTime: 'Luni, 16 noiembrie la 11:00',
    consultationDetail: 'Consultare (30 de minute)',
    employee: ' cu John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, GB',
    message: 'Așteptăm cu nerăbdare atunci!',
  },
}

const BookedOntoClassPreview: FC<P> = ({
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
          <BookedOntoClass
            dateTime={selectLangData.dateTime}
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

export default BookedOntoClassPreview
