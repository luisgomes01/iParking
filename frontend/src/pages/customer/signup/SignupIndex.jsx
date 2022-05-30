import { Formik } from 'formik'
import React, { useState } from 'react'

import { useRouterDom } from '../../../contexts/RouterDom'
import { signupInitialValues } from '../../../services/initialValues'
import { signupValidation } from '../../../services/validation'
import SignupAuto from './SignupAuto'
import SignupCard from './SignupCard'
import SignupUser from './SignupUser'

export const SignupIndex = () => {
  const { navigate } = useRouterDom()
  const [page, setPage] = useState(0)
  const onCancel = () => setPage(0)
  const onNextPage = () => setPage(state => state + 1)

  return (
    <Formik
      initialValues={signupInitialValues}
      validationSchema={signupValidation}
      onSubmit={values => {
        // Code to validade if exists in database also goes here
        alert('Registrado com sucesso!')
        console.log(values)
        navigate('/customer')
      }}
      validateOnChange
      validateOnBlur
      validateOnMount
    >
      {formik => {
        if (page === 0) {
          return <SignupUser onNextPage={onNextPage} {...formik} />
        }

        if (page === 1) {
          return (
            <SignupAuto
              onCancel={onCancel}
              onNextPage={onNextPage}
              {...formik}
            />
          )
        }
        return (
          <SignupCard onCancel={onCancel} onNextPage={onNextPage} {...formik} />
        )
      }}
    </Formik>
  )
}
