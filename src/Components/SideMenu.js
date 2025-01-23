import { useState } from 'react';
import { useNavigate } from 'react-router';
import './SideMenu.css';

const SideMenu = ({ setSideMenuShow, sideMenuShow, setLogin, login }) => {
  const navigate = useNavigate();
  const [sub1State, setSub1State] = useState([false, false]);
  const [sub2State, setSub2State] = useState([false, false, false]);

  return (
    <div className={`side-menu ${sideMenuShow ? 'show' : null}`}>
      <div className="side-menu-inner">
        <div className="side-button-wrap">
          {login ? (
            <a
              href="#none"
              onClick={(e) => {
                e.preventDefault();
                alert('로그아웃 하셨습니다.');
                setSideMenuShow(false);
                setLogin(false);
                localStorage.setItem('login', false);
              }}
            >
              로그아웃
            </a>
          ) : (
            <a href="/login">로그인</a>
          )}
          <a href="/join">회원가입</a>
          <a href="#none">주문조회</a>
        </div>
        <div className="side-nav">
          <ul className="side-nav-menu">
            <li>
              <a href="#none">Brand</a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  let copy = [...sub1State];
                  copy[0] = !copy[0];
                  setSub1State(copy);
                }}
                href="#none"
              >
                Shop
                <img
                  className="side-arrow-img"
                  src={
                    sub1State[0]
                      ? '/img/home/up-arrow.gif'
                      : '/img/home/down-arrow.gif'
                  }
                  alt="서브메뉴1"
                />
              </a>
              <ul className={`sub1 ${sub1State[0] ? 'show' : null}`}>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      let map = sub2State.map((a, i) => {
                        if (i === 0) {
                          a = !a;
                        } else {
                          a = false;
                        }
                        return a;
                      });

                      setSub2State(map);
                    }}
                    href="#none"
                  >
                    <span style={{ fontWeight: sub2State[0] ? '500' : '' }}>
                      옷장&수납장
                    </span>
                    <span>
                      <span className="view-text">view</span>
                      <img
                        className="side-arrow-img"
                        src={
                          sub2State[0]
                            ? '/img/home/up-arrow.gif'
                            : '/img/home/down-arrow.gif'
                        }
                        alt="서브메뉴1"
                      />
                    </span>
                  </a>
                  <ul className={`sub2 ${sub2State[0] ? 'show' : null}`}>
                    <li>
                      <a href="/shop/옷장">옷장</a>
                    </li>
                    <li>
                      <a href="/shop/수납장">수납장</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#none">붙박이장</a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      let map = sub2State.map((a, i) => {
                        if (i === 1) {
                          a = !a;
                        } else {
                          a = false;
                        }
                        return a;
                      });

                      setSub2State(map);
                    }}
                    href="#none"
                  >
                    <span style={{ fontWeight: sub2State[1] ? '500' : '' }}>
                      거실가구
                    </span>
                    <span>
                      <span className="view-text">view</span>
                      <img
                        className="side-arrow-img"
                        src={
                          sub2State[1]
                            ? '/img/home/up-arrow.gif'
                            : '/img/home/down-arrow.gif'
                        }
                        alt="서브메뉴1"
                      />
                    </span>
                  </a>
                  <ul className={`sub2 ${sub2State[1] ? 'show' : null}`}>
                    <li>
                      <a href="/shop/거실테이블">거실테이블</a>
                    </li>
                    <li>
                      <a href="/shop/거실장">거실장</a>
                    </li>
                    <li>
                      <a href="/shop/조명&스탠드">조명/스탠드</a>
                    </li>
                    <li>
                      <a href="/shop/인테리어소품">인테리어 소품</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#none">거실장</a>
                </li>
                <li>
                  <a href="#none">주방가구</a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      let map = sub2State.map((a, i) => {
                        if (i === 2) {
                          a = !a;
                        } else {
                          a = false;
                        }
                        return a;
                      });
                      setSub2State(map);
                    }}
                    href="/shop/홈인테리어"
                  >
                    <span style={{ fontWeight: sub2State[2] ? '500' : '' }}>
                      홈인테리어
                    </span>
                    <span>
                      <span className="view-text">view</span>
                      <img
                        className="side-arrow-img"
                        src={
                          sub2State[2]
                            ? '/img/home/up-arrow.gif'
                            : '/img/home/down-arrow.gif'
                        }
                        alt="서브메뉴1"
                      />
                    </span>
                  </a>
                  <ul className={`sub2 ${sub2State[2] ? 'show' : null}`}>
                    <li>
                      <a href="/shop/거울">거울</a>
                    </li>
                    <li>
                      <a href="/shop/아로마">아로마마</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/shop/패브릭">패브릭</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  let copy = [...sub1State];
                  copy[1] = !copy[1];
                  setSub1State(copy);
                }}
                href="#none"
              >
                Community
                <img
                  className="side-arrow-img"
                  src={
                    sub2State[1]
                      ? '/img/home/up-arrow.gif'
                      : '/img/home/down-arrow.gif'
                  }
                  alt="서브메뉴1"
                />
              </a>
              <ul className={`sub1 ${sub1State[1] ? 'show' : null}`}>
                <li>
                  <a href="/notice">공지사항</a>
                </li>
                <li>
                  <a href="/상품 Q&A">상품 Q&A</a>
                </li>
                <li>
                  <a href="#none">자유게시판</a>
                </li>
                <li>
                  <a href="#none">갤러리</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/review">Review</a>
            </li>
            <li>
              <a href="/lookbook">Lookbook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const OverLay = ({ setSideMenuShow }) => {
  return (
    <div
      onClick={() => {
        setSideMenuShow(false);
      }}
      className="overlay"
    ></div>
  );
};
export { SideMenu, OverLay };
