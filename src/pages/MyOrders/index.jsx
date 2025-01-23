import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShopingCartContext } from "../../Context"
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShopingCartContext)
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl mb-3">My Orders</h1>
      </div>

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>

        ))
      }

    </Layout>
  );
}

export default MyOrders