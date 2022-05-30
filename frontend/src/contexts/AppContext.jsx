import React, { createContext, useContext } from 'react'
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <AppContext.Provider
      value={{
        BrowserRouter,
        Outlet,
        Route,
        Routes,
        location,
        navigate
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useRouterDom = () => useContext(AppContext)
