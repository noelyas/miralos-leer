import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
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

    }, [idCategory])

    return (
        <main>
            {
                loading 
                ? 
                <Loading />
                :
                <ItemList products={ products } category={idCategory} /> 

            }
        </main>
    )
}

export default ItemListContainer
