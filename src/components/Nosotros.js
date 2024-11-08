import React, {useEffect} from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import AOS from "aos";
import './Nosotros.css';
import 'aos/dist/aos.css';



const Nosotros = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
        }, []);
    return (
        <>
            <div className='nosotros' id='Nosotros' >
                <div className='container' data-aos="fade-left">
                    <img src={img1} alt='imagen' />
                    <div className='col-2'>
                        <h2>Misión</h2>
                        <span className='line'></span>
                        <p>Satisfacer las necesidades de nuestros clientes al más alto nivel de calidad, tanto en las obras construidas, como
                            a través del servicio que brindamos.</p>
                    </div>
                </div>

                <div className='container2' data-aos="fade-right">
                    <div className='col-2'>
                        <h2>Visión</h2>
                        <span className='line'></span>
                        <p>Convertir a esta constructora en una de las principales a nivel nacional, manteniendo nuestra filosofía
                            corporativa y alcanzando estándares de calidad en cada una de nuestras obras de infraestructura y que nos
                            permitan ser competitivos.</p>
                    </div>

                        <img src={img2} alt='imagen' />


                </div>
            </div>


        </>
    )
}

export default Nosotros
