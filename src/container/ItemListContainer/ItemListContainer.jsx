import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { getFetch } from '../../helpers/getFetch'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { idCategory } = useParams()

    useEffect(() => {

        if (idCategory) {

            getFetch
            .then( data => {
                console.log('Mock API')
                setProducts(data.filter( prod => prod.category === idCategory));
            })
            .catch( err => console.log(err) )
            return () => {
                console.log('clean')
            }
            
        } else {
            
            getFetch
            .then( data => {
                console.log('Mock API')
                setProducts(data);
            })
            .catch( err => console.log(err) )
            return () => {
             console.log('clean')
            }
        }

    }, [idCategory])

    return (
        <main>
            <ItemList products={ products } />
        </main>
    )
}

export default ItemListContainer
