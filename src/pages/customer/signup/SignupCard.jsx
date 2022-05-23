import React from 'react'
import { Link } from 'react-router-dom'

import { useRouterDom } from '../../../contexts/RouterDom'
import { CONSTANTS } from '../../../utils/constants'

export default function SignupCard() {
  const { navigate } = useRouterDom()

  return (
    <>
      <div className="align-items-center customer-section d-flex flex-column mt-3 justify-content-center">
        <h1>Cadastro Cartão</h1>
        <div className="align-items-center d-flex flex-column justify-content-center">
          <label className="form-label mt-2">Número</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="0000 0000 0000 0000"
            type="number"
          />
          <label className="form-label mt-2">Tipo</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="carro ou moto"
            type="text"
          />
          <label className="form-label mt-2">Modelo</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="Modelo"
            type="text"
          />
          <label className="form-label mt-2">Marca</label>
          <input
            className="customer-input form-control iparking-input text-center"
            placeholder="Marca"
            type="text"
          />

          <div className="customer-actions mt-2">
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => {
                alert('Usuário registrado com sucesso!')
                navigate('/customer')
              }}
              type="button"
            >
              {CONSTANTS.CUSTOMER_ACTIONS.REGISTER}
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
