import React from 'react'

export default function SignupUser() {
  return (
    <>
      <div>Cadastro Usuário</div>
      <div>
        <label className="form-label">Nome</label>
        <input
          className="customer-input form-control iparking-input text-center"
          placeholder="Fulano"
          type="text"
        />
      </div>
    </>
  )
}
