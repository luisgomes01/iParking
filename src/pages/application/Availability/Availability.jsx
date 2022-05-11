import React from 'react'
import { Link } from 'react-router-dom'

import { CONSTANTS } from '../../../utils/constants'
import Home from '../../home/Home'

export default function Availability() {
  return (
    <Home>
      <h2 className="mt-3 text-center">Disponibilidade</h2>
      <h3 className="text-center">Mylena, aqui! Availability.jsx</h3>
      <Link className="btn btn-outline-primary" to="payment">
        {CONSTANTS.APPLICATION_ROUTE.CONFIRM_LOT}
      </Link>
      <Link className="btn btn-outline-primary" to="/">
        {CONSTANTS.APPLICATION_ROUTE.CANCEL}
      </Link>
    </Home>
  )
}
