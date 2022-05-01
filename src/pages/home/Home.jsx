import './home.scss'

import React from 'react'
import { useLocation } from 'react-router-dom'

import LeftContainer from '../../layout/LeftContainer/LeftContainer'
import RightContainer from '../../layout/RightContainer/RightContainer'

export default function Home() {
  const location = useLocation()

  if (location.pathname === 'customer') {
    return (
      <main className="container-fluid d-flex p-0 home">
        <LeftContainer />
        <RightContainer />
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
