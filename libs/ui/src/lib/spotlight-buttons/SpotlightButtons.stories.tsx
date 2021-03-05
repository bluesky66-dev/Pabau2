import React from 'react'
import { PabauPlus } from '../badge/Badge'
import SpotlightButtons from './SpotlightButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default {
  title: 'Spotlight Buttons',
  component: SpotlightButtons,
  args: {
    buttons: [],
  },
}
function Icon(props: { className: string }) {
  return (
    <FontAwesomeIcon className={props.className} icon={['fal', 'coffee']} />
  )
}
export const SingleButton = (): JSX.Element => (
  <SpotlightButtons
    buttons={[
      {
        name: 'Item #1',
        icon: Icon,
        badge: PabauPlus,
        href: '#example',
      },
    ]}
  ></SpotlightButtons>
)
export const MultiButton = (): JSX.Element => (
  <SpotlightButtons
    buttons={[
      {
        name: 'Item #1',
        icon: Icon,
        badge: PabauPlus,
        href: '#example',
      },
      {
        name: 'Item #2',
        icon: Icon,
        href: '#example',
      },
    ]}
  ></SpotlightButtons>
)
