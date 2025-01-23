import { createContext,useState,useEffect } from "react";

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

    //GET PRODUCTS
    const [products,setProducts]=useState(null)

    const [filteredProducts,setfilteredProducts]=useState(null)

    //GET PRODUCTS BY TITLE
    const [searchByTitle,setSearchByTitle]=useState(null)

    //GET PRODUCTS BY CATEGORY
    const [searchByCategory,setSearchByCategory]=useState(null)


    useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])

    const filteredProductsByTitle=(products,searchByTitle)=>{
        return products?.filter(product=>product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredProductsByCategory=(products,searchByCategory)=>{

        return products?.filter(product=>product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    const filterBy =(searchType,products,searchByTitle,searchByCategory)=>{
        if(searchType==='BY_TITLE'){
            return filteredProductsByTitle(products,searchByTitle)
        }
        if(searchType==='BY_CATEGORY'){
            return filteredProductsByCategory(products,searchByCategory)
        }
        if(searchType==='BY_TITLE_AND_CATEGORY'){
            return filteredProductsByCategory(products,searchByCategory).filter(product=>product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return products
        }
    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory)setfilteredProducts(filterBy('BY_TITLE_AND_CATEGORY',products,searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory)setfilteredProducts(filterBy('BY_TITLE',products,searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory)setfilteredProducts(filterBy('BY_CATEGORY',products,searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory)setfilteredProducts(filterBy(null,products,searchByTitle,searchByCategory))

    },[products,searchByTitle,searchByCategory])


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
            setOrder,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShopingCartContext.Provider>
        
    )
}