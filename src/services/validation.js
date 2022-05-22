import * as Yup from 'yup'

export const loginValidation = Yup.object({
  email: Yup.string()
    .email('Email is not valid.')
    .required('Please enter a valid email.'),
  password: Yup.string().required('A password is required to proceed.')
})
