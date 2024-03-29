import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { RouterDomProvider } from '../contexts/RouterDom'
import Menu from '../layout/Menu/Menu'
import Admin from '../pages/admin/Admin'
import Availability from '../pages/application/Availability/Availability'
import GeneratePayment from '../pages/application/GeneratePayment/GeneratePayment'
import PaymentCode from '../pages/application/PaymentCode/PaymentCode'
import Customer from '../pages/customer/Customer'
import { SignupIndex } from '../pages/customer/signup/SignupIndex'
import Home from '../pages/home/Home'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <RouterDomProvider>
        <Routes>
          <Route path="/admin" element={<Index />}>
            <Route index element={<Admin />} />
          </Route>
          <Route path="/customer" element={<Customer />} />
          <Route path="/signup" element={<Index />}>
            <Route index element={<SignupIndex />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Index />}>
            <Route index element={<Availability />} />
            <Route path="payment" element={<GeneratePayment />} />
            <Route path="check" element={<PaymentCode />} />
          </Route>
        </Routes>
      </RouterDomProvider>
    </BrowserRouter>
  )
}

const Index = () => {
  return (
    <div className="main-container d-flex flex-column">
      <Menu />
      <Outlet />
    </div>
  )
}
