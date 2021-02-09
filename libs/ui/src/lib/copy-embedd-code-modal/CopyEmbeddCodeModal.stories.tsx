import React from 'react'
import { CopyEmbeddCodeModal } from './CopyEmbeddCodeModal'

export default {
  title: 'Modals/CopyEmbeddCodeModal',
  component: CopyEmbeddCodeModal,
  args: {
    title: 'Copy embedd code',
    subTitle: 'Paste this snippet into your webbsite’s source code',
    modalWidth: 600,
    visible: true,
    code:
      '<a href=”https://www.capterra.com/reviews/140062/Pabau-CRM? utm_source=venfor&utm_medium=badge&utm_campaignn=capterra_reviews_badge”> <img border=”0” src=”https://assets.caoterra.com/badge/ee5fd76v=2099212&p=14006” /> </a>',
  },
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CopyEmbeddCodeModalStory = ({ ...args }) => (
  <CopyEmbeddCodeModal {...args} />
)
