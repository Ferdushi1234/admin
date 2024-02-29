import React from 'react'
import Image from 'next/image'
import Link from "next/link"
const page = () => {
  return (
    <div>
      <h1>products</h1>
      <div
          className="p-4 border rounded-xl border-white my-3 flex justify-between gap-2 items-start"
        >
          <div>
          <Image 
            width={10000}
            height={10000}
            priority sizes='40vw'
            className="h-64 w-48 rounded-xl   shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src='/public/next.svg' alt='' />
            
           <div className="mt-3">
            <h1 className="font-bold text-center">Products</h1>
            <h2 className="text-lime-600 text-center">Products code 111</h2>
            </div>
          </div>


        </div>
    </div>
  )
}

export default page
