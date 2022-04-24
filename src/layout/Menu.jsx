import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className="nav d-flex">
      <li className="nav-item me-3">
        <Link to="/">To Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/login">To Login</Link>
      </li>
    </ul>
  )
}
