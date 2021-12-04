import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"


const FinishCart = () => {

    return <Link to="/cart"><button className="btn btn-primary">Finalizar compra</button></Link>

}

const AddCart = ( {handler} ) => {
    return <button className="btn btn-secondary" onClick={ handler }>Agregar al carrito</button>
}


const ItemCount = ( {product} ) => {

    const [Count, setCount] = useState(0)

    const { cartList, addNewProduct, addQuantity } = useCartContext()

    const onAdd = (quantity) => {

        setCount(quantity)

        const result = cartList.find( prod => prod.item.id === product.id )

        if(!result) {
            
            addNewProduct( { item: product, quantity: quantity} )

        } else {

            addQuantity( product.id, quantity )
        }


    }

    const [inputType, setInputType] = useState('add')

    const handler = () => {

        setInputType('finish')
        onAdd(Count)

    }

    const add = () => {
        if (Count < product.stock) {
            setCount(Count + 1)
        } else {
            alert('No hay más stock disponible.');
        }
    }

    const substract = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            setCount(0);
        }
    }
    

    return (
        <>
            <div className="mt-4">
                <button type="button" className="btn btn-outline-success me-3" onClick={substract}>-</button>
                <span>{Count}</span>
                <button type="button" className="btn btn-outline-success ms-3" onClick={add}>+</button>
            </div>
            <div className="mt-4">
                {

                    inputType === 'add' 
                    
                    ?

                    <AddCart handler={handler} />

                    :

                    <FinishCart />

                }
            </div>
        </>
    )
}

export default ItemCount
