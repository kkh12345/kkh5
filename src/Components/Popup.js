import { useEffect, useRef, useState } from "react";
import Media from "react-responsive";
import "./Popup.css";
const Popup = ({ popupRef }) => {
  const textBoxRef = useRef(null);
  const slideRef = useRef([]);

  const popupText = [
    "신규 회원가입시 다양한 혜택이 가득",
    "선물포장을 선택하시는 분들께 무료 포장 서비스를 제공합니다. 마음을 담아 선물하세요",
    "신규 회원가입시 다양한 혜택이 가득",
  ];
  const popupMobileText = [
    "신규 회원가입시 다양한 혜택이 가득",
    "무료 포장 서비스를 제공합니다. ",
    "신규 회원가입시 다양한 혜택이 가득",
  ];

  const [transition, setTransition] = useState(false);
  const [popupShow, setPopupShow] = useState(true);
  const [page, setPage] = useState(0);
  let slideHeight = 45;
  useEffect(() => {
    let lastPage = slideRef.current.length - 1;
    let timer;
    if (page === 0) {
      timer = setTimeout(() => {
        setTransition(true);
        setPage(page + 1);
      }, 2000);
    } else if (page < lastPage) {
      timer = setTimeout(() => {
        setPage(page + 1);
      }, 2000);
    } else if (page === lastPage) {
      timer = setTimeout(() => {
        setTransition(false);
        setPage(0);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  return popupShow ? (
    <div className="popup" ref={popupRef}>
      <div className="popup-inner home-inner">
        <ul
          ref={textBoxRef}
          className="popup-text-box"
          style={{
            transition: transition ? `all .5s` : "none",
            transform: `translateY(-${slideHeight * page}px)`,
          }}
        >
          <Media minWidth={769}>
            {popupText.map((text, index) => {
              return (
                <li
                  ref={(el) => {
                    slideRef.current[index] = el;
                  }}
                  style={{
                    lineHeight: `${slideHeight}px`,
                    height: `${slideHeight}px`,
                  }}
                  key={index}
                >
                  {text}
                </li>
              );
            })}
          </Media>
          <Media maxWidth={768}>
            {popupMobileText.map((text, index) => {
              return (
                <li
                  ref={(el) => {
                    slideRef.current[index] = el;
                  }}
                  style={{
                    lineHeight: `${slideHeight}px`,
                    height: `${slideHeight}px`,
                  }}
                  key={index}
                >
                  {text}
                </li>
              );
            })}
          </Media>
        </ul>

        <i
          onClick={() => {
            setPopupShow(false);
          }}
          className="xi-close popup-close-button"
        ></i>
      </div>
    </div>
  ) : null;
};
export default Popup;
