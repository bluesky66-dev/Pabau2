import { createContext } from 'react'
import { LoginProps } from './useLogin'

export const UserContext = createContext<LoginProps | null>(null)

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
