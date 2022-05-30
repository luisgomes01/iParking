import React, { createContext, useContext } from 'react'
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'

const RouterDomContext = createContext()

export const RouterDomProvider = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <RouterDomContext.Provider
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
    </RouterDomContext.Provider>
  )
}

export const useRouterDom = () => useContext(RouterDomContext)
