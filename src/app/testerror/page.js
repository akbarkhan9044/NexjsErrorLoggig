"use client"

import React, { useEffect, useState } from 'react'
import {  getAllTest } from '../utils/request';

export default function Testpage() {
    const [counter,setCounter]=useState(1);
    const [error,setError]=useState(true);
    if(error){
        throw Error("Something went wrong in client component");
    }
    
    const fetchData=async()=>{
            const response=await getAllTest();
            const res=await response.json();
        console.log(res);     

      
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Click Me</button>
    </div>
  )
}


