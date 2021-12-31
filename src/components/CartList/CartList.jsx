import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

const CartList = () => {

    const { cartList, total, emptyCart, removeProduct, removeProducts, addQuantity } = useCartContext()

    return (
        <>
            <div className="row mb-3">
                { 
                    cartList.map( 
                        prod => 
                            <div className="card col-12 mb-1" key={prod.item.id}>
                                <div className="row g-0 p-2 align-items-center"> 
                                    <div className="col-md-1">
                                        <Link to={`/detail/${prod.item.id}`}><img src={prod.item.pictureURL} className="img-fluid rounded-start card-image" alt={prod.item.title} /></Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.item.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Autora: { prod.item.author }</h6>
                                            <p className="card-text">Precio unitario: ${ prod.item.price }</p>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex">
                                        <div className="material-icons cursor-pointer me-2" onClick={ () => removeProduct(prod.item.id,prod.quantity) }>
                                            remove
                                        </div>
                                        {prod.quantity}
                                        <div className="material-icons cursor-pointer ms-2" onClick={ () => addQuantity(prod.item.id,1) }>
                                            add
                                        </div>
                                    </div>
                                    <div className="col-md-1 d-flex">
                                        <div className="material-icons cursor-pointer" onClick={ () => removeProducts(prod.item.id) }>
                                            delete
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                    ) 
                }
            </div>
            <div className="text-end">
                <button className="btn btn-secondary" onClick={()=> emptyCart()}>Vaciar carrito</button>
            </div>
            <div className="row my-3">
                <div className="card col-12">
                    <div className="row g-0 align-items-center p-4">
                        Total a pagar: ${total}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList
