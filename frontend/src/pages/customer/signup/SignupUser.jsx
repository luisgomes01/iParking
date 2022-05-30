import { Form } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

import { IparkingTextField } from '../../../components/IparkingTextField'
import { CONSTANTS } from '../../../utils/constants'
import { maskCPF, maskPhone } from '../../../utils/masks'

export default function SignupUser({
  errors,
  onNextPage,
  setFieldTouched,
  setFieldValue
}) {
  return (
    <div className="align-items-center customer-section d-flex flex-column flex-grow-1 mt-3 justify-content-center">
      <h1>{CONSTANTS.CUSTOMER_ROUTE.USER_REGISTRATION}</h1>

      <Form>
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
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() => {
                if (
                  errors.name ||
                  errors.phone ||
                  errors.cpf ||
                  errors.email ||
                  errors.password
                ) {
                  setFieldTouched('name')
                  setFieldTouched('phone')
                  setFieldTouched('cpf')
                  setFieldTouched('email')
                  setFieldTouched('password')
                  return
                }
                onNextPage()
              }}
              type="button"
            >
              {CONSTANTS.CUSTOMER_ACTIONS.NEXT}
            </button>
            <Link className="btn primary mt-2" to="/customer">
              {CONSTANTS.CUSTOMER_ACTIONS.CANCEL}
            </Link>
          </div>
        </div>
      </Form>
    </div>
  )
}
