import React from 'react'
import './Demo.css'
import logo from './images/Logo.png'

const Demo = () => {
    return (
        <div className='formulario' id='Contacto'>
            <div className='form' data-aos="fade-down-right">
                <h1>¡Ponte en contacto con nosotros!</h1>
                <div className='formcontainer' >
                    <form action="https://formspree.io/f/mlekpwoo" method="POST">
                        <p>Nombre(s):
                            <input name='Nombre' type='text' placeholder='Nombre(s)' required />
                        </p>

                        <p>Apellidos:
                            <input name='Nombre' type='text' placeholder='Nombre(s)' required />
                        </p>

                        <p>Correo electrónico:
                            <input name='Correo' type='text' placeholder='Correo Electrónico' requiered />
                        </p>

                        <p>Asunto:
                            <input name='Correo' type='text' placeholder='Correo Electrónico' requiered />
                        </p>

                        <p>Queja o sugerencia:
                            <textarea name="comentarios" rows="2" cols="60" placeholder='Escribe tu queja o sugerencia...'></textarea>
                        </p>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>

            <div className='informacion'>
                <div className='imglogo'>
                    <img src={logo} alt='img' />
                </div>

                <h1>DiCTSA</h1>
                <div className='info'>
                    <h3>Teléfono:</h3>
                    <p>618 813 4069.</p>
                    <h3>Dirección: </h3>
                    <p>Calle: Bruno Martinez # 335 Col, Zona Centro, 34000 Durango, Dgo. </p>
                    <h3>Horarios:</h3>
                    <p>Lunes a Viernes 9:00 - 15:00 <p>Sábado 9:00 - 14:00.</p></p>
                </div>


            </div>
        </div>

    )
}

export default Demo
