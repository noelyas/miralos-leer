import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import './Cart.css'

const Cart = () => {

    const { cartList, emptyCart } = useCartContext()

    return (
        <section className="cartWrapper">
            <div className="row mb-3">
                { 
                    cartList.map( 
                        prod => 
                            <div className="card col-12" key={prod.item.id}>
                                <div className="row g-0"> 
                                    <div className="col-md-1">
                                        <Link to={`/detail/${prod.item.id}`}><img src={prod.item.pictureURL} className="img-fluid rounded-start card-image" alt={prod.item.title} /></Link>
                                    </div>
                                    <div className="col-md-11">
                                        {prod.item.title} por {prod.item.author} - Cantidad: {prod.quantity} 
                                    </div>
                                </div> 
                            </div> 
                    ) 
                }
            </div>
            <button className="btn btn-secondary" onClick={()=> emptyCart()}>Vaciar carrito</button>
        </section>
    )
}

export default Cart
