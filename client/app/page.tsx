'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()
  return (
    <div>
      <h1 onClick={() => router.push('/Dashboard')}>login</h1>
      <h1 onClick={() => router.push('/Dashboard')}>come let us</h1>
    
    </div>
  )
}

export default page
