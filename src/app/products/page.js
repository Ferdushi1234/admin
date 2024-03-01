import React from 'react'
import Products from '../../components/products'
const page = () => {
  if (typeof window !== 'undefined') {
    //here `window` is available
  }
  return (
    <>
      <Products/>
    </>
  )
}

export default page
