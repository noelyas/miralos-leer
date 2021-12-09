import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import getFirestore from '../../Firebase/firebase'



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        const db = getFirestore()
        let dbQuery
        if(idCategory) {
            dbQuery = db.collection('products').where('category', "==", idCategory)
        } else {
            dbQuery = db.collection('products')
        }
        dbQuery.get()
        .then (
            data => {
                setProducts( data.docs.map( item => ( { id: item.id, ...item.data() } ) ) )
            }
        )
        .finally(()=>{
            setLoading(false)
        })
        .catch( err => console.log(err) )
        return () => {
            console.log('clean')
        }

    }, [idCategory])

    return (
        <main>
            {
                loading 
                ? 
                <h4>Cargando...</h4> 
                : 
                <ItemList products={ products } /> 
            }
        </main>
    )
}

export default ItemListContainer
