import React from 'react'
import { useParams } from 'react-router-dom'
import PRODUCTS from '../data/products'
import ProductDetailCard from '../components/ProductDetailCard'

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id)

  if (!product)
    return <div className="page-empty">Product not found</div>

  return (
    <main className="page product-detail-page">
      <ProductDetailCard product={product} />
    </main>
  )
}
