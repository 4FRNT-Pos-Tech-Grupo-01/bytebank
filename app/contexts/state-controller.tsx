import React, { createContext, useState } from 'react'

interface IStateControllerContext {
  isAuthModalOpen: boolean
  setIsAuthModalOpen: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  currentAuthModal: 'login' | 'subscribe'
  setCurrentAuthModal: (value: 'login' | 'subscribe') => void
}

const initialState: IStateControllerContext = {
  isAuthModalOpen: false,
  setIsAuthModalOpen: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentAuthModal: 'login',
  setCurrentAuthModal: () => {},
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(initialState.isLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isAuthModalOpen)
  const [currentAuthModal, setCurrentAuthModal] = useState<'login' | 'subscribe'>(initialState.currentAuthModal)

  return (
    <StateControllerContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,
        isLoggedIn,
        setIsLoggedIn,
        currentAuthModal,
        setCurrentAuthModal,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider
