import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Admin from '../pages/admin/Admin'
import Home from '../pages/home/Home'

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
