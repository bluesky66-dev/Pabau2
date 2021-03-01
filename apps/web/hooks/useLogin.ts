import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useCookies } from 'react-cookie'
import { JwtPayloadDto } from '../../bridge-api/src/app/authentication/dto'

export default function useLogin(
  registered = false
): [boolean, JwtPayloadDto | null] {
  const [cookie] = useCookies(['user'])
  const [authenticated, authenticate] = useState<boolean>(registered)
  const [user, setUser] = useState(null)
  useEffect(() => {
    if ({}.propertyIsEnumerable.call(cookie, 'user')) {
      setUser(jwt.decode(cookie.user))
      authenticate(true)
    }
  }, [cookie])
  return [authenticated ?? false, user as JwtPayloadDto | null]
}
