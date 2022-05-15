import './home.scss'

import React from 'react'
import { useLocation } from 'react-router-dom'

import LeftContainer from '../../layout/LeftContainer/LeftContainer'
import MainContainer from '../../layout/MainContainer/MainContainer'
import RightContainer from '../../layout/RightContainer/RightContainer'

export default function Home({ children }) {
  const location = useLocation()
  if (
    location.pathname === '/application' ||
    location.pathname === '/application/payment' ||
<<<<<<< HEAD
    location.pathname === '/application/pay'
  ) {
    return (
      <main className="home">
=======
    location.pathname === '/application/check'
  ) {
    return (
      <main className="d-flex application">
>>>>>>> c9b7d7c24007979dffc088a22e6796d112a9fd41
        <MainContainer>{children}</MainContainer>
      </main>
    )
  }

  return (
    <main className="container-fluid d-flex p-0 home">
      <LeftContainer />
      <RightContainer />
    </main>
  )
}
