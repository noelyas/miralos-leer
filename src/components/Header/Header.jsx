import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import NavBar from '../NavBar/NavBar'
import './Header.css';

const Header = () => {
    return (
        <header className="contenedores">
            <CartWidget />
            <a href="#">
                <div id="banner">
                    <h1 className="animate__animated animate__fadeInRight">Míralos Leer</h1>
                </div>
            </a>
            <NavBar />
        </header>
    )
}

export default Header
