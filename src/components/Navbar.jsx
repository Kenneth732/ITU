import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../pages/img/logo.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className='landing'>
            <section className='header'>
                <nav className="navbar">
                    <div className="nav-brand">
                        <img src={Logo} className='logo' />
                    </div>
                    <ul className={`nav-links ${isOpen ? 'visible' : ''}`}>
                        <img src={Logo} className='small-logo' />
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button className="menu-icon" onClick={toggleMenu}>
                       <i class="fas fa-bars"></i>
                    </button>
                </nav>
            </section>
        </div>
    )
}