import React from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( { products } ) => {
    return (
        <main>
            <ItemList products={ products } />
        </main>
    )
}

export default ItemListContainer
