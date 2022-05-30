const BASE_URL = 'https://iparking-app.herokuapp.com'

export const createUser = data => {
  return fetch(`${BASE_URL}/create/user`, {
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  }).then(res => res.json())
}

export const authenticate = data => {
  return fetch(`${BASE_URL}/login`, {
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  }).then(res => res.json())
}
