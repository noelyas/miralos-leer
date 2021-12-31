import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutContainer from '../../container/CheckoutContainer/CheckoutContainer';
import { useCartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'
import NotFound from '../NotFound/NotFound';
import './Cart.css';


const Cart = () => {

    const { cartList, goToCheckOut, checkOut } = useCartContext()
    

    return (
        <section className="cartWrapper">
            { cartList.length === 0 && !checkOut 
                ?   <>
                        <NotFound message={'No hay productos en el carrito'} />
                        <Link to="/"><button className="btn btn-primary">Ir a la tienda</button></Link>
                    </>
                : 
                    !checkOut

                    ?
                        <>
                            <CartList />
                            <button className="btn btn-primary" onClick={goToCheckOut}>Finalizar compra</button>
                        </>

                    :
                    
                        <CheckoutContainer />

            }
        </section>
    )
}

export default Cart
