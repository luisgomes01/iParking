import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

import { IparkingTextField } from '../../../components/IparkingTextField'
import { useRouterDom } from '../../../contexts/RouterDom'
import { signupCardInitialValues } from '../../../services/initialValues'
import { signupCardValdiation } from '../../../services/validation'
import { CONSTANTS } from '../../../utils/constants'
import { maskCreditCard, maskDate } from '../../../utils/masks'

export default function SignupCard() {
  const { navigate } = useRouterDom()

  return (
    <Formik
      initialValues={signupCardInitialValues}
      validationSchema={signupCardValdiation}
      onSubmit={values => {
        // Code to validade if exists in database also goes here
        console.log(values)
        navigate('/customer')
      }}
    >
      {({ setFieldValue }) => (
        <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
          <Form>
            <h1>Cadastro Cartão</h1>
            <div className="align-items-center d-flex flex-column justify-content-center">
              <IparkingTextField
                label="Número"
                maxLength={19}
                name="cardNumber"
                onChange={event => {
                  setFieldValue(
                    'cardNumber',
                    maskCreditCard(event.target.value)
                  )
                }}
                placeholder="0000 0000 0000 0000"
                required
                type="text"
              />
              <IparkingTextField
                label="Nome no cartão"
                name="nameInCard"
                placeholder="Caio Lucas"
                required
                type="text"
              />
              <IparkingTextField
                label="Vencimento"
                maxLength={5}
                name="validThru"
                onChange={event => {
                  setFieldValue('validThru', maskDate(event.target.value))
                }}
                placeholder="MM/YY"
                required
                type="text"
              />
              <IparkingTextField
                label="CVV"
                maxLength={3}
                name="CVV"
                placeholder="***"
                required
                type="password"
              />

              <div className="customer-actions mt-2">
                <button className="btn btn-outline-primary mt-2" type="submit">
                  {CONSTANTS.CUSTOMER_ACTIONS.REGISTER}
                </button>
                <Link className="primary mt-2" to="/signup/auto">
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
