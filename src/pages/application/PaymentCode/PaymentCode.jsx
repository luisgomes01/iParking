import React from 'react'

import barcode from '../../../assets/barcode.svg'
import Home from '../../home/Home'

export default function PaymentCode() {
  return (
    <Home>
      <section className="d-flex align-items-center justify-content-between flex-column">
        <div className="payment-code-title">
          <h2 className="pt-3">PaymentCode</h2>
        </div>
        <div>
          <img src={barcode} alt="Generated barcode." />
        </div>
        <div>INfo</div>
      </section>
    </Home>
  )
}
