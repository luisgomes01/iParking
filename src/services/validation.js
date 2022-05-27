import * as Yup from 'yup'

export const loginValidation = Yup.object({
  email: Yup.string()
    .email('Email não é válido.')
    .required('Email é um campo obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.')
})

export const signupValidation = Yup.object({
  CVV: Yup.string().required('CVV é um campo obrigatório.'),
  cardNumber: Yup.string().required('Cartão é obrigatório.'),
  cpf: Yup.string()
    .min(11, 'Insira um CPF.')
    .required('CPF é um campo obrigatório.'),
  email: Yup.string()
    .required('Email é um campo obrigatório')
    .email('Email inválido.'),
  name: Yup.string().required('Nome é um campo obrigatório.'),
  nameInCard: Yup.string().required('Nome no cartão é obrigatório.'),
  password: Yup.string().required('Senha é um campo obrigatório.'),
  phone: Yup.string()
    .required('A phone number is required.')
    .min(11, 'Certifique-se de por o DDD.'),
  plate: Yup.string()
    .required('Placa é um campo obrigatório.')
    .min(7, 'Insira uma placa válida.'),
  type: Yup.string().required('Tipo de automóvel é um campo obrigatório.'),
  validThru: Yup.string().required('Vencimento é um campo obrigatório.')
})
