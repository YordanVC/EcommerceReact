import Layout from '../../Components/Layout'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext} from "react"
import { ShopingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'


function MyOrder() {

  const context = useContext(ShopingCartContext)
  const currentPath=window.location.pathname
  let index=currentPath.substring(currentPath.lastIndexOf('/')+1)
  if(index==='last')index=context.order?.length-1
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-5">
        <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeftIcon className="cursor-pointer size-6 text-black-500 hover:size-7 hover:text-red-500" />
        </Link>
        <h1 className="font-medium text-xl mb-3">My Order</h1>
      </div>
        <div className="px-6 flex flex-col">
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}/>
                    ))
                }
            </div>
      </Layout>
    );
  }
  
  export default MyOrder