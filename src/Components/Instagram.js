import { SectionTitle } from '../StyledComponent';
import './Instagram.css';

const Instagram = () => {
  const instagramImage = [
    '/img/home/insta01.jpg',
    '/img/home/insta02.jpg',
    '/img/home/insta03.jpg',
    '/img/home/insta04.jpg',
    '/img/home/insta05.jpg',
    '/img/home/insta06.jpg',
    '/img/home/insta07.jpg',
    '/img/home/insta08.jpg',
    '/img/home/insta09.jpg',
    '/img/home/insta10.jpg',
    '/img/home/insta11.jpg',
    '/img/home/insta12.jpg',
    '/img/home/insta13.jpg',
    '/img/home/insta14.jpg',
  ];
  return (
    <section className="instagram ">
      <div className="instagram-inner home-inner">
        <SectionTitle className="appear-down">Instagram</SectionTitle>
        <ul className="instagram-grid-box appear-down">
          {instagramImage.map((image, index) => {
            return (
              <li key={index}>
                <a href="#none">
                  <img src={image} alt={`인스타${index}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Instagram;
