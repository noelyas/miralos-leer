import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const { cartList } = useCartContext()

    let cant = 0;
    cartList.forEach(
        cart => cant += cart.quantity
    )

    return (
        <>
            { cartList.length === 0 
                ?   
                    <section className="cartWidget"></section>
                :
                <section className="cartWidget">
                    <div className="material-icons-outlined">
                        shopping_cart
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        { cant }
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </section>
            }
        </>
    )
}

export default CartWidget
