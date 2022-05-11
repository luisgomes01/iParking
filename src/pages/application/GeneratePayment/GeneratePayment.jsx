import './generatePayment.scss'

import React from 'react'
import { Link } from 'react-router-dom'

import { CONSTANTS } from '../../../utils/constants'
import Home from '../../home/Home'

export default function GeneratePayment() {
  return (
    <Home>
      <section className="align-items-center d-flex flex-column gap-5 justify-content-center w-100 h-100">
        <h2 className="title mt-3 text-center">Gerar código de pagamento</h2>

        <div className="col-8 position-relative primary-bg selected-lot">
          <div className="text-center selected-lot-title pt-1">
            <h3 className="mb-0 text-light-gray px-3">Vaga Selecionada</h3>
          </div>

          <div className="position-absolute selected-lot-body text-center">
            <h3 className="text-light-gray lot mt-5">A1</h3>
          </div>
        </div>
        <div className="buttons customer-actions flex-column h-100 gap-1">
          <Link
            to="/application/check"
            className="btn btn-outline-primary"
          >
            {CONSTANTS.APPLICATION_ROUTE.GENERATE_PAYMENT}
          </Link>
          <Link
            to="/application"
            className="btn primary"
          >
            {CONSTANTS.APPLICATION_ROUTE.CANCEL}
          </Link>
        </div>
      </section>
    </Home>
  )
}
