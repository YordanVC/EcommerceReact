import { useState, useEffect, useContext } from 'react';
import { ShopingCartContext } from "../../Context"
import Layout from '../../Components/Layout'
import Card from '../../Components/card'
import ProductDetail from '../../Components/Product-detail';

function Home() {
  const context = useContext(ShopingCartContext)

  const renderView = () => {
    if (context.filteredProducts?.length > 0) {
      return (
        context.filteredProducts?.map(product => (
          <Card key={product.id} data={product} />
        ))
      )
    } else {
      return (
        <div>We don't have what you are looking for </div>
      )
    }
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-3xl mb-3">Exclusive Products</h1>
      </div>
      <input
        className='border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none'
        type="text"
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />

    </Layout>

  );
}

export default Home