import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import Menu from '../layout/Menu/Menu'
import Admin from '../pages/admin/Admin'
import Customer from '../pages/customer/Customer'
import Home from '../pages/home/Home'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Index />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="/customer" element={<Customer />} />
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
