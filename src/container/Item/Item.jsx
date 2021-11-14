import React from 'react'
import './Item.css';

const Item = ( { product } ) => {
    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={ product.pictureURL } className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-10">
                <div className="card-body">
                    <h5 className="card-title">{ product.title }</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Autora: { product.author }</h6>
                    <p className="card-text">{ product.description }</p>
                    <p className="card-text"><small className="text-muted">Precio: ${ product.price }</small></p>
                    <a href="#" class="btn btn-secondary">Ver detalle</a>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Item
