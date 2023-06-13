import React, { useRef, useState } from 'react';
import './Contacto.css';
import logo from './images/Logo.png';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contacto = () => {
    const form = useRef();
    const [state, setState] = useState({
        user_name: '',
        user_email: '',
        message: '',
        subject: '',
        errors: {},
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const validate = (data) => {
        const errors = {};

        if (!data.user_name) {
            errors.user_name = 'Rellenar campo';
        }

        if (!data.user_email) {
            errors.user_email = 'Rellenar campo';
        } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
            errors.user_email = 'Formato de correo electrónico inválido';
        }

        if (!data.message) {
            errors.message = 'Rellenar campo';
        }

        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const { errors, ...sinErrors } = state;
        const validationErrors = validate(sinErrors);
        setState({ ...state, errors: validationErrors });

        if (!Object.keys(validationErrors).length) {
            const templateParams = {
                ...sinErrors,
                subject: state.subject, // Incluir el asunto personalizado
            };

            emailjs.sendForm('service_s9yu5v8', 'template_6c4elmf', form.current, 'E02PBmg5BlIAgpC9Z', templateParams)
                .then(() => {
                    console.log('Correo enviado');
                    notify();
                })
                .catch((error) => {
                    console.error('Error al enviar el correo:', error);
                    showError();
                });
        } else {
            showError();
        }
    };

    const notify = () =>
        toast.success('¡Enviado con éxito!', {
            position: 'bottom-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });

    const showError = () =>
        toast.error('¡Error, rellena los campos!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });

    return (
        <>
            <div className="contacto" id="Contacto">
                <div className="form" data-aos="zoom-in">
                    <h1>¡Ponte en contacto con nosotros!</h1>
                    <div className="formcontainer">
                        <form ref={form} onSubmit={sendEmail}>
                            <p>
                                Nombre:
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="Nombre..."
                                    required
                                    onChange={handleChange}
                                />
                                {state.errors.user_name && <span>{state.errors.user_name}</span>}
                            </p>

                            <p>
                                Correo electrónico:
                                <input
                                    name="user_email"
                                    type="email"
                                    placeholder="Correo electrónico..."
                                    required
                                    onChange={handleChange}
                                />
                                {state.errors.user_email && <span>{state.errors.user_email}</span>}
                            </p>

                            <p>
                                Asunto:
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Asunto del mensaje..."
                                    required
                                    onChange={handleChange}
                                    value={state.subject}
                                />
                            </p>

                            <p>
                                Mensaje:
                                <textarea
                                    name="message"
                                    rows="2"
                                    cols="60"
                                    placeholder="Escribe tu mensaje..."
                                    required
                                    onChange={handleChange}
                                />
                                {state.errors.message && <span>{state.errors.message}</span>}
                            </p>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>

                <div className="informacion" data-aos="zoom-in">
                    <div className="imglogo">
                        <img src={logo} alt="img" />
                    </div>

                    <h1>DiCTSA</h1>
                    <div className="info">
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
            <ToastContainer />
        </>
    );
};

export default Contacto;