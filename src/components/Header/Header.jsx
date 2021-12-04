import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import NavBar from '../NavBar/NavBar'
import './Header.css';

const Header = () => {
    return (
        <header className="contenedores">
            <Link to='/cart'>
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
