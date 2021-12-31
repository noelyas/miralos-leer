import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to='/' activeclassname="active" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/category/fiction' className="nav-link" activeclassname="active">Ficción</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/category/nonfiction' className="nav-link" activeclassname="active">No Ficción</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/contactus' className="nav-link" activeclassname="active">Contacto</NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default NavBar
