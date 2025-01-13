import styled from 'styled-components';
import Media from 'react-responsive';
const EventBannerSection = styled.section`
  & .event-banner-box {
    margin-top: 100px;
    position: relative;
  }

  & .event-text-wrap {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: #47292b;
    z-index: 1;
    & > h3 {
      font-size: 1.75rem;
      margin-bottom: 10px;
      & > span:last-child {
        font-weight: 300;
        margin-left: 0.2rem;
      }
    }
  }

  & .event-image-wrap {
    display: block;
    overflow: hidden;

    & img {
    min-height:120px;
      transition: transform 0.5s;
    }

    &:hover > img {
      transform: scale(1.1);
    }
  }
    @media screen and (max-width: 830px) {
    & .event-text-wrap {
      & > h3{
        font-size:1.5rem
      }
    }
  @media screen and (max-width: 768px) {
    & .event-text-wrap {
      & > h3 {
        font-size: 1.4375rem;
        & > span:last-child {
          display: none;
        }
      }
      & > p {
       
        font-size: 0.8125rem;
      }
    }

      @media screen and (max-width: 480px) {
    & .event-text-wrap {
      & > p {
        font-weight:300;
      }
    }
  }
`;
const EventBanner = () => {
  return (
    <EventBannerSection className="event-banner ">
      <div className="event-banner-inner home-inner">
        <div className="event-banner-box">
          <div className="event-text-wrap">
            <h3>
              <span>브랜드X카톡플친</span> <span>#신규추가이벤트</span>
            </h3>
            <p>카카오톡 상담 오픈 ! 지금 바로 상담가능</p>
          </div>
          <a className="event-image-wrap" href="#none">
            <Media minWidth={769}>
              <img src="/img/home/main_banner03.jpg" alt="메인배너03" />
            </Media>
            <Media maxWidth={768}>
              <img src="/img/home/main_banner03-mobile.jpg" alt="메인배너03" />
            </Media>
          </a>
        </div>
      </div>
    </EventBannerSection>
  );
};
export default EventBanner;
