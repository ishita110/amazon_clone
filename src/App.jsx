import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import ProfilePage from './components/ProfilePage'


export default function App() {
return (
<BrowserRouter>
<div className="min-h-screen bg-gray-50">
<Header />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/cart" element={<CartPage />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/profile" element={<ProfilePage />} />
</Routes>
</main>
</div>
</BrowserRouter>
)
}