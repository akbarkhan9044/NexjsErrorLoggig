import React, { Suspense } from 'react'
import ProductPage from '../component/ProductPage'

export default async function Product() {
  return (
    <div>
      <h1>All Product</h1>
      <Suspense>
        <ProductPage/>
      </Suspense>
    </div>
  )
}
