import React from 'react'
import SpotlightButtons from './SpotlightButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
} from '@storybook/addon-docs/blocks'
function Docs(): JSX.Element {
  return (
    <>
      <h1>SpotlightButtons</h1>
      <hr />
      <h2>props</h2>
      <hr />
      <h3>buttons</h3>
      <hr />
      <p>an array of objects indicating what buttons to render</p>
      <table>
        <thead>
          <tr>
            <th>required</th>
            <th>key</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <input type="checkbox" checked={true} />
            </th>
            <th>name</th>
            <th>the text value to display in the button</th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" checked={true} />
            </th>
            <th>icon</th>
            <th>I component that results in a 32x32 icon</th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" checked={false} />
            </th>
            <th>badge</th>
            <th>
              should it display the plus badge to the right of the text content
            </th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" checked={true} />
            </th>
            <th>href</th>
            <th>href to pass to the surrounding {`<a>`} tag of each button</th>
          </tr>
        </tbody>
      </table>
      <pre>
        <code>
          {`
{
  name: string
  icon: ReactElementLike
  badge?: boolean
  href?: string
}[]
        `}
        </code>
      </pre>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Stories />
    </>
  )
}
export default {
  title: 'Spotlight Buttons',
  component: SpotlightButtons,
  args: {
    buttons: [],
  },
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

function Icon() {
  return <FontAwesomeIcon icon={faCoffee} size="2x" />
}

export const SingleButton = (): JSX.Element => (
  <SpotlightButtons
    buttons={[
      {
        name: 'Item #1',
        icon: Icon,
        badge: true,
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
        badge: true,
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

export const ManyButtons = (): JSX.Element => (
  <SpotlightButtons
    buttons={[
      {
        name: 'Item #1',
        icon: Icon,
        badge: true,
        href: '#example',
      },
      {
        name: 'Item #2',
        icon: Icon,
        href: '#example',
      },
      {
        name: 'Item #3',
        icon: Icon,
        href: '#example',
      },
      {
        name: 'Item #4',
        icon: Icon,
        href: '#example',
      },
      {
        name: 'Item #5',
        icon: Icon,
        href: '#example',
      },
    ]}
  ></SpotlightButtons>
)
