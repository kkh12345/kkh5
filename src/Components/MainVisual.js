import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MainVisual.css';
import Media from 'react-responsive';
import { useRef, useState } from 'react';

const MainVisual = () => {
  const swiperRef = useRef(null);
  const [slideTextAppeared, setsSlideTextAppeared] = useState(false);
  const slideObj = [
    {
      src: 'img/home/mainImg1',
      title: 'FABRIC SOFA',
      subTitle: '패브릭 소파',
      desc1: '부드러움과 컬러  ',
      desc2: '고급스러운 디자인까지 한번에',
      color: '#fff',
    },
    {
      src: 'img/home/mainImg2',
      title: 'FLOWER VASE',
      subTitle: '플라워 베이스',
      desc: '테이블에 놓는 센스 ',
      desc2: '자꾸만 눈이가는 화병',
      color: '#000',
    },
    {
      src: 'img/home/mainImg3',
      title: 'MODERN CHAIR',
      subTitle: '모던 체어',
      desc: '간결한 조형미 ',
      desc2: '부드러운 곡선이 주는 모던함',
      color: '#000',
    },
  ];
  return (
    <section className="main-visual">
      <Swiper
        modules={[Autoplay, Pagination]}
        speed={1000}
        className="main-visual-swiper"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setsSlideTextAppeared(true);
        }}
      >
        {slideObj.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className="main-visual-slide"
              style={{ color: slide.color }}
            >
              <div className="slide-img-wrap">
                <Media maxWidth={768}>
                  <img src={`${slide.src}-mobile.jpg`} alt={slide.title} />
                </Media>
                <Media minWidth={769}>
                  <img src={`${slide.src}.jpg`} alt={slide.title} />
                </Media>
              </div>
              <div
                className={`slide-text-wrap ${
                  slideTextAppeared ? 'appear' : null
                }`}
              >
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subTitle}</p>
                <p className="slide-desc">{slide.desc1}</p>
                <p className="slide-desc">{slide.desc2}</p>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="slide-button-wrap home-inner">
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
        </div>
        <div className="slide-button-wrap2 home-inner">
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.autoplay.start();
            }}
            className="slide-start"
          >
            <i className="xi-play"></i>
          </button>
          <button
            onClick={() => {
              if (swiperRef.current) swiperRef.current.autoplay.pause();
            }}
            className="slide-pause"
          >
            <i className="xi-pause"></i>
          </button>
        </div>
      </Swiper>
    </section>
  );
};
export default MainVisual;
