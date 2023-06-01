import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './images/img4.jpg'
import img2 from './images/img3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import './Galeria.css'

// import required modules
import { Pagination, Navigation } from "swiper";

const Galeria = () => {
    return (
        <div className='galeria' id='Galeria'>
            <div className='container'>
                <h2>Galería</h2>
                <span className='line'></span>
                <div className='content'>
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={img1} alt='img' /></SwiperSlide>
                            <SwiperSlide><img src={img2} alt='img' /></SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Galeria
