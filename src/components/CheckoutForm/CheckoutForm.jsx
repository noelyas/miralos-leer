import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import firebase from "firebase/app"
import 'firebase/firestore'
import getFirestore from '../../Firebase/firebase'
import './CheckoutForm.css';
import Swal from 'sweetalert2'

const CheckoutForm = () => {

    const { cartList, total, emptyCart } = useCartContext()

    const [generated, setGenerated] = useState(false)
    const [orderId, setOrderId] = useState('')

    const generateOrder = (evt) => {

        evt.preventDefault()
        
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const email = document.getElementById('mail').value
        const repeatEmail = document.getElementById('repeatMail').value
        
        if(email === repeatEmail) {

            const order = {}
    
            order.date = firebase.firestore.Timestamp.fromDate(new Date())
            
            order.buyer = {
                name: name,
                phone: phone,
                email: email
            }
            order.total = total
            
            order.items = cartList.map( cartItem => {       
                const id = cartItem.item.id
                const title = cartItem.item.title
                const price = cartItem.item.price * cartItem.quantity
                return {id, title, price}
            })
    
            const db = getFirestore()
            db.collection('orders').add(order)
            .then(
                (resp) => {

                    const itemsToUpdate = db.collection('products').where(
                        firebase.firestore.FieldPath.documentId() , 'in', cartList.map( i => i.item.id )
                    )
                    const batch = db.batch()
                    itemsToUpdate.get()
                    .then( collection => {
                        collection.docs.forEach(docSnapshot => {
                            batch.update(docSnapshot.ref, {
                                stock: docSnapshot.data().stock - cartList.find(prod => prod.item.id === docSnapshot.id).quantity
                            })
                        })
                        batch.commit().then(
                            res => {
                                console.log('Stock actualizado.')
                            }
                        )
                    })
                    .catch( err => console.log(err) )

                    setGenerated(true)
                    setOrderId(resp.id)
                    emptyCart()
                }
            )
            .catch( err => console.log(err) )

        } else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El e-mail no coincide.'
            })

        }

    }

    return (
        <>
        {
            generated

            ?

            <>
                <div id="order-success">Tu orden <span className="d-inline-block px-2">#{orderId}</span> fue generada</div>
                <Link to="/"><button className="btn btn-primary mt-5">Ir a la tienda</button></Link>
            </>

            :

            <form onSubmit={generateOrder}>
                <fieldset>
                    <legend>Datos personales</legend>
                    <div className="col">
                        <label htmlFor="name">Nombre y apellido</label>
                        <input type="text" id="name" className="form-control my-3" placeholder='Ingresá tu nombre' required />
                    </div>
                    <div className="col">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="number" id="phone" className="form-control my-3" placeholder='Ingresá tu teléfono' required />
                    </div>
                    <div className="col">
                        <label htmlFor="mail">E-mail</label>
                        <input type="email" id="mail" className="form-control my-3" placeholder='Ingresá tu e-mail' required />
                    </div>
                    <div className="col">
                        <label htmlFor="repeatMail">Repetir E-mail</label>
                        <input type="email" id="repeatMail" className="form-control my-3" placeholder='Volvé a ingresar tu e-mail' required />
                    </div>
                </fieldset>
                <div className="col text-end">
                    <input type="reset" value="Limpiar" className="btn btn-secondary me-2" />
                    <input type="submit" value="Confirmar compra" className="btn btn-primary" />
                </div>
            </form>
        }
        </>
    )
}

export default CheckoutForm
