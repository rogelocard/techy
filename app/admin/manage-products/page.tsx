import React from 'react'
import Container from '@/app/components/Container'
import ManageProductsClient from './ManageProductsClient'


const ManageProducts = () => {

  // const productos = products;
  // <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 gap-8">
  //       {products.map((product: any) => {
  //         return <ProductCard data={product}/>
  //       })}
  //     </div>
  // <ManageProductsClient products = {productos}/>

  return (
    <div className='pt-8'>
      <Container>
        <ManageProductsClient/>
      </Container>
    </div>
  )
}

export default ManageProducts