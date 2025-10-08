import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'


export default function ProductCard({ p }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={p.image} alt={p.title} className="product-card__image" />
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">
          <Link to={`/product/${p.id}`} className="product-card__link">{p.title}</Link>
        </h3>
        <p className="product-card__desc">{p.description}</p>

        <div className="product-card__bottom">
          <div className="product-card__price-rating">
            <div className="product-card__price">${p.price.toFixed(2)}</div>
            <div className="product-card__rating">⭐ {p.rating}</div>
          </div>

          <div className="product-card__actions">
            <button onClick={() => addToCart(p, 1)} className="btn btn-add">Add</button>
            <Link to={`/product/${p.id}`} className="btn btn-view">View</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
