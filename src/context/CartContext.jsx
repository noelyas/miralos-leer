import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( { children } ) {

    const [cartList, setCartList] = useState([])

    const addNewProduct = (item) => {
        
        setCartList([...cartList, item])

    }

    const removeProduct = (itemId,quantity) => {
        
        const index = cartList.findIndex(x => x.item.id === itemId);
        if(quantity>1){
            cartList[index].quantity = quantity-1;
        } else {
            cartList.splice(index,1)
        }
        setCartList([...cartList])

    }
    
    const addQuantity = (id,quantity) => {
        
        cartList.forEach( (element) => {
            if( id === element.item.id) {

                const oldQuantity = element.quantity;
                const newQuantity = oldQuantity + quantity;

                element.quantity = newQuantity
            }
        })
        setCartList([...cartList])

    }

    const emptyCart = () => {
        setCartList([])
    }

    return(

        <CartContext.Provider value={{
            cartList,
            addNewProduct,
            addQuantity,
            removeProduct,
            emptyCart
        }}>
            { children }
        </CartContext.Provider>

    )


}

export default CartContextProvider

