import React from 'react'
import { ReactComponent as ENSVG } from './en.svg'
import { ReactComponent as FRSVG } from './french.svg'
import { ReactComponent as SPSVG } from './spanish.svg'
import { ReactComponent as ARSVG } from './arabic.svg'
import { ReactComponent as BRSVG } from './bulgarian.svg'
import { ReactComponent as CZSVG } from './czech.svg'
import { ReactComponent as HGSVG } from './hungarian.svg'
import { ReactComponent as LTSVG } from './latvian.svg'
import { ReactComponent as NWSVG } from './norwegian.svg'
import { ReactComponent as POSVG } from './polish.svg'
import { ReactComponent as SHSVG } from './spanish.svg'
import { ReactComponent as SWSVG } from './swedish.svg'
import { ReactComponent as ROMSVG } from './romanian.svg'
import { ReactComponent as RUSSVG } from './russian.svg'

export const languageMenu = [
  {
    label: 'English',
    logo: <ENSVG className="antdicon" />,
    selected: true,
  },
  {
    label: 'French',
    logo: <FRSVG className="antdicon" />,
  },
  {
    label: 'Spanish',
    logo: <SPSVG className="antdicon" />,
  },
  {
    label: 'Arabic',
    logo: <ARSVG className="antdicon" />,
  },
  {
    label: 'Bulgarian',
    logo: <BRSVG className="antdicon" />,
  },
  {
    label: 'Czech',
    logo: <CZSVG className="antdicon" />,
  },
  {
    label: 'Dannish',
    logo: <FRSVG className="antdicon" />,
  },
  {
    label: 'Hungarian',
    logo: <HGSVG className="antdicon" />,
  },
  {
    label: 'Latvian',
    logo: <LTSVG className="antdicon" />,
  },
  {
    label: 'Norwegian',
    logo: <NWSVG className="antdicon" />,
  },
  {
    label: 'Polish',
    logo: <POSVG className="antdicon" />,
  },
  {
    label: 'Spannish',
    logo: <SHSVG className="antdicon" />,
  },
  {
    label: 'Swedish',
    logo: <SWSVG className="antdicon" />,
  },
  {
    label: 'Romanian',
    logo: <ROMSVG className="antdicon" />,
  },
  {
    label: 'Russian',
    logo: <RUSSVG className="antdicon" />,
  },
]
