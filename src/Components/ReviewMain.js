import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "./ReviewMain.css";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { SectionTitle } from "../StyledComponent";
const ReviewMain = ({ reviews, products }) => {
  const swiperRef = useRef();
  return (
    <section className="review-main">
      <div className="review-main-inner home-inner">
        <SectionTitle className="appear-down">
          상품 사용후기
          <a className="plus" href="#none">
            <i className="xi-plus"></i>
          </a>
        </SectionTitle>
        <div className="review-main-swiper-wrapper appear-down">
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.slidePrev();
            }}
            className="slide-prev"
          >
            <i className="xi-arrow-left"></i>
          </button>
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.slideNext();
            }}
            className="slide-next "
          >
            <i className="xi-arrow-right"></i>
          </button>

          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Autoplay, Pagination]}
            className="review-main-swiper"
            pagination={{ clickable: true }}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              480: {
                slidesPerView: 3,
              },
              350: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {reviews !== null && products !== null
              ? reviews.map((review, index) => {
                  let findProduct = -1;
                  if (review.productId !== null) {
                    findProduct = products.find((product) => {
                      return product.productId === review.productId;
                    });
                  }

                  return (
                    <SwiperSlide key={index}>
                      <ReviewCard
                        index={index}
                        paginame={"home"}
                        product={findProduct}
                        review={review}
                      ></ReviewCard>
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default ReviewMain;
