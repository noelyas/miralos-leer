import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import getFirestore from '../../Firebase/firebase'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { idItem } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const dbQuery = db.collection('products').doc(idItem)
        dbQuery.get()
        .then( resp => {
            setItem( { id: resp.id, ...resp.data() } );
        })
        .catch( err => console.log(err) )
        .finally(()=>{
            setLoading(false)
        })

    }, [idItem])

    return (
        <main>
            {
                loading 
                ? 
                <Loading />
                : 
                <ItemDetail item={ item } /> 
            }
        </main>
    )
    
}

export default ItemDetailContainer
