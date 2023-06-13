import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Nosotros'>Nosotros</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Galeria'>Galería</a>
                    </li>
                    <li className='nav-item'>
                        <a href='Curriculum'>Curriculum</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Contacto'>Contacto</a>
                    </li>
                </ul>
                
                <div className='bottom'>
                    <span className='line'></span>
                    <div className='redes'>
                        <a href='https://www.facebook.com/DiCTSA' rel='noreferrer' target={"_blank"}><i class="fa-brands fa-square-facebook fa-xl" style={{ color: "white" }}></i></a>
                    </div>
                    <p>2023 DiCTSA </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
