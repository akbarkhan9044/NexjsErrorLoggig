"use cache"
import React from 'react'
import { getAllProduct } from '../utils/request'
import { cacheLife } from 'next/cache';
export default async function ProductPage() {
    cacheLife("minutes");
    const response=await getAllProduct();   
  return (
    <div>
      {response && response.map((item)=>(
        <div key={item._id}>
            <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}
