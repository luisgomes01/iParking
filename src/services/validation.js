import * as Yup from 'yup'

export const loginValidation = Yup.object({
  email: Yup.string()
    .email('Email não é válido.')
    .required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.')
})

export const signupValidation = Yup.object({
  cpf: Yup.string()
    .min(11, 'Insira um CPF.')
    .required('CPF é um campo obrigatório.'),
  email: Yup.string()
    .required('Email é um campo obrigatório')
    .email('Email inválido.'),
  name: Yup.string().required('Nome é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
  phone: Yup.string()
    .required('A phone number is required.')
    .min(11, 'Certifique-se de por o DDD.')
})
