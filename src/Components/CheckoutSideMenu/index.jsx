import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShopingCartContext } from "../../Context"
import{totalPrice} from "../../utils/index"
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext)
    const handleDelete=(id)=>{
        const filteredProducts=context.cartProducts.filter(product=>product.id!=id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout=()=>{
        const orderToAdd={
            date: '25.01.25',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order,orderToAdd])
        context.setCartProducts([])
    }
    return (
        <aside
            className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon onClick={() => context.closeCheckoutSideMenu()} className="cursor-pointer size-6 text-black-500 hover:size-7 hover:text-red-500" />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button className='w-full bg-black py-3 text-white rounded-lg mb-3' onClick={()=>handleCheckout()}>Checkout</button>
            </div>

        </aside>
    )
}
export default CheckoutSideMenu