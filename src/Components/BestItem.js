import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductsCard from "./ProductsCard";
import { SectionTitle } from "../StyledComponent";
import { useEffect, useRef, useState } from "react";
import "./BestItem.css";
const BestItem = ({ products }) => {
  const [isBestArr, setIsBestArr] = useState([]);
  const swiperRef = useRef(null);
  const [nextButtonShow, setNextButtonShow] = useState(true);
  const [prevButtonShow, setPrevButtonShow] = useState(false);
  useEffect(() => {
    if (products !== null) {
      let filter = products.filter((product) => {
        return product.best === true;
      });
      setIsBestArr(filter);
    }
  }, [products]);

  return (
    <section className=" best-item">
      <div className="best-item-inner home-inner">
        <SectionTitle className="appear-down">BEST ITEM</SectionTitle>
        <div className="best-item-swiper-wrapper appear-down">
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.slideNext();
            }}
            className="best-swiper-button-next"
            style={{
              display: nextButtonShow ? "block" : "none",
            }}
          ></button>
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.slidePrev();
            }}
            className="best-swiper-button-prev"
            style={{
              display: prevButtonShow ? "block" : "none",
            }}
          ></button>
          <Swiper
            modules={[Autoplay, Pagination]}
            speed={1000}
            className="best-item-swiper"
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerGroup: 3,
                slidesPerView: 3,
              },
              0: {
                slidesPerGroup: 2,
                slidesPerView: 2,
              },
            }}
            observer={true}
            observeParents={true}
            onRealIndexChange={(swiper) => {
              if (
                swiper.pagination.bullets[0].classList.contains(
                  "swiper-pagination-bullet-active"
                )
              ) {
                setPrevButtonShow(false);
              } else if (
                swiper.pagination.bullets[
                  swiper.pagination.bullets.length - 1
                ].classList.contains("swiper-pagination-bullet-active")
              ) {
                setNextButtonShow(false);
              } else {
                setNextButtonShow(true);
                setPrevButtonShow(true);
              }
            }}
          >
            {isBestArr.length > 0
              ? isBestArr.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ProductsCard
                        hasCardIcons={true}
                        hasDiscontRate={true}
                        cardTextHover={false}
                        product={product}
                      ></ProductsCard>
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
export default BestItem;
