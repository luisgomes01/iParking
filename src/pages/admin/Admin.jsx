import './admin.scss'

import { Form, Formik } from 'formik'
import React from 'react'

import { IparkingTextField } from '../../components/IparkingTextField'
import { useRouterDom } from '../../contexts/RouterDom'
import { createBusinnessRule } from '../../services'
import { businessRulesInitialValues } from '../../services/initialValues'
import { businessRulesValidation } from '../../services/validation'
import { CONSTANTS } from '../../utils/constants'

export default function Admin() {
  const { navigate } = useRouterDom()

  return (
    <Formik
      initialValues={businessRulesInitialValues}
      validationSchema={businessRulesValidation}
      onSubmit={values => {
        createBusinnessRule(values)

        alert('Criado com sucesso!')
        navigate('/')
      }}
    >
      <main className="admin container-fluid d-flex flex-grow-1 flex-column">
        <Form className="admin d-flex flex-grow-1 flex-column">
          <p className="admin-title h1 text-center mt-3">
            {CONSTANTS.ADMIN_ROUTE.BUSINESS_RULES}
          </p>
          <section className="admin-form align-items-center col-lg-6 col-md-6 col-sm-6 container-fluid d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-center w-100">
            <div className="align-items-center col-xl-2 d-flex flex-column justify-content-center">
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.GRACE_PERIOD}
                name="gracePeriod"
                placeholder={CONSTANTS.ADMIN_ROUTE.GRACE_PERIOD_EXAMPLE}
                required
              />
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.FIXED_TIME}
                name="fixedTime"
                placeholder={CONSTANTS.ADMIN_ROUTE.FIXED_TIME_EXAMPLE}
                required
              />
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.FIXED_TIME_VALUE}
                name="fixedTimeValue"
                placeholder={CONSTANTS.ADMIN_ROUTE.FIXED_TIME_VALUE_EXAMPLE}
                required
              />
            </div>
            <div className="align-items-center col-xl-2 d-flex flex-column justify-content-center">
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.EXCEEDED_HOUR}
                name="exceededHourValue"
                placeholder={CONSTANTS.ADMIN_ROUTE.EXCEEDED_HOUR_EXAMPLE}
                required
              />
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.DAILY_VALUE}
                name="dailyValue"
                placeholder={CONSTANTS.ADMIN_ROUTE.DAILY_VALUE_EXAMPLE}
                required
              />
              <IparkingTextField
                label={CONSTANTS.ADMIN_ROUTE.MONTHLY_VALUE}
                name="monthlyValue"
                placeholder={CONSTANTS.ADMIN_ROUTE.MONTHLY_VALUE_EXAMPLE}
              />
            </div>
          </section>
          <section className="admin-actions align-items-center col-lg-6 col-md-6 col-sm-6 container-fluid d-flex flex-md-row flex-lg-row flex-sm-column-reverse flex-column justify-content-center w-100">
            <div className="align-items-center d-flex flex-column justify-content-center">
              <button className="btn btn-outline-primary w-100">
                {CONSTANTS.ADMIN_ACTIONS.SAVE}
              </button>
            </div>

            <div className="align-items-center d-flex flex-column justify-content-center">
              <button
                className="btn btn-outline-dark w-100"
                onClick={() => navigate('/')}
              >
                {CONSTANTS.ADMIN_ACTIONS.CANCEL}
              </button>
            </div>
          </section>
        </Form>
      </main>
    </Formik>
  )
}
