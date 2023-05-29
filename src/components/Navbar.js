import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/Logo.png'
import {Link} from 'react-scroll'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <p className='logodictsa'> 
                        <img src={logo} alt='logo' /> 
                        DiCTSA
                    </p>
                </a>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='hero' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-139} duration={700} onClick={closeMenu}  >Inicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='about' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-90} duration={700} onClick={closeMenu}  >Nosotros</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='testimonials' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-139} duration={700} onClick={closeMenu}  >Galería</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='Contacto' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-139} duration={700} onClick={closeMenu}  >Curriculum</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='Contacto' style={{color:"#ffff", cursor:"pointer"}} spy={true} smooth={true} offset={-90} duration={700} onClick={closeMenu}  >Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
