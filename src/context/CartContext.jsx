import { createContext, useState } from "react"

export  const cartContext = createContext();


export default function Cartprovider({children}) {

    const [cart, setCart] = useState([])

     const addProduct = productos => {
        const inCart = cart.find(productInCart => productInCart.id === productos.id);
        if (inCart) {
            setCart
            (cart.map(productInCart => productInCart.id === productos.id? {...inCart, quantity: inCart.quantity + 1} : productInCart))
        } else {
            setCart([...cart, {...productos, quantity: 1}])
        }
    }

    return(
        <cartContext.Provider value={{cart, addProduct}}>{children} </cartContext.Provider>
    )
    
}