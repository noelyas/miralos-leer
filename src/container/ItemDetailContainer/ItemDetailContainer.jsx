import React from 'react'
import { useState, useEffect } from 'react'
import { Products } from "../../helpers/Products"
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { idItem } = useParams()

    useEffect(() => {

        const getItem = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(Products.find(producto => producto.id === idItem));
            }, 2000)
        
        })

        getItem.then( (data) => {
            console.log('Mock API')
            setItem(data);
        })
        .catch( err => console.log(err) )
        .finally(()=>{
            setLoading(false)
        })
        return () => {
            console.log('clean')
        }

    }, [idItem])

    return (
        <main>
            {
                loading 
                ? 
                <h4>Cargando...</h4> 
                : 
                <ItemDetail item={ item } /> 
            }
        </main>
    )
    
}

export default ItemDetailContainer
