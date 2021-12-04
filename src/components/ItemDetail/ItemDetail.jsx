import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ( {item} ) => {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ item.pictureURL } className="img-fluid rounded-start card-image" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{ item.title }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Autora: { item.author }</h6>
                        <p className="card-text">{ item.description }</p>
                        <p className="card-text"><small className="text-muted">Precio: ${ item.price }</small></p>
                        <ItemCount product={ item } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
