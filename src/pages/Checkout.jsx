import React from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart()
  const items = Object.values(cart)

  function placeOrder() {
    alert('Order placed!')
    clearCart()
  }

  if (items.length === 0)
    return <div className="page-empty">Your cart is empty</div>

  return (
    <main className="page checkout-page">
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-box">
        <div className="checkout-items">
          {items.map(it => (
            <div key={it.id} className="checkout-item">
              <div className="checkout-item__name">
                {it.title} × {it.qty}
              </div>
              <div className="checkout-item__price">
                ${(it.price * it.qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <span>Total:</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>

        <button onClick={placeOrder} className="checkout-btn">
          Place Order
        </button>
      </div>
    </main>
  )
}
