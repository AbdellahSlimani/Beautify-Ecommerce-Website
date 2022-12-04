import React from "react";
import css from "./Testimonials.module.css";
import TestimonialsHeroImg from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials.js";

function Testimonials() {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Beautify believes in championing all beauty, living with courage,
            and standing fearlessly together to celebrate our differences
          </span>
        </div>
        {/* <img src={TestimonialsHeroImg} alt="testimonial" /> */}
        <div className={css.container}>
          <span>100K</span>
          <span>Happy customers</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="happy customer" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
