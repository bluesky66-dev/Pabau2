import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/common-header'
import useLogin from '../hooks/authentication/useLogin'
import Login from './login'
import { gql, useQuery } from '@apollo/client'

// eslint-disable-next-line
const CURRENT_USER = gql`  query retrieveAuthenticatedUser($Id: Int!, $CompanyId: Int!) { user(where: { id: $Id }) { username full_name } company(where: { id: $CompanyId }) { details {company_name  } }}`

const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)
  const [authenticated, user] = useLogin(false)
  const { data } = useQuery(CURRENT_USER, {
    variables: {
      Id: user?.user ?? null,
      CompanyId: user?.company ?? null,
    },
  })

  return authenticated ? (
    <>
      <CommonHeader />
      <Layout pageTitle={t('common', 'index.title')} {...data}>
        {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
        <hr />
        {showGrid && <Grid />}v{version}
      </Layout>
    </>
  ) : (
    <Login />
  )
}

export default Index
