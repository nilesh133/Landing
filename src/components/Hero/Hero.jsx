import React from "react";
import "./hero.css";

// images import
import hero_image1 from "../../assets/images/hero/hero_image1.png";
import hero_image2 from "../../assets/images/hero/hero_image2.png";
import hero_image3 from "../../assets/images/hero/hero_image3.png";
import hero_image4 from "../../assets/images/hero/hero_image4.png";

// swiper import
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const Hero = () => {

    const heroImages = [
        {
            image: hero_image1
        },
        {
            image: hero_image2
        },
        {
            image: hero_image3
        },
        {
            image: hero_image4
        }
    ]

  return (
    <div className="hero">
      <div className="main_container">
        <div className="main_row">
          <div className="column-8 hero_header_main">
            <div className="hero_header">
              <h3>Landing Created By The Fine Folks</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line
              </p>
              <div className="hero_header_btns">
                <button>Live Preview</button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main_row">
          <div className="column-12">
            <div className="hero_swiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
              >
                {heroImages?.map((hr) => {
                  return (
                    <SwiperSlide>
                        <div className="hero_swiper_box" style={{backgroundImage: `url(${hr.image})`}}>
                        </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
