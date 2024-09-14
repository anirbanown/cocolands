import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import images from '../../constants/images';
import "./Home.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <div className="app__home section__padding" id="home">
      
      <div className="app__home-content">
        <h1>DELIVERING INDIAN AUTHENTICITY WITH BLOCKCHAIN TRANSPARENCY</h1>
        <p className="p__font1">A community of Indian Diaspora for meeting their needs of Traditional/Ethnic/Handicrafts through India Post</p>
        <button className="button_1">Explore Now</button>
        <div className="app__home-content_amount">
          <div>
            <h1>219+</h1>
            <p>Countries</p>
          </div>
          <div>
            <h1>10K+</h1>
            <p>Orders</p>
          </div>
          <div>
            <h1>2K+</h1>
            <p>Sellers</p>
          </div>
        </div>
      </div>
      <div className="app__home-images">
        <Swiper
          spaceBetween={20}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <SwiperSlide key={num} className="swiper-slide">
              <img src={images[`gradient_${num}`]} alt={`Gradient ${num}`} className="object-cover" />
              <div className="swiper__content">
                <div className="swiper__content-top">
                  <div className="swiper__content_profil">
                  </div>
                </div>
                  <div className="content__2">
                    <div className="ends__in"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;