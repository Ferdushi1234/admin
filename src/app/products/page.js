import React from 'react'
import Products from '../../components/products'
const page = () => {
  window.localStorage.foo = "bar";
  return (
    <>
      <Products/>
    </>
  )
}

export default page
