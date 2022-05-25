import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

import { IparkingTextField } from '../../../components/IparkingTextField'
import { useRouterDom } from '../../../contexts/RouterDom'
import { signupUserInitialValues } from '../../../services/initialValues'
import { signupValidation } from '../../../services/validation'
import { CONSTANTS } from '../../../utils/constants'
import { maskCPF, maskPhone } from '../../../utils/masks'

export default function SignupUser() {
  const { navigate } = useRouterDom()

  return (
    <Formik
      initialValues={signupUserInitialValues}
      validationSchema={signupValidation}
      onSubmit={values => {
        // Code to validade if exists in database also goes here
        console.log(values)
        navigate('/signup/auto')
      }}
    >
      {({ setFieldValue }) => (
        <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
          <Form>
            <h1>{CONSTANTS.CUSTOMER_ROUTE.USER_REGISTRATION}</h1>
            <div className="align-items-center d-flex flex-column justify-content-center">
              <IparkingTextField
                label={CONSTANTS.CUSTOMER_ROUTE.NAME_LABEL}
                name="name"
                placeholder={CONSTANTS.CUSTOMER_ROUTE.NAME}
                required
                type="text"
              />
              <IparkingTextField
                label={CONSTANTS.CUSTOMER_ROUTE.PHONE_LABEL}
                maxLength={15}
                name="phone"
                onChange={event =>
                  setFieldValue('phone', maskPhone(event.target.value))
                }
                placeholder={CONSTANTS.CUSTOMER_ROUTE.PHONE}
                required
                type="text"
              />

              <IparkingTextField
                label={CONSTANTS.CUSTOMER_ROUTE.CPF_LABEL}
                maxLength={14}
                name="cpf"
                onChange={event =>
                  setFieldValue('cpf', maskCPF(event.target.value))
                }
                placeholder={CONSTANTS.CUSTOMER_ROUTE.CPF}
                required
                type="text"
              />

              <IparkingTextField
                label={CONSTANTS.CUSTOMER_ROUTE.EMAIL_LABEL}
                name="email"
                placeholder={CONSTANTS.CUSTOMER_ROUTE.EMAIL}
                required
                type="text"
              />
              <IparkingTextField
                label={CONSTANTS.CUSTOMER_ROUTE.PASSWORD_LABEL}
                name="password"
                placeholder={CONSTANTS.CUSTOMER_ROUTE.PASSWORD}
                required
                type="password"
              />
              <div className="customer-actions mt-2">
                <button className="btn btn-outline-primary mt-2" type="submit">
                  {CONSTANTS.CUSTOMER_ACTIONS.NEXT}
                </button>
                <Link className="primary mt-2" to="/">
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
