import React, { FC } from 'react'
import useLogin from '../hooks/authentication/useLogin'
import { gql, useQuery } from '@apollo/client'
import { UserContext } from '../context/UserContext'

// eslint-disable-next-line
const CURRENT_USER = gql`  query retrieveAuthenticatedUser($Id: Int!, $CompanyId: Int!) { user(where: { id: $Id }) { id username full_name } company(where: { id: $CompanyId }) { id details {company_name,language  } }}`

const ContextWrapper: FC = ({ children }) => {
  const [authenticated, user] = useLogin(false)
  const { data } = useQuery(CURRENT_USER, {
    variables: {
      Id: user?.user ?? null,
      CompanyId: user?.company ?? null,
    },
  })

  return (
    <UserContext.Provider value={authenticated ? data : null}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextWrapper
