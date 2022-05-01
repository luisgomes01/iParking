import './home.scss'

import React from 'react'

import LeftContainer from '../../layout/LeftContainer/LeftContainer'
import RightContainer from '../../layout/RightContainer/RightContainer'

export default function Home() {
  return (
    <main className="container-fluid d-flex p-0 home">
      <LeftContainer />
      <RightContainer />
    </main>
  )
}
