import React from 'react'

export default function MainContainer({ children }) {
  return (
    <div className="align-items-center col-lg-8 d-flex flex-column mx-auto section-container">
      {children}
    </div>
  )
}