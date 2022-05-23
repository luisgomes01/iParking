import './admin.scss'

import React from 'react'

import { useRouterDom } from '../../contexts/RouterDom'
import { CONSTANTS } from '../../utils/constants'

export default function Admin() {
  const { navigate } = useRouterDom()

  return (
    <>
      <main className="admin container-fluid d-flex flex-column">
        <p className="admin-title h1 text-center mt-3">
          {CONSTANTS.ADMIN_ROUTE.BUSINESS_RULES}
        </p>
        <section className="admin-form align-items-center col-lg-6 col-md-6 col-sm-6 container-fluid d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-center w-100">
          <div className="align-items-center col-xl-2 d-flex flex-column justify-content-center">
            <label className="form-label mb-2">
              {CONSTANTS.ADMIN_ROUTE.GRACE_PERIOD}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.GRACE_PERIOD_EXAMPLE}
              type="text"
            />
            <label className="form-label mb-2 mt-2">
              {CONSTANTS.ADMIN_ROUTE.FIXED_TIME}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.FIXED_TIME_EXAMPLE}
              type="text"
            />
            <label className="form-label mb-2 mt-2">
              {CONSTANTS.ADMIN_ROUTE.FIXED_TIME_VALUE}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.FIXED_TIME_VALUE_EXAMPLE}
              type="text"
            />
          </div>
          <div className="align-items-center col-xl-2 d-flex flex-column justify-content-center">
            <label className="form-label mb-2">
              {CONSTANTS.ADMIN_ROUTE.EXCEEDED_HOUR}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.EXCEEDED_HOUR_EXAMPLE}
              type="text"
            />
            <label className="form-label mb-2 mt-2">
              {CONSTANTS.ADMIN_ROUTE.DAILY_VALUE}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.DAILY_VALUE_EXAMPLE}
              type="text"
            />
            <label className="form-label mb-2 mt-2">
              {CONSTANTS.ADMIN_ROUTE.MONTHLY_VALUE}
            </label>
            <input
              className="form-control iparking-input text-center"
              placeholder={CONSTANTS.ADMIN_ROUTE.MONTHLY_VALUE_EXAMPLE}
              type="text"
            />
          </div>
        </section>
        <section className="admin-actions align-items-center col-lg-6 col-md-6 col-sm-6 container-fluid d-flex flex-md-row flex-lg-row flex-sm-column-reverse flex-column justify-content-center w-100">
          <div className="align-items-center d-flex flex-column justify-content-center">
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => {
                navigate('/')
                alert('Salvo com sucesso')
              }}
            >
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
      </main>
    </>
  )
}
