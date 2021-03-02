import React, { FC } from 'react'
import { EmailSmsPreview, Invoices } from '@pabau/ui'
import CustomTemplate from '../CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
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
  message2: string
  message3: string
  senderFirstName: string
  footerText: string
  footerText2: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Anna,',
    message: 'I hope you are well.',
    message1:
      ' I just wanted to drop you a quick note to remind you that 02/03/2021 in respect of our invoice 00001 is due for payment on 31/03/2021.',
    message2:
      'I would be really grateful if you could confirm that everything is on track for payment.',
    message3: 'Best regards,',
    senderFirstName: 'Rina',
    footerText: 'Looking forward to hearing from you soon,',
    footerText2: ' Your friends at The Clinic',
  },
  sp: {
    greeting: 'Hola Anna,',
    message: 'Espero que te encuentres bien.',
    message1:
      'Solo quería dejarle una nota rápida para recordarle que el 02/03/2021 con respecto a nuestra factura 00001 debe pagarse el 31/03/2021.',
    message2:
      'Le agradecería mucho si pudiera confirmar que todo está bien encaminado para el pago.',
    message3: 'Atentamente,',
    senderFirstName: 'Rina',
    footerText: 'Espero poder oír de ti pronto,',
    footerText2: 'Tus amigos en The Clinic',
  },
  fr: {
    greeting: 'Bonjour Anna,',
    message: "J'espère que tu vas bien.",
    message1:
      'Je voulais juste vous déposer un petit mot pour vous rappeler que le 02/03/2021 concernant notre facture 00001 doit être réglé le 31/03/2021.',
    message2:
      'Je vous serais très reconnaissant de bien vouloir confirmer que tout est en bonne voie pour le paiement.',
    message3: 'Meilleures salutations,',
    senderFirstName: 'Rina',
    footerText: 'Au plaisir de vous entendre bientôt,',
    footerText2: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Привет Анна,',
    message: 'Я надеюсь, что с тобой все в порядке.',
    message1:
      'Я просто хотел написать вам небольшое примечание, чтобы напомнить вам, что 02/03/2021 в отношении нашего счета 00001 подлежит оплате 31/03/2021.',
    message2:
      'Буду очень признателен, если вы подтвердите, что все идет к оплате.',
    message3: 'С наилучшими пожеланиями,',
    senderFirstName: 'Рина',
    footerText: 'С нетерпением ждем от вас в ближайшее время,',
    footerText2: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'مرحبا آنا،',
    message: 'أتمنى أن تكون جيد.',
    message1:
      'أردت فقط أن أرسل إليك ملاحظة سريعة لتذكيرك بأن 02/03/2021 بخصوص فاتورتنا 00001 مستحقة السداد في 31/03/2021.',
    message2:
      'سأكون ممتنًا حقًا إذا أمكنك تأكيد أن كل شيء على المسار الصحيح للدفع.',
    message3: 'تحياتي الحارة،',
    senderFirstName: 'رينا',
    footerText: 'نتطلع الى الاستماع منك قريبا،',
    footerText2: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Здравей Ана,',
    message: 'Надявам се, че си добре.',
    message1:
      'Просто исках да ви пусна бърза бележка, за да ви напомня, че на 02.03.2021 г. по отношение на нашата фактура 00001 се дължи плащане на 31.03.2021 г.',
    message2:
      'Ще бъда наистина благодарен, ако можете да потвърдите, че всичко е на път за плащане.',
    message3: 'С Най-Добри Пожелания,',
    senderFirstName: 'Рина',
    footerText: 'Очакваме да се чуем скоро,',
    footerText2: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Ahoj Anna,',
    message: 'Dúfam, že sa máš dobre.',
    message1:
      'Chcel by som vám zanechať krátku poznámku, ktorá vám pripomína, že dátum 02/03/2021, pokiaľ ide o našu faktúru 00001, je splatný dňa 31/03/2021.',
    message2:
      'Bol by som skutočne vďačný, keby ste mohli potvrdiť, že je všetko na dobrej ceste k platbe.',
    message3: 'S Pozdravom,',
    senderFirstName: 'Rina',
    footerText: 'Tešíme sa, až sa vám čoskoro ozveme,',
    footerText2: 'Vaši priatelia na klinike',
  },
  da: {
    greeting: 'Hej Anna,',
    message: 'Jeg håber du har det godt.',
    message1:
      'Jeg vil bare sende dig en hurtig note for at minde dig om, at 02/03/2021 med hensyn til vores faktura 00001 forfalder til betaling den 31/03/2021.',
    message2:
      'Jeg ville være meget taknemmelig, hvis du kunne bekræfte, at alt er på rette vej til betaling.',
    message3: 'Med venlig hilsen,',
    senderFirstName: 'Rina',
    footerText: 'Ser frem til at høre fra dig snart,',
    footerText2: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Szia Anna,',
    message: 'Remélem jól vagytok.',
    message1:
      'Csak egy gyors megjegyzést akartam küldeni, hogy emlékeztessem önöket arra, hogy a 00001-es számla vonatkozásában 21/03/2021 fizetési határideje: 2021.03.31.',
    message2:
      'Nagyon hálás lennék, ha megerősítené, hogy minden rendben van a fizetéshez.',
    message3: 'Üdvözlettel,',
    senderFirstName: 'Rina',
    footerText: 'Alig várom, hogy hamarosan értesülhessek tőled,',
    footerText2: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Labas, Anna,',
    message: 'Tikiuosi, kad tau viskas gerai.',
    message1:
      'Tiesiog norėjau atsiųsti jums trumpą pastabą, kad priminčiau, kad 2002 m. Kovo 2 d. Mūsų sąskaita 00001 turi būti sumokėta 2021 m.',
    message2:
      'Būčiau tikrai dėkingas, jei galėtumėte patvirtinti, kad viskas yra mokama.',
    message3: 'Geriausi linkėjimai,',
    senderFirstName: 'Rina',
    footerText: 'Lauksiu Jūsų atsakymo,',
    footerText2: 'Jūsų draugai klinikoje',
  },
  no: {
    greeting: 'Hei Anna,',
    message: 'Jeg håper du har det bra.',
    message1:
      'Jeg vil bare gi deg et raskt notat for å minne deg om at 02/03/2021 med hensyn til fakturaen vår 00001 forfaller til betaling den 31.03.2021.',
    message2:
      'Jeg ville være veldig takknemlig hvis du kunne bekrefte at alt er i rute for betaling.',
    message3: 'Med vennlig hilsen,',
    senderFirstName: 'Rina',
    footerText: 'Ser frem til å høre fra deg snart,',
    footerText2: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Cześć Anna,',
    message: 'Mam nadzieję, że masz się dobrze.',
    message1:
      'Chciałem tylko wysłać krótką notatkę, aby przypomnieć, że 02.03.2021 w odniesieniu do naszej faktury 00001 należy zapłacić 31.03.2021.',
    message2:
      'Byłbym bardzo wdzięczny, gdyby mógł Pan potwierdzić, że wszystko jest na dobrej drodze do zapłaty.',
    message3: 'Z poważaniem,',
    senderFirstName: 'Rina',
    footerText: 'Czekamy na wiadomość od Ciebie wkrótce,',
    footerText2: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Hej Anna,',
    message: 'Jag hoppas du mår bra.',
    message1:
      'Jag ville bara ge dig en snabb anteckning för att påminna dig om att 02/03/2021 med avseende på vår faktura 00001 förfaller till betalning den 31/03/2021.',
    message2:
      'Jag skulle vara väldigt tacksam om du kunde bekräfta att allt är på rätt väg för betalning.',
    message3: 'Vänliga hälsningar,',
    senderFirstName: 'Rina',
    footerText: 'Ser fram emot att höra från dig snart,',
    footerText2: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Bună Anna,',
    message: 'Sper că subteți bine.',
    message1:
      'Am vrut doar să vă trimit o notă rapidă pentru a vă reaminti că 02/03/2021 în legătură cu factura noastră 00001 trebuie plătită la 31/03/2021.',
    message2:
      'Aș fi foarte recunoscător dacă ați putea confirma că totul este pe cale de plată.',
    message3: 'Toate cele bune,',
    senderFirstName: 'Rina',
    footerText: 'De abia astept sa ne auzim in curand,',
    footerText2: 'Prietenii tăi de la clinică',
  },
}

const OutstandingInvoicePreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  buttonColor,
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
          greeting={selectLangData.greeting}
          footerIconGroup={true}
          previewButtonGroup={false}
          previewCustomStatus={'email'}
          activeSocialIcons={activeSocialIcons}
          backGroundColor={backGroundColor}
          isFooterText={true}
          footerText={informationMessage}
          footer={activeSocialIcons.length > 0 || informationMessage.length > 0}
          buttonColor={buttonColor}
        >
          <Invoices
            message={selectLangData.message}
            message1={selectLangData.message1}
            message2={selectLangData.message2}
            message3={selectLangData.message3}
            footerText={
              selectLangData.footerText + ' <br> ' + selectLangData.footerText2
            }
            senderFirstName={selectLangData.senderFirstName}
            showInvoiceButton={false}
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

export default OutstandingInvoicePreview
