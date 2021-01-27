import React, { FC, useState } from 'react'
import ClientLanguage from './ClientLanguage'

export default {
  component: ClientLanguage,
  title: 'UI/ClientLanguage',
}

export const DefaultClientLanguage: FC = () => {
  const [selectLanguage, SetSelectLanguage] = useState('')

  return (
    <div style={{ width: '350px' }}>
      <ClientLanguage selectLanguageHook={[selectLanguage, SetSelectLanguage]} />
      <div style={{ width: '100px', height: '100px' }}>{selectLanguage}</div>
    </div>
  )
}
