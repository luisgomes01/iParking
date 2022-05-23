import './home.scss'

import React from 'react'

import { useRouterDom } from '../../contexts/RouterDom'
import LeftContainer from '../../layout/LeftContainer/LeftContainer'
import MainContainer from '../../layout/MainContainer/MainContainer'
import RightContainer from '../../layout/RightContainer/RightContainer'

export default function Home({ children }) {
  const { location } = useRouterDom()
  if (
    location.pathname === '/application' ||
    location.pathname === '/application/payment' ||
    location.pathname === '/application/check'
  ) {
    return (
      <main className="d-flex application align-items-center flex-grow-1">
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
