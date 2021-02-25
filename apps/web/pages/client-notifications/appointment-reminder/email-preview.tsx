import React, { FC } from 'react'

interface LangData {
  [key: string]: Email
}

interface Email {
  greeting: string
  detail: string
  date: string
  reschedule: string
  service: string
  employee: string
  title: string
  address: string
  cancelButton: string
  confirmButton: string
  policy: string
  cancelPolicy: string
  complete: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Kristy, see you soon!',
    detail: 'Appointment details:',
    date: 'Monday, 16 November at 11:00',
    reschedule: 'Reschedule',
    service: 'Consultation (30 mins)',
    employee: ' with John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Cancel appointment',
    confirmButton: 'Confirm appointment',
    policy: '*Please, avoid cancelling within 48 hours notice',
    cancelPolicy: 'Cancellation policy',
    complete: 'Complete Medical History',
  },
  sp: {
    greeting: 'Hola Kristy, ¡hasta pronto!',
    detail: 'Detalles de la cita:',
    date: 'Lunes 16 de noviembre a las 11:00',
    reschedule: 'Reprogramar',
    service: 'Consulta (30 minutos)',
    employee: ' con John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Inglaterra, GB',
    cancelButton: 'Cancelar cita',
    confirmButton: 'Confirmar cita',
    policy: '* Por favor, evite cancelar con 48 horas de anticipación',
    cancelPolicy: 'Política de cancelación',
    complete: 'Complete Medical History',
  },
  fr: {
    greeting: 'Salut Kristy, à bientôt!',
    detail: 'Détails du rendez-vous:',
    date: 'Lundi 16 novembre à 11:00',
    reschedule: 'Replanifier',
    service: 'Consultation (30 min)',
    employee: ' avec John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Annuler rendez-vous',
    confirmButton: 'Confirmer le rendez-vous',
    policy: '* Veuillez éviter dannuler dans les 48 heures davis',
    cancelPolicy: 'Politique dannulation',
    complete: 'Histoire médicale complète',
  },
  ru: {
    greeting: 'Привет, Кристи, до скорой встречи!',
    detail: 'Сведения о встрече:',
    date: 'Понедельник, 16 ноября в 11:00',
    reschedule: 'Перенести график',
    service: 'Консультация (30 минут)',
    employee: ' с Джоном Смитом',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Отменить встречу',
    confirmButton: 'Подтвердить встречу',
    policy: '* Пожалуйста, избегайте отмены в течение 48 часов.',
    cancelPolicy: 'Политика отмены',
    complete: 'Полная медицинская история',
  },
  ar: {
    greeting: 'مرحبًا كريستي ، أراك قريبًا!',
    detail: 'تفاصيل الموعد:',
    date: 'الاثنين 16 نوفمبر الساعة 11:00',
    reschedule: 'إعادة الجدولة',
    service: 'استشارة (30 دقيقة)',
    employee: ' مع جون سميث',
    title: 'M-A لتصفيف الشعر وسبا',
    address: '574 طريق بيفرلي ، H3454 ، إنجلترا ، GB',
    cancelButton: 'إلغاء التعيين',
    confirmButton: 'تأكيد الموعد',
    policy: '* من فضلك ، تجنب الإلغاء خلال 48 ساعة من الإشعار',
    cancelPolicy: 'سياسة الإلغاء',
    complete: 'التاريخ الطبي الكامل',
  },
  bg: {
    greeting: 'Здравей, Кристи, до скоро!',
    detail: 'Подробности за назначаването:',
    date: 'Понеделник, 16 ноември от 11:00',
    reschedule: 'Разсрочване',
    service: 'Консултация (30 минути)',
    employee: ' с Джон Смит',
    title: 'M-A Фризьорство и Спа',
    address: '574 Beferly Road, H3454, Англия, Великобритания',
    cancelButton: 'Отмяна на среща',
    confirmButton: 'Потвърдете срещата',
    policy: '* Моля, избягвайте анулиране в рамките на 48 часа предизвестие',
    cancelPolicy: 'Политика за анулиране',
    complete: 'Пълна медицинска история',
  },

  cs: {
    greeting: 'Ahoj Kristy, uvidíme se brzy!',
    detail: 'Podrobnosti o schůzce:',
    date: 'Pondělí 16. listopadu v 11:00',
    reschedule: 'Přeplánovat',
    service: 'Konzultace (30 minut)',
    employee: ' s Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Zrušit schůzku',
    confirmButton: 'Potvrďte schůzku',
    policy: '* Prosím, vyhněte se zrušení do 48 hodin od oznámení',
    cancelPolicy: 'Storno podmínky',
    complete: 'Kompletní anamnéza',
  },

  da: {
    greeting: 'Hej Kristy, vi ses snart!',
    detail: 'Udnævnelsesoplysninger:',
    date: 'Mandag 16. november kl. 11:00',
    reschedule: 'Planlæg om',
    service: 'Konsultation (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Annuller aftale',
    confirmButton: 'Bekræft aftale',
    policy: '* Undgå at annullere inden for 48 timers varsel',
    cancelPolicy: 'Afbestillingspolitik',
    complete: 'Komplet medicinsk historie',
  },
  hu: {
    greeting: 'Szia Kristy, hamarosan találkozunk!',
    detail: 'Kinevezés részletei:',
    date: 'November 16., hétfő, 11:00',
    reschedule: 'Átütemezés',
    service: 'Konzultáció (30 perc)',
    employee: ' John Smith-szel',
    title: 'M-A hajviselet és fürdő',
    address: '574 Beferly Road, H3454, Anglia, GB',
    cancelButton: 'A találkozó lemondása',
    confirmButton: 'Erősítse meg a kinevezést',
    policy: '* Kérjük, kerülje a lemondást 48 órán belül',
    cancelPolicy: 'Lemondási feltételek',
    complete: 'Teljes kórtörténet',
  },
  lv: {
    greeting: 'Sveika Kristij, tiekamies drīz!',
    detail: 'Informācija par iecelšanu amatā:',
    date: 'Pirmdien, 16. novembrī, pulksten 11:00',
    reschedule: 'Pārplānojiet',
    service: 'Konsultācijas (30 min)',
    employee: ' ar Džonu Smitu',
    title: 'M-A matu apstrāde un spa',
    address: '574 Beferly Road, H3454, Anglija, GB',
    cancelButton: 'Atcelt tikšanos',
    confirmButton: 'Apstipriniet iecelšanu',
    policy: '* Lūdzu, izvairieties no atcelšanas 48 stundu iepriekš',
    cancelPolicy: 'Anulēšanas politika',
    complete: 'Pilnīga medicīniskā vēsture',
  },
  no: {
    greeting: 'Hei Kristy, vi sees snart!',
    detail: 'Avtaledetaljer:',
    date: 'Mandag 16. november kl 11:00',
    reschedule: 'Planlegge på nytt',
    service: 'Konsultasjon (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Avbryt avtalen',
    confirmButton: 'Bekreft avtale',
    policy: '* Vennligst unngå kansellering innen 48 timers varsel',
    cancelPolicy: 'Avbestillingsregler',
    complete: 'Komplett medisinsk historie',
  },
  pl: {
    greeting: 'Cześć Kristy, do zobaczenia wkrótce!',
    detail: 'Szczegóły wizyty:',
    date: 'Poniedziałek, 16 listopada o godzinie 11:00',
    reschedule: 'Przełóż',
    service: 'Konsultacja (30 min)',
    employee: ' z Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, Wielka Brytania',
    cancelButton: 'Odwołać spotkanie',
    confirmButton: 'Potwierdź spotkanie',
    policy:
      '* Prosimy o unikanie anulowania w ciągu 48 godzin od powiadomienia',
    cancelPolicy: 'Zasady anulowania',
    complete: 'Pełna historia medyczna',
  },
  sw: {
    greeting: 'Hej Kristy, vi ses snart!',
    detail: 'Tidsinformation:',
    date: 'Måndag 16 november kl 11:00',
    reschedule: 'Boka om',
    service: 'Konsultation (30 minuter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Avbryt mötet',
    confirmButton: 'Bekräfta mötet',
    policy: '* Undvik att avbryta inom 48 timmar',
    cancelPolicy: 'Avbokningsregler',
    complete: 'Komplett medicinsk historia',
  },
  ro: {
    greeting: 'Bună Kristy, ne vedem în curând!',
    detail: 'Detalii despre programare:',
    date: 'Luni, 16 noiembrie la 11:00',
    reschedule: 'Reprogramează',
    service: 'Consultare (30 de minute)',
    employee: ' cu John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, GB',
    cancelButton: 'Anulați programarea',
    confirmButton: 'Confirmați programarea',
    policy: '* Vă rugăm să evitați anularea în termen de 48 de ore',
    cancelPolicy: 'Politica de anulare',
    complete: 'Istoric medical complet',
  },
}

