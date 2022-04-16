import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul class="nav d-flex">
      <li class="nav-item me-3">
        <Link to="/">To Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/login">To Login</Link>
      </li>
    </ul>
  );
}
