import React from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { totalItems } = useCart()
  return (
    <header className="amazon-header">
      <a href="/" className="amazon-header__logo">Amazon</a>
      <nav className="amazon-header__nav">
        <a href="/cart" className="amazon-header__nav-link">Cart ({totalItems})</a>
        <a href="/profile" className="amazon-header__nav-link">Profile</a>
      </nav>
    </header>
  )
}
