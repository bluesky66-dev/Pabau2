import React, { FC, useState, useEffect } from 'react'
import { EmailSmsPreview, PackageSession } from '@pabau/ui'
import CustomTemplate from '../ClientNotification/CustomTemplate'

interface P {
  standardTapIndex: string
  backGroundColor?: string
  buttonColor?: string
  activeSocialIcons?: string[]
  selectLanguage?: string
  showService?: boolean
  showEmployeeName?: boolean
}

interface LangData {
  [key: string]: Data
}

interface Data {
  greeting: string
  message: string
  closingText: string
  signatureBlock: string
}

const langData: LangData = {
  en: {
    greeting: 'Dear Sophia,',
    message:
      'You have just reached your final session for PACKAGE. To purchase another package, you can do so by clicking the below link',
    closingText: 'Kind regards,',
    signatureBlock: 'Your friends at The Clinic',
  },
  sp: {
    greeting: 'Querida Sophia,',
    message:
      'Acabas de llegar a tu última sesión de PACKAGE. Para comprar otro paquete, puede hacerlo haciendo clic en el enlace de abajo',
    closingText: 'Saludos cordiales,',
    signatureBlock: 'Tus amigos en The Clinic',
  },
  fr: {
    greeting: 'Chère Sophia,',
    message:
      "Vous venez d'atteindre votre dernière session pour PACKAGE. Pour acheter un autre forfait, vous pouvez le faire en cliquant sur le lien ci-dessous",
    closingText: 'Sincères amitiés,',
    signatureBlock: 'Vos amis à la clinique',
  },
  ru: {
    greeting: 'Дорогая София,',
    message:
      'Вы только что достигли последнего сеанса PACKAGE. Чтобы приобрести другой пакет, вы можете сделать это, нажав на ссылку ниже',
    closingText: 'С уважением,',
    signatureBlock: 'Ваши друзья в клинике',
  },
  ar: {
    greeting: 'عزيزتي صوفيا ،',
    message:
      'لقد وصلت للتو إلى جلستك الأخيرة لـ PACKAGE. لشراء باقة أخرى ، يمكنك القيام بذلك عن طريق النقر على الرابط أدناه',
    closingText: 'أطيب التحيات،',
    signatureBlock: 'أصدقاؤك في العيادة',
  },
  bg: {
    greeting: 'Скъпа София,',
    message:
      'Току-що стигнахте до последната си сесия за PACKAGE. За да закупите друг пакет, можете да го направите, като щракнете върху връзката по-долу',
    closingText: 'Поздрави,',
    signatureBlock: 'Вашите приятели в клиниката',
  },
  cs: {
    greeting: 'Drahá Sophia,',
    message:
      'Právě jste dosáhli svého posledního sezení pro PACKAGE. Chcete-li zakoupit další balíček, můžete tak učinit kliknutím na odkaz níže',
    closingText: 'S přátelským pozdravem,',
    signatureBlock: 'Vaši přátelé na klinice',
  },
  da: {
    greeting: 'Kære Sophia,',
    message:
      'Du har lige nået din sidste session for PACKAGE. For at købe en anden pakke kan du gøre det ved at klikke på nedenstående link',
    closingText: 'Med venlig hilsen,',
    signatureBlock: 'Dine venner på klinikken',
  },
  hu: {
    greeting: 'Kedves Sophia,',
    message:
      'Épp most ért el a PACKAGE utolsó munkamenetéhez. Újabb csomag vásárlásához az alábbi linkre kattintva teheti meg',
    closingText: 'Üdvözlettel,',
    signatureBlock: 'A barátaid a Klinikán',
  },
  lv: {
    greeting: 'Mīļā Sofija,',
    message:
      'Jūs tikko esat sasniedzis PACKAGE pēdējo sesiju. Lai iegādātos citu paketi, to varat izdarīt, noklikšķinot uz saites zemāk',
    closingText: 'Ar cieņu,',
    signatureBlock: 'Jūsu draugi klīnikā',
  },
  no: {
    greeting: 'Kjære Sophia,',
    message:
      'Du har nettopp nådd den siste økten for PAKKE. For å kjøpe en annen pakke, kan du gjøre det ved å klikke på lenken nedenfor',
    closingText: 'Vennlig hilsen,',
    signatureBlock: 'Dine venner på The Clinic',
  },
  pl: {
    greeting: 'Droga Zofio,',
    message:
      'Właśnie osiągnąłeś ostatnią sesję PAKIETU. Aby kupić kolejny pakiet, możesz to zrobić, klikając poniższy link',
    closingText: 'Z poważaniem,',
    signatureBlock: 'Twoi przyjaciele z The Clinic',
  },
  sw: {
    greeting: 'Kära Sophia,',
    message:
      'Du har precis nått din sista session för PACKAGE. För att köpa ett annat paket kan du göra det genom att klicka på länken nedan',
    closingText: 'Vänliga Hälsningar,',
    signatureBlock: 'Dina vänner på kliniken',
  },
  ro: {
    greeting: 'Dragă Sophia,',
    message:
      'Tocmai ați ajuns la ultima sesiune pentru PACKAGE. Pentru a achiziționa un alt pachet, puteți face acest lucru făcând clic pe linkul de mai jos',
    closingText: 'Salutări calde,',
    signatureBlock: 'Prietenii tăi de la clinică',
  },
}

const PackageSessionPreview: FC<P> = ({
  standardTapIndex,
  backGroundColor,
  activeSocialIcons,
  selectLanguage,
  buttonColor,
}) => {
  const [selectLangData, setSelectLangData] = useState<Data>(langData['en'])
  useEffect(() => {
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
          footerText={`${selectLangData.closingText}<br/>${selectLangData.signatureBlock}`}
        >
          <PackageSession
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

export default PackageSessionPreview
