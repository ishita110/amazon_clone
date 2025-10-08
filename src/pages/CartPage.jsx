import React from 'react'
import CartDrawer from '../components/CartDrawer'

export default function CartPage() {
  return (
    <main className="page cart-page">
      <h1 className="page-title">Your Shopping Cart</h1>
      <CartDrawer />
    </main>
  )
}
