import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  )
}
