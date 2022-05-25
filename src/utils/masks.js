export function maskCPF(value) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{3})(\d{3})(\d)/g, '$1.$2.$3')
  value = value.replace(/(\d)(\d{2})$/, '$1-$2')
  return value
}

export function maskPhone(value) {
  value = value.replace(/\D/g, '') // Remove tudo o que não é dígito
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
  value = value.replace(/(\d)(\d{4})$/, '$1-$2') // Coloca hífen entre o quarto e o quinto dígitos
  return value
}

export function maskCreditCard(value) {
  value = value.replace(/\D/g, '') // Remove tudo o que não é dígito
  value = value.replace(/(\d{4})/g, '$1 ')
  return value
}

export function maskDate(value) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})/g, '$1/')

  return value
}
