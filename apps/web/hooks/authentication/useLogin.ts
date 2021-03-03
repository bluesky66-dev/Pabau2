import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useCookies } from 'react-cookie'

export interface LoginProps {
  user: number
  company: number
  username?: string
}

export default function useLogin(registered = false): [boolean, LoginProps] {
  const [cookie] = useCookies(['user'])
  const [authenticated, authenticate] = useState<boolean>(registered)
  const [user, setUser] = useState<LoginProps | null>(null)

  const decodedValidToken = (needle): LoginProps | void => {
    try {
      return jwt.verify(
        needle,
        'madskills',
        function (
          err: Error,
          decoded: { user: number; company: number; username: string }
        ) {
          return {
            user: decoded.user,
            company: decoded.company,
            username: decoded.username,
          } as LoginProps
        }
      )
    } catch {
      throw new Error('Invalid token')
    }
  }

  useEffect(() => {
    if ({}.propertyIsEnumerable.call(cookie, 'user')) {
      const currentUser = decodedValidToken(cookie.user)
      if (currentUser) {
        authenticate(true)
        setUser(currentUser)
      }
    }
  }, [authenticated, cookie])

  return [authenticated ?? false, user]
}
