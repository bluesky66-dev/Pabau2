import React, { FC } from 'react'
import NewLayout from '../../../components/NewLayout'

interface Values {
  name: string
}

const Page: FC = () => {
  return (
    <NewLayout<Values>
      schema={{
        full: 'Marketing Source',
        fullLower: 'marketing source',
        short: 'Source',
        shortLower: 'source',
        fields: {
          name: {
            full: 'Friendly Name',
            fullLower: 'friendly name',
            short: 'Name',
            shortLower: 'name',
            min: 2,
            example: 'Facebook',
            description: 'A friendly name',
            extra: <i>Please note: blah blah blah</i>,
          },
        },
      }}
      onSubmit={async (form) => {
        console.log(`marketing source new page received a form! name=${form.name}`, form)
        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1300)
        })
        //return false
      }}
    />
  )
}

export default Page
