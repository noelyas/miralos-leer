import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'
import './Cart.css';


const Cart = () => {

    const { cartList } = useCartContext()

    return (
        <section className="cartWrapper">
            { cartList.length === 0 
                ?   <>
                        <h4 className="mb-4">Carrito vacío</h4>
                        <Link to="/"><button className="btn btn-primary">Ir a la tienda</button></Link>
                    </>
                :
                    <CartList />
            }
        </section>
    )
}

export default Cart
