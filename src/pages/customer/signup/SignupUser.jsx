import React from 'react'
import { Link } from 'react-router-dom'

import { useRouterDom } from '../../../contexts/RouterDom'
import { CONSTANTS } from '../../../utils/constants'

export default function SignupUser() {
  const { navigate } = useRouterDom()

  return (
    <>
      <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
        <h1>Cadastro Usuário</h1>
        <div className="align-items-center d-flex flex-column justify-content-center">
          <label className="form-label mt-2">Nome</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="Fulano"
            type="text"
          />
          <label className="form-label  mt-2">Telefone</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="(00)0 0000-0000"
            type="number"
          />
          <label className="form-label mt-2">CPF</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="000.000.000-00"
            type="number"
          />
          <label className="form-label mt-2">E-mail</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder={CONSTANTS.CUSTOMER_ROUTE.EMAIL}
            type="text"
          />
          <label className="form-label mt-2">Senha</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder={CONSTANTS.CUSTOMER_ROUTE.PASSWORD}
            type="text"
          />
          <div className="customer-actions mt-2">
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => navigate('/signup/auto')}
              type="button"
            >
              {CONSTANTS.CUSTOMER_ACTIONS.NEXT}
            </button>
            <Link className="primary mt-2" to="/">
              {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
