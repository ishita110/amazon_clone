import React, { useEffect, useState } from 'react'
import PRODUCTS from '../data/products'
import Filters from '../components/Filters'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
    const [products] = useState(PRODUCTS)
    const [filtered, setFiltered] = useState(products)

    useEffect(() => {
        function onSearch(e) {
            const q = (e.detail || '').toLowerCase()
            applyFilters(q, null)
        }
        window.addEventListener('search.change', onSearch)
        return () => window.removeEventListener('search.change', onSearch)
    }, [products])

    useEffect(() => applyFilters(), [products])

    const categories = Array.from(new Set(products.map(p => p.category)))

    const brands = Array.from(new Set(products.map(p => p.brand).filter(Boolean)))

   function applyFilters(filter = {}) {
    const { query = '', category, priceRange = [0, Infinity], rating = 0, brand, inStockOnly = false } = filter
    const [minPrice, maxPrice] = priceRange

    const res = products.filter(p => {
        const matchesQuery =
            (p.title?.toLowerCase().includes(query.toLowerCase()) ||
             p.description?.toLowerCase().includes(query.toLowerCase()) ||
             p.category?.toLowerCase().includes(query.toLowerCase()))
        
        const matchesCategory = !category || p.category === category
        const matchesBrand = true 
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice
        const matchesRating = p.rating >= rating
        const matchesStock = !inStockOnly || p.inStock

        return matchesQuery && matchesCategory && matchesBrand && matchesPrice && matchesRating && matchesStock
    })

    setFiltered(res)
}


    return (
        <main className="page home-page">
            <div className="home-banner">
                <img src="https://images.unsplash.com/photo-1740818575777-89c9bdd7e7f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shop Deals Banner" />
                <div className="banner-overlay">
                    <h1>Shop the Latest Deals</h1>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </div>

            <div className="home-layout">
                <aside className="sidebar">
                    <h4 className="sidebar-title">Filter by Category</h4>
                    <Filters
                        categories={categories}
                        brands={brands}
                        onFilter={applyFilters}
                    />
                </aside>

                <section className="home-products">
                    <div className="home-products-header">
                        <h2>Results</h2>
                        <span>Showing {filtered.length} products</span>
                    </div>
                    <ProductGrid products={filtered} />
                </section>
            </div>
        </main>
    )
}
