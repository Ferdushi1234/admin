import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/notFound'))

const Page = () => {
  return (
    <>
      <DynamicComponent/>
    </>
  )
}

export default Page
