import './rightcontainer.scss'

import { Form, Formik } from 'formik'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { IparkingTextField } from '../../components/IparkingTextField'
import { logInInitialValues } from '../../services/initialValues'
import { loginValidation } from '../../services/validation'
import { CONSTANTS } from '../../utils/constants'

export default function RightContainer() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/customer') {
    return (
      <Formik
        initialValues={logInInitialValues}
        validationSchema={loginValidation}
        onSubmit={values => {
          // Code to validade if exists in database also goes here
          console.log(values)
          navigate('/application')
        }}
      >
        {formik => (
          <section className="container-fluid right-container">
            <div className="align-items-center customer-section d-flex flex-column gap-1 h-100 justify-content-center right-container-content">
              <Form>
                <h1 className="text-center">Login</h1>
                <div className="align-items-center d-flex flex-column justify-content-center">
                  <IparkingTextField
                    label={CONSTANTS.CUSTOMER_ROUTE.EMAIL_LABEL}
                    name="email"
                    placeholder={CONSTANTS.CUSTOMER_ROUTE.EMAIL}
                    type="text"
                  />

                  <IparkingTextField
                    label={CONSTANTS.CUSTOMER_ROUTE.PASSWORD_LABEL}
                    name="password"
                    placeholder={CONSTANTS.CUSTOMER_ROUTE.PASSWORD}
                    type="password"
                  />
                  <div className="customer-actions mt-2">
                    <button
                      className="btn btn-outline-primary mt-2"
                      type="submit"
                    >
                      {CONSTANTS.CUSTOMER_ACTIONS.LOGIN}
                    </button>
                    <Link className="btn btn-outline-dark mt-2" to="/signup">
                      {CONSTANTS.CUSTOMER_ACTIONS.SIGNUP}
                    </Link>
                    <Link className="primary mt-2" to="/">
                      {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
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
