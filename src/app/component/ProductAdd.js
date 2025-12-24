import React from 'react'

export default function ProductAdd() {
  return (
    <form action='/api/product' method='POST'>
    <input name="title" placeholder="Title" required />

    <input
      name="price"
      type="number"
      step="0.01"
      placeholder="Price"
      required
    />

    <textarea name="description" placeholder="Description" required />

    <input name="category" placeholder="Category" required />

    <input name="image" placeholder="Image URL" required />

    <input
      name="rate"
      type="number"
      step="0.1"
      min="0"
      max="5"
      placeholder="Rating"
      required
    />

    <input
      name="count"
      type="number"
      min="0"
      placeholder="Rating Count"
      required
    />

    <button type="submit">Create Product</button>
  </form>
  )
}
