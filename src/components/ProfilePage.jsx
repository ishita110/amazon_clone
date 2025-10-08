import React from 'react'
import { Link } from 'react-router-dom'
import './ProfilePage.css'

export default function ProfilePage() {
  // Placeholder user data
  const user = {
    name: 'Ishita D',
    email: 'i.d@example.com',
    avatar: 'https://images.unsplash.com/photo-1640239035736-418759ef19bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }

  // Placeholder orders
  const orders = [
    { id: '001', date: '2025-09-25', total: 129.99, status: 'Delivered' },
    { id: '002', date: '2025-10-01', total: 59.99, status: 'Shipped' },
  ]

  // Placeholder wishlist
  const wishlist = [
    { id: '101', title: 'Wireless Headphones', price: 79.99 },
    { id: '102', title: 'Smartwatch Series 6', price: 199.99 },
  ]

  return (
    <main className="page profile-page">
      <h1 className="page-title">My Profile</h1>

      <section className="profile-info">
        <img src={user.avatar} alt={user.name} className="profile-avatar" />
        <div className="profile-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="btn btn-edit">Edit Profile</button>
        </div>
      </section>

      <section className="profile-orders">
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul className="orders-list">
            {orders.map(o => (
              <li key={o.id} className="order-item">
                <span>Order #{o.id}</span>
                <span>{o.date}</span>
                <span>${o.total.toFixed(2)}</span>
                <span>{o.status}</span>
                <Link to={`/order/${o.id}`} className="order-view">View</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="profile-wishlist">
        <h2>Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="wishlist-list">
            {wishlist.map(p => (
              <li key={p.id} className="wishlist-item">
                <span>{p.title}</span>
                <span>${p.price.toFixed(2)}</span>
                <button className="btn btn-remove">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="profile-settings">
        <h2>Settings</h2>
        <div className="settings-item">
          <label>
            <input type="checkbox" /> Receive email notifications
          </label>
        </div>
        <div className="settings-item">
          <button className="btn btn-logout">Logout</button>
        </div>
      </section>
    </main>
  )
}
