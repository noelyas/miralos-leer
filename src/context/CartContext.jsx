import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( { children } ) {

    const [cartList, setCartList] = useState([])

    const addNewProduct = (item) => {
        
        setCartList([...cartList, item])

    }
    
    const addQuantity = (id,quantity) => {
        
        cartList.forEach( (element) => {
            if( id === element.item.id) {
                const oldQuantity = element.quantity;
                const newQuantity = oldQuantity + quantity;

                element.quantity = newQuantity
            }
        })

    }

    const emptyCart = () => {
        setCartList([])
    }

    return(

        <CartContext.Provider value={{
            cartList,
            addNewProduct,
            addQuantity,
            emptyCart
        }}>
            { children }
        </CartContext.Provider>

    )


}

export default CartContextProvider

