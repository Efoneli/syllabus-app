// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//    <>
//    <Navbar />
//    </>
//   );
// }


'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()
  return (
    <div>

      {/* <Dashboard /> */}

      <h1 onClick={() => router.push('/Dashboard')}>login</h1>
      <h1 onClick={() => router.push('/Dashboard')}>come let us</h1>
    
    </div>
  )
}

export default page
