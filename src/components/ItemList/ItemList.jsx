import React from 'react'
import Item from '../Item/Item'

const ItemList = ( { products, category } ) => {

    let categoryName = ''
    category === 'fiction' ?  categoryName = 'ficción' : categoryName = 'no ficción'


    return (

        <div className="row">
            <h2 className="mb-4">
            {
                category 

                ?

                `Libros de ${categoryName}`

                :

                `Todos los libros`
            
            }
            </h2>
            { products.map(            
                  prod => <Item key={prod.id} product={prod} />
            ) }
        </div>

    )
}

export default ItemList
