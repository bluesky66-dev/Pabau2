import SentMail from '../../assets/images/sent-mail.svg'
import Mail from '../../assets/images/email.svg'
import Open from '../../assets/images/opened-email.svg'
import Click from '../../assets/images/click.svg'
import Bounced from '../../assets/images/bounced.svg'

export const data = [
  {
    title: 'SENT',
    value: 3244,
    key: 1,
    img: `${SentMail}`,
  },
  {
    title: 'DELIVERED',
    value: 2844,
    key: 2,
    img: `${Mail}`,
  },
  {
    title: 'OPENED',
    value: 3224,
    key: 3,
    img: `${Open}`,
  },
  {
    title: 'CLICKS',
    value: 882,
    key: 4,
    img: `${Click}`,
  },
  {
    title: 'BOUNCED',
    value: 50,
    key: 5,
    img: `${Bounced}`,
  },
]
