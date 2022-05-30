import './menu.scss'

import React from 'react'

import logo from '../../assets/iparking-logo.svg'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg d-flex menu">
      <div className="align-items-center container-fluid d-flex justify-content-center p-0">
        <img alt="iParking logo" className="logo" src={logo} />
      </div>
    </nav>
  )
}
