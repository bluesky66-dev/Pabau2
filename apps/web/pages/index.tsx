import React, { FC, useEffect, useState } from 'react'
import { Button, useLiveQuery } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/common-header'
import useLogin from '../hooks/useLogin'
import Login from './login'
import { gql } from '@apollo/client'

const ACTIVE_USER = gql`
  query currentUser($user: Int!) {
    users(where: { id: { equals: $user } }) {
      full_name
      company
    }
  }
`
const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)
  const [authenticated, user] = useLogin(false)
  const [currentUserId, setCurrentUserId] = useState<null | number>(null)
  useEffect(() => {
    if (user) {
      setCurrentUserId(user.user)
    }
  }, [authenticated, user])

  const { data } = useLiveQuery(ACTIVE_USER, {
    variables: { user: currentUserId },
  })

  return authenticated ? (
    <>
      <CommonHeader userData={data} />
      <Layout pageTitle={t('common', 'index.title')}>
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
