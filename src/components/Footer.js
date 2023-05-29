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
                        <a href='#about'>Nosotros</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Galería</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Curriculum</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Contacto</a>
                    </li>
                </ul>

                
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 DiCTSA </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
