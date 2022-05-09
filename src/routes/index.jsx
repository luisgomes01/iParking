import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import Menu from '../layout/Menu/Menu'
import Admin from '../pages/admin/Admin'
import Customer from '../pages/customer/Customer'
import SignupAuto from '../pages/customer/signup/SignupAuto'
import SignupCard from '../pages/customer/signup/SignupCard'
import SignupUser from '../pages/customer/signup/SignupUser'
import Home from '../pages/home/Home'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Index />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="/customer" element={<Customer />} />
        <Route path="/signup" element={<Index />}>
          <Route index element={<SignupUser />} />
          <Route path="auto" element={<SignupAuto />} />
          <Route path="card" element={<SignupCard />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

const Index = () => {
  return (
    <div className="main-container">
      <Menu />
      <Outlet />
    </div>
  )
}
