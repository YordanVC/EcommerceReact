  import { useState,useEffect } from 'react';
  import Layout from '../../Components/Layout'
  import Card from '../../Components/card'
  import ProductDetail from '../../Components/Product-detail';

  function Home() {
    const [products,setProducts]=useState(null)

    useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])

    return (
      <Layout>
        <div className='text-lg font-extrabold p-5'>
          PRODUCTS
        </div>
        
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            products?.map(product=>(
              <Card key={product.id} data={product}/>
            ))
          }
        </div>
        <ProductDetail />
        
      </Layout>
        
    );
  }

  export default Home