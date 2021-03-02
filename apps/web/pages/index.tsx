import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/common-header'
import useLogin from '../hooks/useLogin'
import Login from './login'
import { UserContext } from '../hooks/UserContext'

const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)
  const [authenticated, user] = useLogin(false)

  return authenticated ? (
    <UserContext.Provider value={user}>
      <CommonHeader />
      <Layout pageTitle={t('common', 'index.title')} {...user}>
        {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
        <hr />
        {showGrid && <Grid />}v{version}
      </Layout>
    </UserContext.Provider>
  ) : (
    <Login />
  )
}

export default Index
