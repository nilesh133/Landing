import React, { useEffect, useState } from 'react';
import './testimonials.css';

// images import
import testimonials_image1 from '../../assets/images/testimonials/testimonials_person1.png';
import testimonials_image2 from '../../assets/images/testimonials/testimonials_person2.png';
import testimonials_image3 from '../../assets/images/testimonials/testimonials_person3.png';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Keyboard, Pagination, Navigation } from "swiper/modules";


const Testimonials = () => {
    const [slideShowNum, setSlideShowNum] = useState(1)
    useEffect(() => {
        if(window.innerWidth < 768) {
            setSlideShowNum(1)
        }
        else {
            setSlideShowNum(2)
        }
    }, [window.innerWidth])

    const testimonialsData = [
        {
            profileImg: testimonials_image1,
            name: 'Mark Smith',
            feedback: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
        },
        {
            profileImg: testimonials_image2,
            name: 'John Griffin',
            feedback: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        },
        {
            profileImg: testimonials_image3,
            name: 'Maria Doe',
            feedback: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
        }
    ]
  return (
    <div className='testimonials'>
           <div className='testimonials_overlay'>

            </div>
        <div className='main_container'>
            <div className="main_row">
                <div className="column-8 column-8-ml content_header testimonials_heading">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div className='main_row'>
                <div className='column-8 testimonials_swiper_main'>
                    <div className='testimonials_swiper'>
                    <Swiper
                        slidesPerView={slideShowNum}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            testimonialsData?.map((ts) => {
                                return (
                                    <SwiperSlide>
                                        <div className='testimonials_swiper_box'>
                                            <div className='testimonials_swiper_box_profile'>
                                                <img src={ts.profileImg} alt="" />
                                            </div>
                                            <div className='testimonials_swiper_box_details'>
                                                <h3>{ts.name}</h3>
                                                <p>{ts.feedback}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials