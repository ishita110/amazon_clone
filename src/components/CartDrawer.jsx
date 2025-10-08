import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './CartDrawer.css'

export default function CartDrawer() {
  const { cart, updateQty, removeFromCart, subtotal } = useCart()
  const items = Object.values(cart)

  if (items.length === 0)
    return <div className="cart-empty">Your cart is empty</div>

  return (
    <div className="cart-drawer">
      <h3 className="cart-title">Your Cart</h3>
      <div className="cart-items">
        {items.map(it => (
          <div key={it.id} className="cart-item">
            <img src={it.image} alt={it.title} className="cart-item__image" />
            <div className="cart-item__info">
              <div className="cart-item__title">{it.title}</div>
              <div className="cart-item__price">${it.price.toFixed(2)}</div>
              <div className="cart-item__controls">
                <button onClick={() => updateQty(it.id, it.qty - 1)}>-</button>
                <span>{it.qty}</span>
                <button onClick={() => updateQty(it.id, it.qty + 1)}>+</button>
                <button
                  onClick={() => removeFromCart(it.id)}
                  className="cart-item__remove"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="cart-checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
