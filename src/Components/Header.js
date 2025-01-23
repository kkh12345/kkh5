import { useState, useRef, useEffect } from "react";
import "./Header.css";
import Media from "react-responsive";
import Popup from "./Popup";
import { SideMenu, OverLay } from "./SideMenu";
import { useNavigate } from "react-router";
const Header = ({ login, setLogin, cartItems, setSearchValue, cartCount }) => {
  const navigate = useNavigate();

  const [sub1Show, setSub1Show] = useState([false, false, false]);
  const [sub2Show, setSub2Show] = useState([false, false, false]);
  const [sideMenuShow, setSideMenuShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const headerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (headerRef.current !== null) {
        if (headerRef.current.offsetTop < this.scrollY) {
          setHeaderFixed(true);
        } else if (this.scrollY <= popupRef.current.offsetHeight) {
          setHeaderFixed(false);
        }
      }
    });
  }, []);
  return (
    <div className={`header-wrapper`}>
      <Popup popupRef={popupRef}></Popup>
      <Media maxWidth={1024}>
        {sideMenuShow ? (
          <OverLay setSideMenuShow={setSideMenuShow}></OverLay>
        ) : null}

        <SideMenu
          sideMenuShow={sideMenuShow}
          setSideMenuShow={setSideMenuShow}
          setLogin={setLogin}
          login={login}
        ></SideMenu>
      </Media>
      <header
        onMouseEnter={() => {
          setHeaderWhite(true);
        }}
        onMouseLeave={() => {
          setHeaderWhite(false);
        }}
        ref={headerRef}
        className={`header ${
          headerFixed || searchShow || headerWhite ? "white" : null
        } ${headerFixed ? "fixed" : null}`}
      >
        <SearchArea
          setSearchValue={setSearchValue}
          navigate={navigate}
          searchShow={searchShow}
          setSearchShow={setSearchShow}
        ></SearchArea>
        <div className="header-inner home-inner">
          <Media maxWidth={1024}>
            <div
              onClick={() => {
                setSideMenuShow(true);
              }}
              className="hamburger-icon"
            >
              <img src="/img/home/hamburger.png" alt="메뉴" />
            </div>
          </Media>
          <div className="header-left">
            <a href="/">
              <img src="/img/home/logo.png" alt="로고" />
            </a>
          </div>

          <div className="header-center">
            <ul className="header-nav-menu">
              <li>
                <a href="/brand">BRAND</a>
              </li>
              <li
                onMouseLeave={() => {
                  let map = sub1Show.map((a, i) => {
                    if (i === 0) {
                      a = false;
                    }
                    return a;
                  });
                  setSub1Show(map);
                }}
                onMouseEnter={() => {
                  let map = sub1Show.map((a, i) => {
                    if (i === 0) {
                      a = true;
                    } else {
                      a = false;
                    }
                    return a;
                  });
                  setSub1Show(map);
                }}
              >
                <a href="/shop/옷장&수납장">SHOP</a>
                <ul className={`sub1 ${sub1Show[0] ? "show" : null}`}>
                  <li
                    onMouseLeave={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 0) {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                    onMouseEnter={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 0) {
                          a = true;
                        } else {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                  >
                    <a href="/shop/옷장&수납장">옷장&수납장</a>
                    <ul className={`sub2 ${sub2Show[0] ? "show" : null}`}>
                      <li>
                        <a href="/shop/옷장">옷장</a>
                      </li>
                      <li>
                        <a href="/shop/수납장">수납장</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/shop/붙박이장">붙박이장</a>
                  </li>
                  <li
                    onMouseLeave={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 1) {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                    onMouseEnter={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 1) {
                          a = true;
                        } else {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                  >
                    <a href="/shop/거실가구">거실가구</a>
                    <ul className={`sub2 ${sub2Show[1] ? "show" : null}`}>
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
                    <a href="/shop/거실장">거실장</a>
                  </li>
                  <li>
                    <a href="/shop/주방가구">주방가구</a>
                  </li>
                  <li
                    onMouseLeave={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 2) {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                    onMouseEnter={() => {
                      let map = sub2Show.map((a, i) => {
                        if (i === 2) {
                          a = true;
                        } else {
                          a = false;
                        }
                        return a;
                      });
                      setSub2Show(map);
                    }}
                  >
                    <a href="/shop/홈인테리어">홈인테리어</a>
                    <ul className={`sub2 ${sub2Show[2] ? "show" : null}`}>
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
              <li
                onMouseLeave={() => {
                  let map = sub1Show.map((a, i) => {
                    if (i === 1) {
                      a = false;
                    }
                    return a;
                  });
                  setSub1Show(map);
                }}
                onMouseEnter={() => {
                  let map = sub1Show.map((a, i) => {
                    if (i === 1) {
                      a = true;
                    } else {
                      a = false;
                    }
                    return a;
                  });
                  setSub1Show(map);
                }}
              >
                <a href="/community">COMMUNITY</a>
                <ul className={`sub1 ${sub1Show[1] ? "show" : null}`}>
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
                <a href="/review">REVIEW</a>
              </li>
              <li>
                <a href="/lookbook">LOOKBOOK</a>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <ul className="header-icons">
              <li
                onMouseLeave={() => {
                  let map = sub1Show.map((a, i) => {
                    if (i === 2) {
                      a = false;
                    }
                    return a;
                  });
                  setSub1Show(map);
                }}
              >
                <a
                  onMouseEnter={() => {
                    let map = sub1Show.map((a, i) => {
                      if (i === 2) {
                        a = true;
                      } else {
                        a = false;
                      }
                      return a;
                    });
                    setSub1Show(map);
                  }}
                  href="#none"
                >
                  <img src="/img/home/my.png" alt="마이페이지" />
                </a>
                <ul className={`sub1 ${sub1Show[2] ? "show" : null}`}>
                  <li>
                    {login ? (
                      <a
                        href="#none"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("로그아웃 하셨습니다.");
                          navigate("/");
                          setLogin(false);
                          localStorage.setItem("login", false);
                        }}
                      >
                        로그아웃
                      </a>
                    ) : (
                      <a href="/login">로그인</a>
                    )}
                  </li>
                  <li>
                    <a
                      href="/join
                    "
                    >
                      회원가입
                    </a>
                  </li>
                  <li>
                    <a href="#none">주문조회</a>
                  </li>
                  <li>
                    <a href="#none">마이페이지</a>
                  </li>
                  <li>
                    <a href="#none">쿠폰존</a>
                  </li>
                </ul>
              </li>
              <li className="cart-icon">
                <a href="/cart">
                  <span className="cart-count">{cartCount}</span>
                  <img src="/img/home/cart.png" alt="장바구니페이지" />
                </a>
              </li>
              <li>
                <a
                  href="#none"
                  onClick={(e) => {
                    e.preventDefault();
                    setSearchShow(!searchShow);
                  }}
                >
                  <img
                    src={
                      searchShow
                        ? "/img/home/close.png"
                        : "/img/home/search.png"
                    }
                    alt="검색아이콘"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

const SearchArea = ({
  searchShow,
  setSearchShow,

  setSearchValue,

  navigate,
}) => {
  return (
    <div className={`search-area ${searchShow ? "show" : null}`}>
      <div className="search-container">
        <div className="search-function">
          <input className="search-input" type="text" />
          <a
            href="#none"
            className="search-icon"
            onClick={(e) => {
              e.preventDefault();
              if (e.currentTarget.previousElementSibling.value !== "") {
                setSearchValue(e.currentTarget.previousElementSibling.value);

                setSearchShow(false);
                navigate("/search");
              } else {
                alert("검색어를 입력하세요");
              }
            }}
          >
            <i className="xi-search"></i>
          </a>
        </div>
        <div className="search-tag">
          <a
            href="#none"
            onClick={() => {
              setSearchValue("BOWL");
              setSearchShow(false);
              navigate("/search");
            }}
          >
            #BOWL
          </a>
          <a
            href="#none"
            onClick={() => {
              setSearchValue("STRIPE");
              setSearchShow(false);
              navigate("/search");
            }}
          >
            #STRIPE
          </a>
          <a
            href="#none"
            onClick={() => {
              setSearchValue("VASE");
              setSearchShow(false);
              navigate("/search");
            }}
          >
            #VASE
          </a>
          <a
            href="#none"
            onClick={() => {
              setSearchValue("T");
              setSearchShow(false);
              navigate("/search");
            }}
          >
            #T
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
