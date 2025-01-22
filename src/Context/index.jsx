import { createContext,useState } from "react";

export const ShopingCartContext=createContext()

export const ShopingCartProvider=({children})=>{

    //shoping cart increment quantity
    const [count,setCount]=useState(0)

    //PRODUCT DETAIL: open/close
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)

    const openProductDetail=()=>setIsProductDetailOpen(true)
    const closeProductDetail=()=>setIsProductDetailOpen(false)

    //CHECKOUT SIDE MENU: open/close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen]=useState(false)

    const openCheckoutSideMenu=()=>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu=()=>setIsCheckoutSideMenuOpen(false)

    //Product Detail-show Product
    const [productToShow,setProductToShow]=useState({})

    //Add a product to Cart
    const [cartProducts,setCartProducts]=useState([])


    //Shopping Cart: Order
    const [order,setOrder]=useState([])

    return(
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            setProductToShow,
            productToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShopingCartContext.Provider>
        
    )
}