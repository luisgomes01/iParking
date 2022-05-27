import { Form } from 'formik'
import React from 'react'

import { IparkingTextField } from '../../../components/IparkingTextField'
import { CONSTANTS } from '../../../utils/constants'

export default function SignupAuto({
  errors,
  onCancel,
  onNextPage,
  setFieldTouched
}) {
  return (
    <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
      <h1>Cadastro Veículo</h1>
      <Form>
        <div className="align-items-center d-flex flex-column justify-content-center">
          <IparkingTextField
            label="Placa"
            maxLength={7}
            name="plate"
            placeholder="ABC1234"
            required
            type="text"
          />
          <IparkingTextField
            label="Tipo"
            name="type"
            placeholder="carro ou moto"
            required
            type="text"
          />
          <IparkingTextField
            label="Modelo"
            name="model"
            placeholder="Modelo"
            type="text"
          />
          <IparkingTextField
            label="Marca"
            name="brand"
            placeholder="Marca"
            type="text"
          />
          <div className="customer-actions mt-2">
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => {
                if (errors.plate || errors.type) {
                  setFieldTouched('plate')
                  setFieldTouched('type')
                  return
                }
                onNextPage()
              }}
              type="button"
            >
              {CONSTANTS.CUSTOMER_ACTIONS.NEXT}
            </button>
            <button className="btn primary mt-2" onClick={onCancel}>
              {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
            </button>
          </div>
        </div>
      </Form>
    </div>
  )
}
