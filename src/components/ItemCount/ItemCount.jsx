import React from 'react'
import {useState} from "react"

const ItemCount = ( {stock} ) => {

    const [Count, setCount] = useState(0);

    const add = () => {
        if (Count < stock) {
            setCount(Count + 1)
        } else {
            alert('No hay stock disponible.');
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
        <div className="mt-4">
            <button type="button" className="btn btn-outline-success me-3" onClick={substract}>-</button>
            <span>{Count}</span>
            <button type="button" className="btn btn-outline-success ms-3" onClick={add}>+</button>
        </div>
    )
}

export default ItemCount
