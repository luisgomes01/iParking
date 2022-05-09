import React from 'react'
import { CONSTANTS } from '../../../utils/constants'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SignupUser() {
  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <>
      <div className="align-items-center customer-section d-flex flex-column mt-3 justify-content-center">
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
            <button className="btn btn-outline-primary mt-2"
            onClick={() => navigate('auto')}
            type="button">
              {CONSTANTS.CUSTOMER_ACTIONS.LOGIN}
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
