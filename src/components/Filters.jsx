import React, { useState } from 'react'
import './Filters.css'

export default function Filters({ categories, brands, onFilter }) {
    const [query, setQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [selectedRating, setSelectedRating] = useState(0)
    const [selectedBrand, setSelectedBrand] = useState('All')
    const [inStockOnly, setInStockOnly] = useState(false)

    // Apply filter
    function applyFilter(cat = selectedCategory, br = selectedBrand, rating = selectedRating, q = query) {
        onFilter({
            query: q,
            category: cat === 'All' ? null : cat,
            priceRange,
            rating,
            brand: br === 'All' ? null : br,
            inStockOnly,
        })
    }

    // Handlers
    const handleCategory = cat => {
        setSelectedCategory(cat)
        applyFilter(cat)
    }

    const handleBrand = brand => {
        setSelectedBrand(brand)
        applyFilter(selectedCategory, brand, selectedRating)
    }

    const handleRating = rating => {
        setSelectedRating(rating)
        applyFilter()
    }

    const handlePriceChange = e => {
        const { name, value } = e.target
        const newRange = [...priceRange]
        if (name === 'min') newRange[0] = Number(value) || 0
        if (name === 'max') newRange[1] = Number(value) || Infinity
        setPriceRange(newRange)
        applyFilter()
    }

    const handleStockChange = e => {
        setInStockOnly(e.target.checked)
        applyFilter()
    }

    const handleSearchChange = e => {
        setQuery(e.target.value)
        applyFilter(selectedCategory, selectedBrand, selectedRating, e.target.value)
    }

    return (
        <div className="filters">
            {/* Search */}
            <div className="filters__section">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search products, brands, categories"
                    className="filters__search-input"
                />
            </div>

            {/* Category */}
            <div className="filters__section">
                <span className="filters__label">Category:</span>
                <div className="filters__buttons">
                    <button
                        onClick={() => handleCategory('All')}
                        className={`filters__btn ${selectedCategory === 'All' ? 'filters__btn--active' : ''}`}
                    >All</button>
                    {categories.map(c => (
                        <button
                            key={c}
                            onClick={() => handleCategory(c)}
                            className={`filters__btn ${selectedCategory === c ? 'filters__btn--active' : ''}`}
                        >{c}</button>
                    ))}
                </div>
            </div>

            {/* Brand */}
            <div className="filters__section">
                <span className="filters__label">Brand:</span>
                <div className="filters__buttons">
                    <button
                        onClick={() => handleBrand('All')}
                        className={`filters__btn ${selectedBrand === 'All' ? 'filters__btn--active' : ''}`}
                    >All</button>
                    {brands.map(b => (
                        <button
                            key={b}
                            onClick={() => handleBrand(b)}
                            className={`filters__btn ${selectedBrand === b ? 'filters__btn--active' : ''}`}
                        >{b}</button>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div className="filters__section">
                <span className="filters__label">Price:</span>
                <div className="filters__price-inputs">
                    <input
                        type="number"
                        name="min"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        className="filters__price-input"
                        placeholder="Min"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        name="max"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="filters__price-input"
                        placeholder="Max"
                    />
                </div>
            </div>

            {/* Rating */}
            <div className="filters__section">
                <span className="filters__label">Rating:</span>
                <div className="filters__buttons">
                    {[5, 4, 3, 2, 1].map(r => (
                        <button
                            key={r}
                            onClick={() => handleRating(r)}
                            className={`filters__btn ${selectedRating === r ? 'filters__btn--active' : ''}`}
                        >{r}⭐ & Up</button>
                    ))}
                </div>
            </div>

            {/* Stock */}
            <div className="filters__section">
                <label className="filters__stock-label">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={handleStockChange}
                    /> In Stock Only
                </label>
            </div>
        </div>
    )
}
