import './PaymentCode.scss';
import React from 'react'

import barcode from '../../../assets/barcode.svg'
import Home from '../../home/Home'

export default function PaymentCode() {
  return (
    <Home>
      <section className="d-flex align-items-center justify-content-between flex-column">
        <div className="payment-code-title mb-4">
          <h2 className="pt-3">Código de barras</h2>
        </div>
        <div>
          <img src={barcode} alt="Generated barcode." />
        </div>
        <div className="information d-flex align-items-center flex-column mt-4">
          <p>Entrada: <span>8:00 hrs</span></p>
          <p>Saída: <span>8:00 hrs</span></p>
          <p>Permaneência: <span>9:00 hrs</span></p>
          <p>Valor: <span>R$XX,XX</span></p>
        </div>
      </section>
    </Home>
  )
}
