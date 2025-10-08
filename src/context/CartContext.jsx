import React, { createContext, useContext, useEffect, useState } from 'react'


const CartContext = createContext()


export function useCart() {
return useContext(CartContext)
}


export function CartProvider({ children }) {
const [cart, setCart] = useState(() => {
try {
const raw = localStorage.getItem('amazon_clone_cart')
return raw ? JSON.parse(raw) : {}
} catch (e) {
return {}
}
})


useEffect(() => {
localStorage.setItem('amazon_clone_cart', JSON.stringify(cart))
}, [cart])


function addToCart(product, qty = 1) {
setCart(prev => {
const existing = prev[product.id] || { ...product, qty: 0 }
return { ...prev, [product.id]: { ...existing, qty: existing.qty + qty } }
})
}


function removeFromCart(productId) {
setCart(prev => {
const copy = { ...prev }
delete copy[productId]
return copy
})
}


function updateQty(productId, qty) {
setCart(prev => {
if (!prev[productId]) return prev
const copy = { ...prev }
copy[productId].qty = qty
if (qty <= 0) delete copy[productId]
return copy
})
}


function clearCart() {
setCart({})
}


const totalItems = Object.values(cart).reduce((s, p) => s + p.qty, 0)
const subtotal = Object.values(cart).reduce((s, p) => s + p.qty * p.price, 0)


return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totalItems, subtotal }}>
{children}
</CartContext.Provider>
)
}