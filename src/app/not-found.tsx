import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/notFound'))
import React from 'react'

const Page = () => {
  return (
    <>
      <DynamicComponent/>
    </>
  )
}

export default Page
