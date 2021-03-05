import React, { FC } from 'react'
import { EmailSmsPreview, DocumentShared } from '@pabau/ui'
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
  messageLine1: string
  messageLine2: string
  closingText: string
  signatureBlock: string
  infoText: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    messageLine1: 'You have received a new secure email',
    messageLine2: 'Please click the link below to access:',
    closingText: 'Kind regards,',
    signatureBlock: 'The Clinic Team',
    infoText:
      "We're required by EU law to send your personal information in an encrypted format. It is free to view and all you have to do is click on the link in the email below that reads \"Click to read this secure email online\". This will take you through to a secure page with 'Pabau'.",
  },
  sp: {
    greeting: 'Querida Sophia,',
    messageLine1: 'Ha recibido un nuevo correo electrónico seguro',
    messageLine2: 'Haga clic en el enlace de abajo para acceder:',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'El equipo de la clínica',
    infoText:
      'La legislación de la UE nos exige que enviemos su información personal en formato cifrado. La visualización es gratuita y todo lo que tiene que hacer es hacer clic en el enlace del correo electrónico a continuación que dice "Haga clic para leer este correo electrónico seguro en línea". Esto lo llevará a una página segura con \'Pabau\'.',
  },
  fr: {
    greeting: 'Chère Sophia,',
    messageLine1: 'Vous avez reçu un nouvel e-mail sécurisé',
    messageLine2: 'Veuillez cliquer sur le lien ci-dessous pour accéder:',
    closingText: 'Veuillez cliquer sur le lien ci-dessous pour accéder:',
    signatureBlock: "L'équipe de la clinique",
    infoText:
      "La législation européenne nous oblige à envoyer vos informations personnelles dans un format crypté. La consultation est gratuite et tout ce que vous avez à faire est de cliquer sur le lien dans l'e-mail ci-dessous qui indique «Cliquez pour lire cet e-mail sécurisé en ligne». Cela vous mènera à une page sécurisée avec «Pabau».",
  },
  ru: {
    greeting: 'Дорогая София,',
    messageLine1: 'Вы получили новое защищенное письмо',
    messageLine2: 'Щелкните ссылку ниже, чтобы получить доступ:',
    closingText: 'С уважением,',
    signatureBlock: 'Команда клиники',
    infoText:
      'По закону ЕС мы обязаны отправлять вашу личную информацию в зашифрованном формате. Его можно просмотреть бесплатно, и все, что вам нужно сделать, это щелкнуть ссылку в электронном письме ниже, которое гласит: «Щелкните, чтобы прочитать это защищенное электронное письмо в Интернете». Вы перейдете на защищенную страницу с «Пабау».',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    messageLine1: 'لقد تلقيت بريدًا إلكترونيًا جديدًا آمنًا',
    messageLine2: 'لقد تلقيت بريدًا إلكترونيًا جديدًا آمنًا',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'فريق العيادة',
    infoText:
      'نحن مطالبون بموجب قانون الاتحاد الأوروبي بإرسال معلوماتك الشخصية بتنسيق مشفر. العرض مجاني وكل ما عليك فعله هو النقر فوق الارتباط الموجود في البريد الإلكتروني أدناه والذي يقرأ "انقر لقراءة هذا البريد الإلكتروني الآمن عبر الإنترنت". سينقلك هذا إلى صفحة آمنة مع "باباو".',
  },
  bg: {
    greeting: 'Скъпа София,',
    messageLine1: 'Получихте нов защитен имейл',
    messageLine2: 'Получихте нов защитен имейл',
    closingText: 'Поздрави,',
    signatureBlock: 'Поздрави,',
    infoText:
      'От законодателството на ЕС се изисква да изпращаме вашата лична информация в криптиран формат. Той е безплатен за преглед и всичко, което трябва да направите, е да кликнете върху връзката в имейла по-долу, който гласи „Щракнете, за да прочетете този защитен имейл онлайн“. Това ще ви отведе до защитена страница с „Pabau“.',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    messageLine1: 'Obdrželi jste nový zabezpečený e-mail',
    messageLine2: 'Pro přístup prosím klikněte na odkaz níže:',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Tým kliniky',
    infoText:
      'Podle právních předpisů EU máme povinnost zasílat vaše osobní údaje v šifrovaném formátu. Je to zdarma k zobrazení a vše, co musíte udělat, je kliknout na odkaz v e-mailu níže s textem „Kliknutím přečtěte tento zabezpečený e-mail online“. Tím se dostanete na zabezpečenou stránku s „Pabau“',
  },
  da: {
    greeting: 'Kære Sophia,',
    messageLine1: 'Du har modtaget en ny sikker e-mail',
    messageLine2: 'Klik på nedenstående link for at få adgang:',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Klinikholdet',
    infoText:
      'Vi er forpligtet af EU-lovgivningen til at sende dine personlige oplysninger i krypteret format. Det er gratis at se, og alt hvad du skal gøre er at klikke på linket i nedenstående e-mail, der lyder "Klik for at læse denne sikre e-mail online". Dette fører dig videre til en sikker side med \'Pabau\'.',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    messageLine1: 'Klinikholdet',
    messageLine2: 'Klinikholdet',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A Klinika csapata',
    infoText:
      'Az uniós jogszabályok előírják, hogy személyes adatait titkosított formátumban küldjék el. Ingyenesen megtekinthető, és csak annyit kell tennie, hogy rákattint az alábbi e-mailben található linkre: "Kattintson ide, hogy olvassa el ezt a biztonságos e-mailt online". Ez egy biztonságos oldalra vezet a \'Pabau\' néven.',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    messageLine1: 'Jūs esat saņēmis jaunu drošu e-pastu',
    messageLine2: 'Lūdzu, noklikšķiniet uz saites zemāk, lai piekļūtu:',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Klīnikas komanda',
    infoText:
      'Saskaņā ar ES tiesību aktiem mums ir jānosūta jūsu personiskā informācija šifrētā formātā. To var brīvi apskatīt, un viss, kas jums jādara, ir noklikšķināt uz saites, kas atrodas zemāk esošajā e-pastā, kurā rakstīts "Noklikšķiniet, lai tiešsaistē izlasītu šo drošo e-pastu". Tādējādi jūs nokļūsiet drošā lapā ar “Pabau”.',
  },
  no: {
    greeting: 'Kjære Sophia,',
    messageLine1: 'Du har mottatt en ny sikker e-post',
    messageLine2: 'Klikk på lenken nedenfor for å få tilgang til:',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Klinikkteamet',
    infoText:
      'Vi er pålagt i henhold til EU-loven å sende din personlige informasjon i kryptert format. Det er gratis å se, og alt du trenger å gjøre er å klikke på lenken i e-posten nedenfor som står "Klikk for å lese denne sikre e-posten online". Dette fører deg til en sikker side med \'Pabau\'.',
  },
  pl: {
    greeting: 'Droga Zofio,',
    messageLine1: 'Otrzymałeś nową bezpieczną wiadomość e-mail',
    messageLine2: 'Kliknij poniższe łącze, aby uzyskać dostęp do:',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Zespół kliniki',
    infoText:
      'Prawo UE wymaga, abyśmy przesyłali Twoje dane osobowe w zaszyfrowanym formacie. Jego przeglądanie jest bezpłatne, a wszystko, co musisz zrobić, to kliknąć łącze w poniższej wiadomości e-mail o treści „Kliknij, aby przeczytać tę bezpieczną wiadomość e-mail online”. Spowoduje to przejście do bezpiecznej strony z „Pabau”.',
  },
  sw: {
    greeting: 'Kära Sophia,',
    messageLine1: 'Du har fått ett nytt säkert e-postmeddelande',
    messageLine2: 'Klicka på länken nedan för att komma åt:',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Kliniklaget',
    infoText:
      'Enligt EU-lagstiftningen är vi skyldiga att skicka din personliga information i krypterat format. Det är gratis att se och allt du behöver göra är att klicka på länken i e-postmeddelandet nedan som läser "Klicka för att läsa denna säkra e-post online". Detta tar dig vidare till en säker sida med "Pabau".',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    messageLine1: 'Ați primit un nou e-mail securizat',
    messageLine2:
      'Vă rugăm să faceți clic pe linkul de mai jos pentru a accesa:',
    closingText: 'Salutări calde,',
    signatureBlock: 'Salutări calde,',
    infoText:
      'Legislația UE ne solicită să vă trimitem informațiile personale într-un format criptat. Este vizibil gratuit și tot ce trebuie să faceți este să faceți clic pe linkul din e-mailul de mai jos care scrie „Faceți clic pentru a citi acest e-mail securizat online”. Acest lucru vă va duce la o pagină sigură cu „Pabau”.',
  },
}

const DocumentSharedPreview: FC<P> = ({
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
          <DocumentShared
            messageLine1={selectLangData.messageLine1}
            messageLine2={selectLangData.messageLine2}
            userEmail={'info@theclinic.com'}
            userName={'Sophia'}
            buttonName={'View Document'}
            clinicName={'Clinic'}
            closingText={selectLangData.closingText}
            signatureBlock={selectLangData.signatureBlock}
            infoText={selectLangData.infoText}
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

export default DocumentSharedPreview
