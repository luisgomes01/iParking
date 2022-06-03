const BASE_URL = 'https://iparking-app.herokuapp.com'

export const createUser = async data => {
  const res = await fetch(`${BASE_URL}/create/user`, {
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  })

  return await res.json()
}

export const authenticate = async data => {
  const res = await fetch(`${BASE_URL}/login`, {
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  })

  return await res.json()
}

export const createBusinnessRule = async data => {
  const res = await fetch(`${BASE_URL}/create/rule`, {
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  })

  return res
}
