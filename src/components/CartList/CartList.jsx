import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

const CartList = () => {

    const { cartList, emptyCart, removeProduct } = useCartContext()

    let total = 0;

    cartList.forEach(

        cart => total += cart.item.price * cart.quantity

    )

    return (
        <>
            <div className="row mb-3">
                { 
                    cartList.map( 
                        prod => 
                            <div className="card col-12" key={prod.item.id}>
                                <div className="row g-0 p-2 align-items-center"> 
                                    <div className="col-md-1">
                                        <Link to={`/detail/${prod.item.id}`}><img src={prod.item.pictureURL} className="img-fluid rounded-start card-image" alt={prod.item.title} /></Link>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.item.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Autora</h6>
                                            <p className="card-text">Precio unitario: ${ prod.item.price }</p>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        {prod.quantity}
                                    </div>
                                    <div className="col-md-1">
                                        <div className="material-icons cursor-pointer" onClick={ () => removeProduct(prod.item.id,prod.quantity) }>
                                            delete
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                    ) 
                }
            </div>
            <div className="row mb-3">
                <div className="card col-12">
                    <div className="row g-0 align-items-center p-4">
                        Total a pagar: ${total}
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary" onClick={()=> emptyCart()}>Vaciar carrito</button>
        </>
    )
}

export default CartList
