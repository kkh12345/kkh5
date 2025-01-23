import "./ProductDetail.css";
import ProductInfo from "../Components/ProductInfo";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductDetail = ({ cartItems, setCartItems }) => {
  const productDetailRef = useRef();
  const { id } = useParams();
  const [findReview, setFindReview] = useState(null);

  useEffect(() => {
    const getReview = JSON.parse(localStorage.getItem("reviews"));
    if (getReview !== null) {
      let filter = getReview.filter((a) => {
        return a.productId === parseInt(id);
      });

      setFindReview(filter);
    }
  }, []);
  useEffect(() => {
    productDetailRef.current.parentElement.children[0].style.position =
      "relative";
  }, []);

  return (
    <div className="product-detail" ref={productDetailRef}>
      <div className="product-detail-inner home-inner">
        <ProductInfo
          cartItems={cartItems}
          setCartItems={setCartItems}
          id={id}
        ></ProductInfo>
        <ProductDetailTap
          findReview={findReview !== null ? findReview : null}
        ></ProductDetailTap>
      </div>
    </div>
  );
};

const ProductDetailTap = ({ findReview }) => {
  const [tapMenu, setTapMenu] = useState([
    "상품상세정보",
    "상품구매안내",
    "상품사용후기",
    "상품Q&A",
    "관련상품",
  ]);
  const [selectedMenu, setSelectedMenu] = useState(
    tapMenu.map((a, i) => {
      if (i === 0) {
        return true;
      } else {
        return false;
      }
    })
  );
  const [products, setProducts] = useState(null);
  useEffect(() => {
    let getProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(getProducts);
  }, []);

  return (
    <div className="product-detail-tap">
      <ul className="menu">
        {tapMenu.map((a, i) => {
          return (
            <li
              onClick={() => {
                let map = selectedMenu.map((b, j) => {
                  if (j === i) {
                    return true;
                  } else {
                    return false;
                  }
                });
                setSelectedMenu(map);
              }}
              className={selectedMenu[i] ? `selected` : null}
              key={i}
            >
              {a}
            </li>
          );
        })}
      </ul>
      <div className="product-detail-tap-content">
        {selectedMenu[0] ? (
          <div className="tap-content0">
            <img src="/img/home/detail_sample01.jpg" alt="상품이미지샘플" />
          </div>
        ) : null}
        {selectedMenu[1] ? (
          <ul className="tap-content1">
            <li>
              <h4>[ 상품결제정보 ]</h4>
              <p>
                고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도
                있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등
                정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는
                취소할 수 있습니다.
              </p>
              <p>
                무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
                가까운 은행에서 직접 입금하시면 됩니다.{" "}
              </p>
              <p>
                주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야
                하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은
                자동취소 됩니다.
              </p>
            </li>
            <li>
              <h4>[ 배송정보 ]</h4>

              <p>배송 방법 : 택배</p>
              <p>배송 지역 : 전국지역</p>
              <p>배송 비용 : 2,500원</p>
              <p>배송 기간 : 3일 ~ 7일</p>
              <p>
                배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야
                하는 경우가 있습니다.
              </p>
              <p>
                고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만,
                상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
              </p>
            </li>
            <li>
              <h4>[ 서비스문의 ]</h4>
            </li>
            <li>
              <h4>[ 교환 및 반품정보 ]</h4>
              <h5> 교환 및 반품 주소</h5>
              <p>-</p>
              <h5>교환 및 반품이 가능한 경우</h5>{" "}
              <p>- 계약내용에 관한 서면을 받은 날부터 7일.</p>
              <p>
                단, 그 서면을 받은 때보다 재화등의 공급이 늦게 이루어진 경우에는
                재화등을 공급받거나 재화등의 공급이 시작된 날부터 7일 이내
              </p>
              <p>
                {" "}
                - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나
                계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날 부터
                3월이내, 그사실을 알게 된 날 또는 알 수 있었던 날부터 30일이내{" "}
              </p>
              <h5>교환 및 반품이 불가능한 경우</h5> -{" "}
              <p>
                이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된
                경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한
                경우에는 청약철회를 할 수 있습니다)
              </p>{" "}
              <p>
                - 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히
                감소한 경우
              </p>{" "}
              <p>
                - 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가
                현저히 감소한 경우{" "}
              </p>
              <p>- 복제가 가능한 재화등의 포장을 훼손한 경우</p>{" "}
              <p>
                - 개별 주문 생산되는 재화 등 청약철회시 판매자에게 회복할 수
                없는 피해가 예상되어 소비자의 사전 동의를 얻은 경우 - 디지털
                콘텐츠의 제공이 개시된 경우, (다만, 가분적 용역 또는 가분적
                디지털콘텐츠로 구성된 계약의 경우 제공이 개시되지 아니한 부분은
                청약철회를 할 수 있습니다.)
              </p>{" "}
              <p>
                {" "}
                ※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
                고객님께서 부담하셔야 합니다.
              </p>{" "}
              <p>(색상 교환, 사이즈 교환 등 포함)</p>
            </li>
          </ul>
        ) : null}
        {selectedMenu[2] ? (
          <table className="tap-content03">
            <thead>
              <tr>
                <th>번호</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              {findReview !== null ? (
                findReview.length > 0 ? (
                  findReview.map((a, i) => {
                    return (
                      <tr key={i}>
                        <td>{i}</td>
                        <td></td>
                        <td>{a.reviewTitle}</td>
                        <td>{a.author}</td>
                        <td>{a.date}</td>
                        <td>{a.viewCount}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>상품에 대한 리뷰가 없습니다.</td>
                  </tr>
                )
              ) : null}
            </tbody>
          </table>
        ) : null}
        {selectedMenu[3] ? (
          <table className="tap-content04">
            <thead>
              <tr>
                <th>번호</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>상품 qna게시판입니다. 문의를 남겨주세요!</td>
                <td>MOANY</td>
                <td>2023-02-21 09:44:33</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        ) : null}
        {selectedMenu[4] ? (
          <Swiper
            pagination={{ clickable: true }}
            slidesPerView={6}
            modules={[Pagination]}
            className="tapContent05Swiper"
            spaceBetween={20}
          >
            {products !== null
              ? products.map((product, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img src={product.productImg} alt={product.name} />
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};
export default ProductDetail;
