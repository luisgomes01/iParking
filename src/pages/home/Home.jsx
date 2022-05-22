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
    location.pathname === '/application/check'
  ) {
    return (
      <main className="d-flex application">
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
