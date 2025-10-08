import React from 'react'
import { useCart } from '../context/CartContext'
import './ProductDetailCard.css'

export default function ProductDetailCard({ product }) {
  const { addToCart } = useCart()
  if (!product) return null

  return (
    <div className="product-detail-card">
      <div className="product-detail-card__container">
        
        {/* Image Section */}
        <div className="product-detail-card__image-wrapper">
          <img src={product.image} alt={product.title} className="product-detail-card__image" />
        </div>

        {/* Info Section */}
        <div className="product-detail-card__info">
          <h1 className="product-detail-card__title">{product.title}</h1>
          <p className="product-detail-card__desc">{product.description}</p>

          <div className="product-detail-card__price-rating">
            <div className="product-detail-card__price">${product.price.toFixed(2)}</div>
            <div className="product-detail-card__rating">⭐ {product.rating}</div>
          </div>

          <button onClick={() => addToCart(product, 1)} className="btn btn-add">Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
