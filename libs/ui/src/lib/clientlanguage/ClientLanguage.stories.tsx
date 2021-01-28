import React, { FC, useState } from 'react'
import ClientLanguage from './ClientLanguage'

export default {
  component: ClientLanguage,
  title: 'UI/ClientLanguage',
  args: { defaultLanguage: '' },
  argTypes: {
    defaultLanguage: { control: { type: 'text' } },
  },
}

interface P {
  defaultLanguage: string
}

const DefaultClientLanguage: FC<P> = ({ ...args }) => {
  const [selectLanguage, SetSelectLanguage] = useState('')

  return (
    <div style={{ width: '350px' }}>
      <ClientLanguage
        selectLanguageHook={[selectLanguage, SetSelectLanguage]}
        defaultLanguage={args.defaultLanguage}
      />
      <div style={{ width: '100px', height: '100px' }}>{selectLanguage}</div>
    </div>
  )
}

export const DefaultClientLanguageStories = DefaultClientLanguage.bind({})
DefaultClientLanguageStories.args = {
  defaultLanguage: 'EN',
}
