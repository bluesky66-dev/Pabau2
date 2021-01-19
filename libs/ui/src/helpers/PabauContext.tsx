import React from 'react'

interface PabauContextProps {
  isMobileDevice: boolean
}
export const PabauContext = React.createContext<PabauContextProps>({ isMobileDevice: false })

export const PabauProvider = PabauContext.Provider
export const PabauConsumer = PabauContext.Consumer
