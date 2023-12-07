import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>GamingHouse</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/PlayStation">PlayStation</Link></li>
            <li><Link className="menu-link" to="/productos/XBOX">XBOX</Link></li>
            <li><Link className="menu-link" to="/productos/Nintendo">Nintendo</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar