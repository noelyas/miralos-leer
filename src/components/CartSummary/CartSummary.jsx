import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartSummary = () => {

    const { cartList, total } = useCartContext()

    return (   
        <>  
            {
                cartList.length === 0 

                ?

                <br />

                :
                    <>
                    <h2>Finalizar compra</h2>
                    <div className="row my-3">
                        <legend>Detalle de la compra</legend>
                        { 
                            cartList.map( 
                                prod => 
                                    <div className="card col-12 mb-1" key={prod.item.id}>
                                        <div className="row g-0 p-2 align-items-center"> 
                                            <div className="col-md-1">
                                                <Link to={`/detail/${prod.item.id}`}><img src={prod.item.pictureURL} className="img-fluid rounded-start card-image" alt={prod.item.title} /></Link>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <h5 className="card-title">{prod.item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Autora</h6>
                                                    <p className="card-text">Precio unitario: ${ prod.item.price }</p>
                                                </div>
                                            </div>
                                            <div className="col-md-1 d-flex">
                                                {prod.quantity}        
                                            </div>
                                        </div> 
                                    </div> 
                            ) 
                        }
                    </div>
                    <div className="row my-3">
                        <div className="card col-12">
                            <div className="row g-0 align-items-center p-4">
                                Total a pagar: ${total}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default CartSummary
