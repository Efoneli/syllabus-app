import React from 'react'

function page() {
  return (
    <div>
      <div className='border border-gray-500 bg-[#f5f5f5] text-black'>
        this is the main div for introduction
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='border border-gray-500 bg-green-100 text-black'>
          this is a half div
        </div>
        <div className='border border-gray-500 bg-pink-100 text-black'>
          this is also a half div
        </div>
      </div>
    </div>
  )
}

export default page