interface P {
  title?: string
  iconPath?: string
  appointDate?: string
  service?: string
  name?: string
  content?: string
  address?: string
  note?: string
  medicalHistory?: string
  information?: string
  requestConfirm?: boolean
  allowRescheduling?: boolean
  allowCancellation?: boolean
  displayPolicy?: boolean
  showService?: boolean
  showEmployeeName?: boolean
  addMedicalHisButton?: boolean
  selectLanguage: string
  backGroundColor?: string
  buttonColor?: string
  informationMessage?: string
  medicalMessage?: string
  standardTapIndex?: string
  activeSocialIcons?: string[]
}

export const AppointmentEmailPreview: FC<P> = ({
  requestConfirm,
  allowRescheduling,
  allowCancellation,
  displayPolicy,
  showService,
  showEmployeeName,
  addMedicalHisButton,
  selectLanguage,
  informationMessage,
  medicalMessage,
  backGroundColor,
  buttonColor,
  activeSocialIcons = [],
}) => {
  const [selectLangData, setSelectLangData] = React.useState<Email>(
    langData[selectLanguage?.toLowerCase() || 'en']
  )

  // const selectLangData = langData['en']
  React.useEffect(() => {
    if (langData[`${selectLanguage?.toLowerCase()}`]) {
      setSelectLangData({ ...langData[`${selectLanguage.toLowerCase()}`] })
    }
  }, [selectLanguage])

  function setSocialIcon(value) {
    if (value.includes('facebook')) {
      return (
        <img
          src={
            'https://i.pinimg.com/564x/51/d3/66/51d366ff959f153a09c2dca347ab7855.jpg'
          }
          width="13px"
          height="13px"
          alt={'fb'}
          style={{ padding: '5px' }}
        />
      )
    } else if (value.includes('linksIn')) {
      return (
        <img
          src={
            'https://icons-for-free.com/iconfiles/png/512/linked+in+linkedin+logo+social+square+icon-1320086773461479453.png'
          }
          width="13px"
          height="13px"
          alt={'in'}
          style={{ padding: '5px' }}
        />
      )
    } else if (value.includes('instagram')) {
      return (
        <img
          src={
            'https://www.citypng.com/public/uploads/preview/-11590150289tqivt8c6o1.png'
          }
          width="13px"
          height="13px"
          alt={'insta'}
          style={{ padding: '5px' }}
        />
      )
    } else if (value.includes('twitter')) {
      return (
        <img
          src={
            'https://listimg.pinclipart.com/picdir/s/190-1902138_twitter-square-black-and-white-icon-logo-vector.png'
          }
          width="13px"
          height="13px"
          alt={'twitter'}
          style={{ padding: '5px' }}
        />
      )
    }
  }
  return (
    <div
      style={{
        backgroundColor: backGroundColor || '#fff',
        padding: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif !important',
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.65)',
        width: '440px',
        maxWidth: '440px',
        margin: '40px auto',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.35)',
        border: '2px solid rgba(0,0,0,0.06)',
      }}
    >
      <table cellSpacing="0" cellPadding="0" width="100%">
        <tr>
          <td>
            <div
              style={{
                borderBottom: '50px solid transparent',
                textAlign: 'center',
              }}
            >
              <img
                src="https://seeklogo.com/images/N/normal-clinic-logo-190E3BCE57-seeklogo.com.png"
                alt={'logo'}
                width={'85px'}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '4px 0' }}>
            <span
              style={{
                fontSize: '20px',
                lineHeight: '18px',
                color: 'rgba(0, 0, 0, 0.65)',
              }}
            >
              {selectLangData.greeting}
            </span>
          </td>
        </tr>
        <tr>
          <td
            style={{
              margin: '24px 0 14px 0',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'block',
            }}
          ></td>
        </tr>
        <tr>
          <td style={{ padding: '4px 0' }}>
            <div
              style={{
                fontSize: '13px',
                color: 'rgba(0, 0, 0, 0.65)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={
                  'https://i.pinimg.com/originals/b0/b8/5c/b0b85cd8797638d0c80035f572b0cbd3.jpg'
                }
                width="13px"
                height="13px"
                alt={'calender'}
                style={{ padding: '5px 0' }}
              />

              <span style={{ marginLeft: '5px', lineHeight: '23px' }}>
                {selectLangData.detail}
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '4px 0' }}>
            <span
              style={{
                fontSize: '13px',
                color: 'rgba(0, 0, 0, 0.65)',
                marginRight: '8px',
              }}
            >
              {selectLangData.date}
            </span>
            {allowRescheduling && (
              <button
                style={{
                  fontSize: '10px',
                  color: '#00a1e1',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                  padding: '4px 1em',
                  background: 'transparent',
                  borderColor: 'transparent',
                  boxShadow: 'none',
                  outline: 'none',
                }}
              >
                {selectLangData.reschedule}
              </button>
            )}
          </td>
        </tr>
        <tr>
          <td>
            {showService && (
              <div>
                <span>
                  {selectLangData.service}{' '}
                  {showEmployeeName ? selectLangData.employee : ''}
                </span>
              </div>
            )}
          </td>
        </tr>
        <tr>
          <td style={{ padding: '4px 0' }}>
            <span
              style={{
                fontSize: '13px',
                lineHeight: '18px',
                fontWeight: 'bold',
              }}
            >
              {selectLangData.title}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: '10px' }}>
            <span style={{ fontSize: '10px', lineHeight: '15px' }}>
              {selectLangData.address}
            </span>
          </td>
        </tr>
        <tr>
          <td style={{ paddingBottom: '8px' }}>
            <table cellSpacing="0" cellPadding="0" width="100%">
              <tr>
                <td>
                  {allowCancellation && (
                    <div style={{ padding: '8px 0' }}>
                      <button
                        style={{
                          border: '1px solid #00a1e1',
                          background: buttonColor || '#fff',
                          color: '#00a1e1',
                          fontSize: '0.8rem',
                          borderRadius: '4px',
                          letterSpacing: '0.05em',
                          padding: '4px 1em',
                          lineHeight: '1.5715',
                          fontWeight: 400,
                          boxShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
                          outline: 'none',
                        }}
                      >
                        {selectLangData.cancelButton}
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  {requestConfirm && (
                    <div style={{ padding: '8px 0' }}>
                      <button
                        style={{
                          border: '1px solid #54b2d3',
                          background: buttonColor || '#54b2d3',
                          color: '#fff',
                          fontSize: '0.8rem',
                          borderRadius: '4px',
                          letterSpacing: '0.05em',
                          padding: '4px 1em',
                          lineHeight: '1.5715',
                          fontWeight: 400,
                          boxShadow: '0 2px 0 rgba(0, 0, 0, 0.05)',
                          textShadow: '0 -1px 0 rgba(0, 0, 0, 0.12)',
                          outline: 'none',
                        }}
                      >
                        {selectLangData.confirmButton}
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        {displayPolicy && (
          <>
            <tr>
              <td style={{ padding: '4px 0' }}>
                <span>{selectLangData.policy}</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <button
                  style={{
                    fontSize: '10px',
                    color: '#00a1e1',
                    borderRadius: '4px',
                    letterSpacing: '0.05em',
                    padding: '4px 1em',
                    background: 'transparent',
                    borderColor: 'transparent',
                    lineHeight: '1.5715',
                    fontWeight: 400,
                    outline: 'none',
                  }}
                >
                  {selectLangData.cancelPolicy}
                </button>
              </td>
            </tr>
          </>
        )}

        <tr>
          <td
            style={{
              margin: '24px 0 14px 0',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'block',
            }}
          ></td>
        </tr>

        <tr>
          <td style={{ paddingBottom: '20px' }}>
            <span>{medicalMessage}</span>
          </td>
        </tr>
        <tr>
          <td align="center">
            {addMedicalHisButton && (
              <button
                style={{
                  border: '1px solid #00a1e1',
                  background: buttonColor || '#fff',
                  color: '#00a1e1',
                  fontSize: '0.8rem',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                  padding: '4px 1em',
                  lineHeight: '1.5715',
                  fontWeight: 400,
                  boxShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
                  outline: 'none',
                }}
              >
                {selectLangData.complete}
              </button>
            )}
          </td>
        </tr>
        <tr>
          <td align="center" style={{ paddingTop: '20px' }}>
            <span>{informationMessage}</span>
          </td>
        </tr>
        <tr>
          <td align="center" style={{ paddingTop: '20px' }}>
            {activeSocialIcons.map((value, index) => setSocialIcon(value))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AppointmentEmailPreview
