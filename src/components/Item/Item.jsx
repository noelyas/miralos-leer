import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css';

const Item = ( { product } ) => {

    return (

        <div className="card mb-3 col-6">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 px-2">
                    <img src={ product.pictureURL } className="img-fluid rounded-start card-image" alt="..." />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{ product.title }</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Autora: { product.author }</h6>
                        <p className="card-text"><small className="text-muted">Precio: ${ product.price }</small></p>
                        <Link to={`/detail/${product.id}`} className="btn btn-secondary">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item
