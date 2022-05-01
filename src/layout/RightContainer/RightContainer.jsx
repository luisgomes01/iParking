import './rightcontainer.scss'

import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { CONSTANTS } from '../../utils/constants'

export default function RightContainer() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/customer') {
    return (
      <section className="container-fluid right-container">
        <div className="align-items-center customer-section d-flex flex-column gap-2 h-100 justify-content-center right-container-content">
          <h1>Login</h1>
          <div className="align-items-center d-flex flex-column justify-content-center">
            <label className="form-label">Email</label>
            <input
              className="customer-input form-control iparking-input text-center"
              placeholder={CONSTANTS.CUSTOMER_ROUTE.EMAIL}
              type="text"
            />

            <label className="form-label mt-2">Senha</label>
            <input
              className="customer-input form-control iparking-input text-center"
              placeholder={CONSTANTS.CUSTOMER_ROUTE.PASSWORD}
              type="password"
            />
            <div className="customer-actions">
              <button className="btn btn-outline-primary mt-2">
                {CONSTANTS.CUSTOMER_ACTIONS.LOGIN}
              </button>
              <Link className="primary mt-2" to="/login">
                {CONSTANTS.CUSTOMER_ACTIONS.SIGNUP}
              </Link>
              <button className="btn btn-outline-dark mt-2">
                {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container-fluid right-container">
      <div className="align-items-center d-flex flex-column gap-2 h-100 justify-content-center right-container-content">
        <div className="right-container-title">
          <h2>{CONSTANTS.ACCESS_AS}</h2>
        </div>
        <div className="d-grid gap-3 col-lg-6 right-container-body">
          <button
            className="btn btn-outline-dark"
            onClick={() => navigate('admin')}
            type="button"
          >
            <span className="align-middle w-100 h-100">{CONSTANTS.ADMIN}</span>
          </button>
          <button
            className="btn btn-outline-primary mt-2"
            onClick={() => navigate('/customer')}
            type="button"
          >
            <span className="align-middle w-100 h-100">
              {CONSTANTS.CUSTOMER}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
