import React from 'react'
import './Contacto.css'
import logo from './images/Logo.png'

const Contacto = () => {
    return (
        <div className='contacto' id='Contacto'>
            <div className='form' data-aos="zoom-in">
                <h1>¡Ponte en contacto con nosotros!</h1>
                <div className='formcontainer' >
                    <form action="https://formspree.io/f/mlekpwoo" method="POST">
                        <p>Nombre(s):
                            <input name='Nombre' type='text' placeholder='Nombre(s)' required />
                        </p>

                        <p>Correo electrónico:
                            <input name='Correo' type='text' placeholder='Correo Electrónico' requiered />
                        </p>

                        <p>Asunto:
                            <input name='Asunto' type='text' placeholder='Asunto' requiered />
                        </p>

                        <p>Mensaje:
                            <textarea name="comentarios" rows="2" cols="60" placeholder='Escribe tu queja o sugerencia...'></textarea>
                        </p>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>

            <div className='informacion' data-aos="zoom-in">
                <div className='imglogo'>
                    <img src={logo} alt='img' />
                </div>

                <h1>DiCTSA</h1>
                <div className='info'>
                    <h3>Teléfono:</h3>
                    <p>Tel: 618 813 4069.</p>
                    <h3>Dirección: </h3>
                    <p>Calle: Bruno Martinez # 335 Col, Zona Centro, 34000 Durango, Dgo. </p>
                    <h3>Horarios:</h3>
                    <p>Lunes a Viernes 9:00 - 15:00.</p>
                    <p>Sábado 9:00 - 14:00.</p>
                    <h3>Correo Electrónico:</h3>
                    <p>Contactodictsa@dictsa.com.</p>
                    
                    
                    
                </div>


            </div>
        </div>

    )
}

export default Contacto
