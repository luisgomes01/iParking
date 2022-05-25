import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

import { IparkingTextField } from '../../../components/IparkingTextField'
import { useRouterDom } from '../../../contexts/RouterDom'
import { signupAutoInitialValues } from '../../../services/initialValues'
import { signupAutoValidation } from '../../../services/validation'
import { CONSTANTS } from '../../../utils/constants'

export default function SignupAuto() {
  const { navigate } = useRouterDom()
  return (
    <Formik
      initialValues={signupAutoInitialValues}
      validationSchema={signupAutoValidation}
      onSubmit={values => {
        // Code to validade if exists in database also goes here
        console.log(values)
        navigate('/signup/card')
      }}
    >
      {formik => (
        <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
          <Form>
            <h1>Cadastro Veículo</h1>
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
                <button className="btn btn-outline-primary mt-2" type="submit">
                  {CONSTANTS.CUSTOMER_ACTIONS.NEXT}
                </button>
                <Link className="primary mt-2" to="/signup">
                  {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
                </Link>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}
