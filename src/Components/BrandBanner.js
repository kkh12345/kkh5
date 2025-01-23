import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BrandBanner.css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const BrandBanner = () => {
  const brandBannerImage = [
    "/img/home/brandBanner1.jpg",
    "/img/home/brandBanner2.jpg",
    "/img/home/brandBanner3.jpg",
  ];
  return (
    <section className="brand-banner">
      <div className="brand-banner-inner home-inner">
        <Swiper
          speed={1000}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="brand-banner-swiper"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {brandBannerImage.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image} alt={`브랜드배너${index}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default BrandBanner;
