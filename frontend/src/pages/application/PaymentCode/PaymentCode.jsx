import './PaymentCode.scss'

import React from 'react'
import { Link } from 'react-router-dom'

import barcode from '../../../assets/barcode.svg'
import { CONSTANTS } from '../../../utils/constants'
import Home from '../../home/Home'

export default function PaymentCode() {
  return (
    <Home>
      <section className="d-flex align-items-center justify-content-between flex-column gap-2">
        <div className="payment-code-title mb-4">
          <h2 className="pt-3">Código de barras</h2>
        </div>
        <div>
          <img src={barcode} alt="Generated barcode." />
        </div>
        <div className="information d-flex align-items-center flex-column mt-4">
          <p>
            Entrada: <span>8:00 hrs</span>
          </p>
          <p>
            Saída: <span>8:00 hrs</span>
          </p>
          <p>
            Permanência: <span>9:00 hrs</span>
          </p>
          <p>
            Valor: <span>R$XX,XX</span>
          </p>
        </div>
        <div className="buttons customer-actions flex-column h-100 gap-1">
          <Link
            to="/"
            className="btn btn-outline-primary"
            onClick={() => {
              alert('Pagamento feito com sucesso!')
            }}
          >
            {CONSTANTS.APPLICATION_ROUTE.PAYMENT}
          </Link>
          <Link to="/" className="btn primary">
            {CONSTANTS.APPLICATION_ROUTE.CANCEL}
          </Link>
        </div>
      </section>
    </Home>
  )
}
