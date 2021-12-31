import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider( { children } ) {

    const [cartList, setCartList] = useState([])

    const addNewProduct = (item) => {     
        setCartList([...cartList, item])
    }

    let total = 0;
    cartList.forEach(
        cart => total += cart.item.price * cart.quantity
    )

    const removeProduct = (itemId,quantity) => {
        
        const index = cartList.findIndex(x => x.item.id === itemId);
        if(quantity>1){
            cartList[index].quantity = quantity-1;
        } else {
            cartList.splice(index,1)
        }
        setCartList([...cartList])

    }

    const removeProducts = (itemId) => {
        
        const index = cartList.findIndex(x => x.item.id === itemId);
        cartList.splice(index,1)
        setCartList([...cartList])

    }
    
    const addQuantity = (id,quantity) => {
        
        let checkStock = 0

        cartList.forEach( (element) => {
            if( id === element.item.id) {
                checkStock = element.item.stock - element.quantity - quantity
                if(checkStock>=0) {
                    const oldQuantity = element.quantity;
                    const newQuantity = oldQuantity + quantity;
                    element.quantity = newQuantity
                }
            }
        })
        if(checkStock>=0) {
            setCartList([...cartList])
        }

    }

    const emptyCart = () => {
        setCartList([])
    }

    const [checkOut, setCheckOut] = useState(false)

    const goToCheckOut = () =>{
        setCheckOut(true)
    }

    const resetCheckOut = () =>{
        setCheckOut(false)
    }

    return(

        <CartContext.Provider value={{
            cartList,
            addNewProduct,
            addQuantity,
            removeProduct,
            removeProducts,
            emptyCart,
            goToCheckOut,
            resetCheckOut,
            checkOut,
            total
        }}>
            { children }
        </CartContext.Provider>

    )


}

export default CartContextProvider

