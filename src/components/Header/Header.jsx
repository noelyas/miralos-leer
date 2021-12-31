import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget'
import NavBar from '../NavBar/NavBar'
import './Header.css';

const Header = () => {

    const { resetCheckOut } = useCartContext()

    return (
        <header className="contenedores">
            <Link to='/cart' onClick={resetCheckOut}>
                <CartWidget />
            </Link>
            <Link to='/'>
                <div id="banner">
                    <h1 className="animate__animated animate__fadeInRight">Míralos Leer</h1>
                </div>
            </Link>
            <NavBar />
        </header>
    )
}

export default Header
