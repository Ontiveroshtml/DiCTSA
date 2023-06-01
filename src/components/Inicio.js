import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import './Inicio.css'
import logo from './images/Logo.png'
import img1 from './images/img3.jpg'
import img2 from './images/img4.jpg'
import img3 from './images/img5.jpg'
import AOS from "aos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";


// import required modules
import { Autoplay, EffectFade } from "swiper";

const Inicio = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
        }, []);
    return (
        <>
            <div id='Inicio' className='inicio'>

            <div className='content' data-aos="fade-down-right">
                    <p>
                        <img src={logo} alt='logo' />
                        DiCTSA
                    </p>
                    <p>Diseño y Construcciones Tecnologicas SA de CV</p>
                </div>
                
                <div className="fondo">
                    <Swiper
                    
                        centeredSlides={true}
                        effect={"fade"}
                        loop={"true"}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, EffectFade]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt='img' /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt='img' /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt='img' /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Inicio
