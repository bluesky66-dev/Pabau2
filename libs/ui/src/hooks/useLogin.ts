import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useCookies } from 'react-cookie'

export default function useLogin(registered = false): [boolean, any] {
  const [cookie] = useCookies(['user'])
  const [authenticated, authenticate] = useState<boolean>(registered)
  const [user, setUser] = useState<any>()
  useEffect(() => {
    if ({}.propertyIsEnumerable.call(cookie, 'user')) {
      setUser(jwt.decode(cookie.user))
      authenticate(true)
    }
  }, [cookie])
  return [authenticated ?? false, user]
}
