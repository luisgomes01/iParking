import React from 'react'

import logo from '../../assets/iparking-logo.svg'
import { CONSTANTS } from '../../utils/constants'

export default function LeftContainer() {
  return (
    <section className="container-fluid d-flex justify-content-end left-container">
      <div className="d-flex flex-column h-100 justify-content-center left-container-items mx-sm-3 w-75">
        <img className="logo" alt="logo.svg" src={logo} />
        <h2 className="text-left text-white w-75">
          {CONSTANTS.PARK_WAS_NEVER_THAT_EASY}
        </h2>
      </div>
    </section>
  )
}
