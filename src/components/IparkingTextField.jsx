import { ErrorMessage, useField } from 'formik'
import React from 'react'

import { RequiredIcon } from './RequiredIcon'

export const IparkingTextField = ({ label, required, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="form-label mt-2" htmlFor={field.name}>
        {label}
        {required && <RequiredIcon />}
      </label>

      <input
        className={`customer-input form-control iparking-input text-center ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
      />

      <span className="text-danger mt-1">
        <u>
          <i>
            <ErrorMessage name={field.name} />
          </i>
        </u>
      </span>
    </>
  )
}
