import React, { useState, useEffect } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const evt = new CustomEvent('search.change', { detail: query })
    window.dispatchEvent(evt)
  }, [query])

  return (
    <div className="amazon-search-bar">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products, brands and categories"
      />
    </div>
  )
}
