import "./BrandOnTv.css";
import { SectionTitle } from "../StyledComponent";

const BrandOnTv = () => {
  return (
    <section className="brand-on-tv ">
      <div className="brand-on-tv-inner home-inner">
        <SectionTitle className="appear-down">BRAND ON TV</SectionTitle>
        <div className="brand-video-wrapper appear-down">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/Ds8RE70jyeQ?si=HQkStSXn-bj7NhZQ&autoplay=1&mute=1&&controls=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default BrandOnTv;
